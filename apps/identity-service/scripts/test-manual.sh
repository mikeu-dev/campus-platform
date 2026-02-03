#!/bin/bash

BASE_URL="http://localhost:3001"

echo "1. Checking Health..."
curl -s "$BASE_URL/health" | jq
echo ""

echo "2. Creating Tenant 'univ-a'..."
curl -s -X POST "$BASE_URL/auth/tenants" \
  -H "Content-Type: application/json" \
  -d '{"name": "University A", "slug": "univ-a", "domain": "univ-a.com"}' | jq
echo ""

echo "3. Registering User 'student@univ-a.com'..."
curl -s -X POST "$BASE_URL/auth/register" \
  -H "Content-Type: application/json" \
  -d '{"email": "student@univ-a.com", "password": "password123", "fullName": "Student One", "tenantSlug": "univ-a"}' | jq
echo ""

echo "4. Logging in..."
LOGIN_RES=$(curl -s -X POST "$BASE_URL/auth/login" \
  -H "Content-Type: application/json" \
  -d '{"email": "student@univ-a.com", "password": "password123"}')

echo $LOGIN_RES | jq
echo ""

TOKEN=$(echo $LOGIN_RES | jq -r '.data.token')
echo "Token: $TOKEN"

echo "5. Testing Protected Route /auth/me..."
curl -s -X GET "$BASE_URL/auth/me" \
  -H "Authorization: Bearer $TOKEN" | jq

