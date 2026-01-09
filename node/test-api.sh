#!/bin/bash

# Task Management API Test Script
# Make sure the server is running before executing this script

BASE_URL="http://localhost:5000"

echo "================================"
echo "Task Management API Test"
echo "================================"
echo ""

# Health Check
echo "1. Health Check"
curl -s "$BASE_URL/health" | json_pp
echo -e "\n"

# Create Task 1
echo "2. Creating Task 1..."
TASK1=$(curl -s -X POST "$BASE_URL/api/tasks" \
  -H "Content-Type: application/json" \
  -d '{
    "title": "Learn Node.js",
    "description": "Complete Node.js tutorial",
    "status": "in-progress",
    "priority": "high"
  }')
echo $TASK1 | json_pp
TASK1_ID=$(echo $TASK1 | grep -o '"_id":"[^"]*' | grep -o '[^"]*$' | tail -1)
echo -e "\n"

# Create Task 2
echo "3. Creating Task 2..."
curl -s -X POST "$BASE_URL/api/tasks" \
  -H "Content-Type: application/json" \
  -d '{
    "title": "Build REST API",
    "description": "Create a complete CRUD API",
    "status": "pending",
    "priority": "medium"
  }' | json_pp
echo -e "\n"

# Create Task 3
echo "4. Creating Task 3..."
curl -s -X POST "$BASE_URL/api/tasks" \
  -H "Content-Type: application/json" \
  -d '{
    "title": "Deploy to Production",
    "description": "Deploy the application",
    "status": "pending",
    "priority": "low"
  }' | json_pp
echo -e "\n"

# Get All Tasks
echo "5. Getting All Tasks..."
curl -s "$BASE_URL/api/tasks" | json_pp
echo -e "\n"

# Get Task by ID
if [ ! -z "$TASK1_ID" ]; then
  echo "6. Getting Task by ID: $TASK1_ID"
  curl -s "$BASE_URL/api/tasks/$TASK1_ID" | json_pp
  echo -e "\n"
fi

# Update Task
if [ ! -z "$TASK1_ID" ]; then
  echo "7. Updating Task..."
  curl -s -X PUT "$BASE_URL/api/tasks/$TASK1_ID" \
    -H "Content-Type: application/json" \
    -d '{
      "status": "completed"
    }' | json_pp
  echo -e "\n"
fi

# Get All Tasks Again
echo "8. Getting All Tasks (after update)..."
curl -s "$BASE_URL/api/tasks" | json_pp
echo -e "\n"

# Delete Task
if [ ! -z "$TASK1_ID" ]; then
  echo "9. Deleting Task..."
  curl -s -X DELETE "$BASE_URL/api/tasks/$TASK1_ID" | json_pp
  echo -e "\n"
fi

# Get All Tasks Final
echo "10. Getting All Tasks (after delete)..."
curl -s "$BASE_URL/api/tasks" | json_pp
echo -e "\n"

echo "================================"
echo "Test Complete!"
echo "================================"
