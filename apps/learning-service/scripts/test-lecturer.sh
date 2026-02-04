#!/bin/bash

IDENTITY_URL="http://localhost:3001"
ACADEMIC_URL="http://localhost:3002/api/v1"
LEARNING_URL="http://localhost:3003/api/v1"

echo "1. Registering & Logging in as Lecturer..."
# Register a new user for lecturer
curl -s -X POST "$IDENTITY_URL/auth/register" \
  -H "Content-Type: application/json" \
  -d '{"email": "lecturer@univ-a.com", "password": "password123", "fullName": "Dr. Strange", "tenantSlug": "univ-a", "roleName": "lecturer"}' > /dev/null

LOGIN_RES=$(curl -s -X POST "$IDENTITY_URL/auth/login" \
  -H "Content-Type: application/json" \
  -d '{"email": "lecturer@univ-a.com", "password": "password123"}')

TOKEN=$(echo $LOGIN_RES | jq -r '.data.token')
echo "Lecturer Token: $TOKEN"

echo "2. Creating Lecturer Profile..."
LEC_RES=$(curl -s -X POST "$ACADEMIC_URL/lecturers" \
  -H "Authorization: Bearer $TOKEN" \
  -H "Content-Type: application/json" \
  -d "{\"user_id\": \"$(echo $LOGIN_RES | jq -r '.data.user.id')\", \"name\": \"Dr. Strange\", \"lecturer_number\": \"L001\"}")
echo $LEC_RES | jq
LEC_ID=$(echo $LEC_RES | jq -r '.data.id')

# Random Course Code
CODE="MAGIC_$RANDOM"
echo "Creating Course $CODE..."

COURSE_RES=$(curl -s -X POST "$ACADEMIC_URL/courses" \
  -H "Authorization: Bearer $TOKEN" \
  -H "Content-Type: application/json" \
  -d "{\"code\": \"$CODE\", \"name\": \"Advanced Magic\", \"credits\": 4}")
echo "Course Res: $COURSE_RES"
COURSE_ID=$(echo $COURSE_RES | jq -r '.data.id')

if [ "$COURSE_ID" == "null" ]; then
    echo "Failed to create course"
    exit 1
fi

CLASS_RES=$(curl -s -X POST "$ACADEMIC_URL/classes" \
  -H "Authorization: Bearer $TOKEN" \
  -H "Content-Type: application/json" \
  -d "{\"course_id\": \"$COURSE_ID\", \"semester\": \"1\", \"year\": 2026, \"lecturer_id\": \"$LEC_ID\"}")
echo "Class Res: $CLASS_RES"
CLASS_ID=$(echo $CLASS_RES | jq -r '.data.id')
echo "Class Opened: $CLASS_ID (Lecturer: $LEC_ID)"

echo "4. Adding Material..."
MAT_RES=$(curl -s -X POST "$LEARNING_URL/classes/$CLASS_ID/materials" \
  -H "Authorization: Bearer $TOKEN" \
  -H "Content-Type: application/json" \
  -d '{"title": "Spells PDF", "content": "http://spells.com/pdf", "type": "link"}')
echo $MAT_RES | jq

echo "5. Creating Assignment..."
ASSIGN_RES=$(curl -s -X POST "$LEARNING_URL/classes/$CLASS_ID/assignments" \
  -H "Authorization: Bearer $TOKEN" \
  -H "Content-Type: application/json" \
  -d '{"title": "Cast Fireball", "description": "Record a video", "deadline": "2026-12-31T23:59:59Z"}')
ASSIGN_ID=$(echo $ASSIGN_RES | jq -r '.data.id')
echo "Assignment Created: $ASSIGN_ID"

# Need a student to submit
echo "6. Logging in as Student..."
STUDENT_LOGIN_RES=$(curl -s -X POST "$IDENTITY_URL/auth/login" \
  -H "Content-Type: application/json" \
  -d '{"email": "student@univ-a.com", "password": "password123"}')
STUDENT_TOKEN=$(echo $STUDENT_LOGIN_RES | jq -r '.data.token')

# Get Student ID (Profile)
S_PROFILE_RES=$(curl -s -X GET "$ACADEMIC_URL/students/me" -H "Authorization: Bearer $STUDENT_TOKEN")
STUDENT_ID=$(echo $S_PROFILE_RES | jq -r '.data.id')

# Enroll Student (optional for submission? Schema doesn't enforce enrollment check yet, but logic might)
# Submit
echo "7. Student Submitting..."
SUB_RES=$(curl -s -X POST "$LEARNING_URL/assignments/$ASSIGN_ID/submit" \
  -H "Authorization: Bearer $STUDENT_TOKEN" \
  -H "Content-Type: application/json" \
  -d "{\"student_id\": \"$STUDENT_ID\", \"content\": \"Video Link...\"}")
echo $SUB_RES | jq
SUB_ID=$(echo $SUB_RES | jq -r '.data.id')

echo "8. Lecturer Grading..."
GRADE_RES=$(curl -s -X POST "$LEARNING_URL/submissions/$SUB_ID/grade" \
  -H "Authorization: Bearer $TOKEN" \
  -H "Content-Type: application/json" \
  -d "{\"score\": 95, \"feedback\": \"Excellent form!\"}")
echo $GRADE_RES | jq
