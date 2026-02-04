#!/bin/bash

IDENTITY_URL="http://localhost:3001/auth"

echo "1. Registering Admin..."
# Register as admin (assume we can self-register as admin for MVP or use existing logic)
# Actually, our register endpoint allows setting role? Let's check schema.
# registerSchema has roleName optional. Controller defaults to 'student' in service if not passed? 
# Wait, service has `roleName = 'student'` default.
# Let's try to register as 'admin'.
EMAIL="admin@univ-a.com"
PASSWORD="password123"

curl -s -X POST "$IDENTITY_URL/register" \
  -H "Content-Type: application/json" \
  -d "{\"email\": \"$EMAIL\", \"password\": \"$PASSWORD\", \"fullName\": \"Admin User\", \"tenantSlug\": \"univ-a\", \"roleName\": \"admin\"}" > /dev/null

echo "2. Logging in as Admin..."
LOGIN_RES=$(curl -s -X POST "$IDENTITY_URL/login" \
  -H "Content-Type: application/json" \
  -d "{\"email\": \"$EMAIL\", \"password\": \"$PASSWORD\"}")

TOKEN=$(echo $LOGIN_RES | jq -r '.data.token')
echo "Admin Token: $TOKEN"

echo "3. Creating New User (Lecturer via Admin API)..."
NEW_USER_EMAIL="lecturer.new@univ-a.com"
CREATE_RES=$(curl -s -X POST "$IDENTITY_URL/users" \
  -H "Authorization: Bearer $TOKEN" \
  -H "Content-Type: application/json" \
  -d "{\"email\": \"$NEW_USER_EMAIL\", \"password\": \"password123\", \"fullName\": \"New Lecturer\", \"roleName\": \"lecturer\"}")
echo "Create Res: $CREATE_RES"

echo "4. Listing Users..."
LIST_RES=$(curl -s -X GET "$IDENTITY_URL/users" \
  -H "Authorization: Bearer $TOKEN")
echo "List Res: $LIST_RES"

# Check if new user is in list
if echo "$LIST_RES" | grep -q "$NEW_USER_EMAIL"; then
    echo "SUCCESS: New user found in list."
else
    echo "FAILURE: New user not found."
    exit 1
fi
