#!/bin/bash

IDENTITY_URL="http://localhost:3001"
ACADEMIC_URL="http://localhost:3002/api/v1"

echo "1. Getting Token from Identity Service..."
LOGIN_RES=$(curl -s -X POST "$IDENTITY_URL/auth/login" \
  -H "Content-Type: application/json" \
  -d '{"email": "student@univ-a.com", "password": "password123"}')

TOKEN=$(echo $LOGIN_RES | jq -r '.data.token')
USER_ID=$(echo $LOGIN_RES | jq -r '.data.user.id')

if [ "$TOKEN" == "null" ]; then
  echo "Failed to get token. Is Identity Service running? Did you run the identity test script first?"
  echo $LOGIN_RES | jq
  exit 1
fi
echo "Token: $TOKEN"
echo "User ID: $USER_ID"
echo ""

echo "2. Creating Course (CS101)..."
COURSE_RES=$(curl -s -X POST "$ACADEMIC_URL/courses" \
  -H "Authorization: Bearer $TOKEN" \
  -H "Content-Type: application/json" \
  -d '{"code": "CS101", "name": "Intro to Computer Science", "credits": 3}')
echo $COURSE_RES | jq
COURSE_ID=$(echo $COURSE_RES | jq -r '.data.id')
echo "Course ID: $COURSE_ID"
echo ""

echo "3. Creating Student Profile..."
STUDENT_RES=$(curl -s -X POST "$ACADEMIC_URL/students" \
  -H "Authorization: Bearer $TOKEN" \
  -H "Content-Type: application/json" \
  -d "{\"user_id\": \"$USER_ID\", \"name\": \"Student One\", \"student_number\": \"20230001\"}")
echo $STUDENT_RES | jq
STUDENT_ID=$(echo $STUDENT_RES | jq -r '.data.id')
echo "Student ID: $STUDENT_ID"
echo ""

echo "4. Creating Class (2023-1)..."
CLASS_RES=$(curl -s -X POST "$ACADEMIC_URL/classes" \
  -H "Authorization: Bearer $TOKEN" \
  -H "Content-Type: application/json" \
  -d "{\"course_id\": \"$COURSE_ID\", \"semester\": \"2023-1\", \"year\": 2023}")
echo $CLASS_RES | jq
CLASS_ID=$(echo $CLASS_RES | jq -r '.data.id')
echo "Class ID: $CLASS_ID"
echo ""

echo "5. Enrolling Student..."
ENROLL_RES=$(curl -s -X POST "$ACADEMIC_URL/enrollments" \
  -H "Authorization: Bearer $TOKEN" \
  -H "Content-Type: application/json" \
  -d "{\"class_id\": \"$CLASS_ID\", \"student_id\": \"$STUDENT_ID\"}")
echo $ENROLL_RES | jq
echo ""

echo "6. Verifying My Enrollments..."
curl -s -X GET "$ACADEMIC_URL/enrollments/my" \
  -H "Authorization: Bearer $TOKEN" | jq
