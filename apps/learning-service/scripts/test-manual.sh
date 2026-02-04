#!/bin/bash

IDENTITY_URL="http://localhost:3001"
LEARNING_URL="http://localhost:3003/api/v1"

echo "1. Getting Token from Identity Service..."
LOGIN_RES=$(curl -s -X POST "$IDENTITY_URL/auth/login" \
  -H "Content-Type: application/json" \
  -d '{"email": "student@univ-a.com", "password": "password123"}')

TOKEN=$(echo $LOGIN_RES | jq -r '.data.token')

if [ "$TOKEN" == "null" ]; then
  echo "Failed to get token."
  exit 1
fi
echo "Token: $TOKEN"
echo ""

# Generate a fake Class ID and Student ID (Learning Service doesn't check existence in Academic yet)
CLASS_ID="550e8400-e29b-41d4-a716-446655440000"
STUDENT_ID="550e8400-e29b-41d4-a716-446655440099"

echo "2. Adding Material to Class $CLASS_ID..."
MAT_RES=$(curl -s -X POST "$LEARNING_URL/classes/$CLASS_ID/materials" \
  -H "Authorization: Bearer $TOKEN" \
  -H "Content-Type: application/json" \
  -d '{"title": "Week 1 Slides", "content": "PDF Link...", "type": "file"}')
echo $MAT_RES | jq
echo ""

echo "3. Creating Assignment..."
ASSIGN_RES=$(curl -s -X POST "$LEARNING_URL/classes/$CLASS_ID/assignments" \
  -H "Authorization: Bearer $TOKEN" \
  -H "Content-Type: application/json" \
  -d '{"title": "Homework 1", "description": "Solve problems 1-10", "deadline": "2026-12-31T23:59:59Z"}')
echo $ASSIGN_RES | jq
ASSIGN_ID=$(echo $ASSIGN_RES | jq -r '.data.id')
echo "Assignment ID: $ASSIGN_ID"
echo ""

echo "4. Submitting Assignment..."
SUB_RES=$(curl -s -X POST "$LEARNING_URL/assignments/$ASSIGN_ID/submit" \
  -H "Authorization: Bearer $TOKEN" \
  -H "Content-Type: application/json" \
  -d "{\"student_id\": \"$STUDENT_ID\", \"content\": \"My Answer is 42\"}")
echo $SUB_RES | jq
echo ""

echo "5. Verifying Submission..."
curl -s -X GET "$LEARNING_URL/assignments/$ASSIGN_ID/my-submission?studentId=$STUDENT_ID" \
  -H "Authorization: Bearer $TOKEN" | jq
