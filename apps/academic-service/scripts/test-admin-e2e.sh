#!/bin/bash

IDENTITY_URL="http://localhost:3001/auth"
ACADEMIC_URL="http://localhost:3002/api/v1"

echo "1. Logging in as Admin..."
EMAIL="admin@univ-a.com"
PASSWORD="password123"

# Ensure admin exists (or use one)
LOGIN_RES=$(curl -s -X POST "$IDENTITY_URL/login" \
  -H "Content-Type: application/json" \
  -d "{\"email\": \"$EMAIL\", \"password\": \"$PASSWORD\"}")

TOKEN=$(echo $LOGIN_RES | jq -r '.data.token')
echo "Admin Token: $TOKEN"

echo "2. Creating New Lecturer (Dr. Fate)..."
LEC_EMAIL="dr.fate.$RANDOM@univ-a.com"
USER_RES=$(curl -s -X POST "$IDENTITY_URL/users" \
  -H "Authorization: Bearer $TOKEN" \
  -H "Content-Type: application/json" \
  -d "{\"email\": \"$LEC_EMAIL\", \"password\": \"password123\", \"fullName\": \"Dr. Fate\", \"roleName\": \"lecturer\"}")
echo $USER_RES | jq
LEC_USER_ID=$(echo $USER_RES | jq -r '.data.id')

echo "3. Creating Lecturer Profile (Academic)..."
# In the Portal flow, the admin might need to create the Academic Profile too?
# Or does the user do it?
# Our current Admin User Management just creates the Identity User.
# The Lecturer must log in and create their profile, OR the Admin does it?
# The `GET /lecturers` uses Academic Lecturers table. 
# If I just created an Identity User, they don't have an Academic Profile yet.
# My `createClass` UI fetches from `GET /lecturers`.
# So to assign a lecturer, they MUST have a profile.
# Let's see if Admin can create Lecturer Profile. 
# `POST /lecturers` checks `req.body.user_id`. Admin can pass it?
# The controller logic: `lecturerSchema` has `user_id`. `tenantId` from `req.user`.
# It doesn't check if `req.user.sub == user_id`. So Admin CAN create it for them.
LEC_PROF_RES=$(curl -s -X POST "$ACADEMIC_URL/lecturers" \
  -H "Authorization: Bearer $TOKEN" \
  -H "Content-Type: application/json" \
  -d "{\"user_id\": \"$LEC_USER_ID\", \"name\": \"Dr. Fate\", \"lecturer_number\": \"L_$RANDOM\"}")
echo $LEC_PROF_RES | jq
LEC_ID=$(echo $LEC_PROF_RES | jq -r '.data.id')

echo "4. Creating Course..."
COURSE_CODE="CS_$RANDOM"
COURSE_RES=$(curl -s -X POST "$ACADEMIC_URL/courses" \
  -H "Authorization: Bearer $TOKEN" \
  -H "Content-Type: application/json" \
  -d "{\"code\": \"$COURSE_CODE\", \"name\": \"Computer Science $RANDOM\", \"credits\": 3}")
echo $COURSE_RES | jq
COURSE_ID=$(echo $COURSE_RES | jq -r '.data.id')

echo "5. Verifying Lecturer List..."
LIST_RES=$(curl -s -X GET "$ACADEMIC_URL/lecturers" \
  -H "Authorization: Bearer $TOKEN")
# Check if LEC_ID is in there
if echo "$LIST_RES" | grep -q "$LEC_ID"; then
    echo "Lecturer found in list."
else
    echo "Lecturer NOT found."
    exit 1
fi

echo "6. Opening Class..."
CLASS_RES=$(curl -s -X POST "$ACADEMIC_URL/classes" \
  -H "Authorization: Bearer $TOKEN" \
  -H "Content-Type: application/json" \
  -d "{\"course_id\": \"$COURSE_ID\", \"semester\": \"1\", \"year\": 2026, \"lecturer_id\": \"$LEC_ID\"}")
echo $CLASS_RES | jq
CLASS_ID=$(echo $CLASS_RES | jq -r '.data.id')

if [ "$CLASS_ID" != "null" ]; then
    echo "Class Opened Successfully: $CLASS_ID"
else
    echo "Failed to open class."
    exit 1
fi
