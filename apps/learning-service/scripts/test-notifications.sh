#!/bin/bash

IDENTITY_URL="http://localhost:3001/auth"
LEARNING_URL="http://localhost:3003/api/v1"

echo "1. Logging in..."
LOGIN_RES=$(curl -s -X POST "$IDENTITY_URL/login" \
  -H "Content-Type: application/json" \
  -d '{"email": "student@univ-a.com", "password": "password123"}')
TOKEN=$(echo $LOGIN_RES | jq -r '.data.token')
USER_ID=$(echo $LOGIN_RES | jq -r '.data.user.id')
echo "Token: ${TOKEN:0:50}..."
echo "User ID: $USER_ID"

echo -e "\n2. Creating a notification..."
NOTIF_RES=$(curl -s -X POST "$LEARNING_URL/notifications" \
  -H "Content-Type: application/json" \
  -H "Authorization: Bearer $TOKEN" \
  -d "{\"user_id\": \"$USER_ID\", \"type\": \"assignment\", \"title\": \"New Assignment: Midterm\", \"message\": \"Submit by Friday\", \"link\": \"/dashboard/classes/abc/assignments/123\"}")
echo "Create Response: $NOTIF_RES"
NOTIF_ID=$(echo $NOTIF_RES | jq -r '.data.id')

echo -e "\n3. Getting notifications..."
GET_RES=$(curl -s -X GET "$LEARNING_URL/notifications" \
  -H "Authorization: Bearer $TOKEN")
echo "Get Response: $GET_RES"

echo -e "\n4. Getting unread count..."
COUNT_RES=$(curl -s -X GET "$LEARNING_URL/notifications/unread-count" \
  -H "Authorization: Bearer $TOKEN")
echo "Count Response: $COUNT_RES"

echo -e "\n5. Marking notification as read..."
READ_RES=$(curl -s -X PATCH "$LEARNING_URL/notifications/$NOTIF_ID/read" \
  -H "Authorization: Bearer $TOKEN")
echo "Read Response: $READ_RES"

echo -e "\n6. Getting unread count again..."
COUNT_RES2=$(curl -s -X GET "$LEARNING_URL/notifications/unread-count" \
  -H "Authorization: Bearer $TOKEN")
echo "Count Response: $COUNT_RES2"

echo -e "\nDONE!"
