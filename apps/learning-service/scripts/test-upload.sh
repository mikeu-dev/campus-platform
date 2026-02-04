#!/bin/bash

# Define Variables
LEARNING_URL="http://localhost:3003/api/v1"
IDENTITY_URL="http://localhost:3001/auth"
ADMIN_EMAIL="admin@univ-a.com"
ADMIN_PASS="password123"

# 1. Login to get Token
echo "Logging in..."
LOGIN_RES=$(curl -s -X POST "$IDENTITY_URL/login" \
  -H "Content-Type: application/json" \
  -d "{\"email\": \"$ADMIN_EMAIL\", \"password\": \"$ADMIN_PASS\"}")
TOKEN=$(echo $LOGIN_RES | jq -r '.data.token')
echo "Token: $TOKEN"

# 2. Create a dummy file
echo "Creating dummy file..."
echo "This is a test file content" > testfile.txt

# 3. Upload File
echo "Uploading file..."
UPLOAD_RES=$(curl -s -X POST "$LEARNING_URL/upload" \
  -H "Authorization: Bearer $TOKEN" \
  -F "file=@testfile.txt")

echo "Upload Response: $UPLOAD_RES"

# 4. Extract URL and Verify
FILE_URL=$(echo $UPLOAD_RES | jq -r '.data.url')
if [[ $FILE_URL == http* ]]; then
    echo "SUCCESS: File uploaded. URL: $FILE_URL"
else
    echo "FAILURE: Upload failed."
    rm testfile.txt
    exit 1
fi

# Cleanup
rm testfile.txt
