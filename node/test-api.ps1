# Task Management API Test Script (PowerShell)
# Make sure the server is running before executing this script

$BaseUrl = "http://localhost:5000"

Write-Host "================================" -ForegroundColor Cyan
Write-Host "Task Management API Test" -ForegroundColor Cyan
Write-Host "================================" -ForegroundColor Cyan
Write-Host ""

# Health Check
Write-Host "1. Health Check" -ForegroundColor Yellow
Invoke-RestMethod -Uri "$BaseUrl/health" -Method Get | ConvertTo-Json
Write-Host ""

# Create Task 1
Write-Host "2. Creating Task 1..." -ForegroundColor Yellow
$task1Body = @{
    title = "Learn Node.js"
    description = "Complete Node.js tutorial"
    status = "in-progress"
    priority = "high"
} | ConvertTo-Json

$task1 = Invoke-RestMethod -Uri "$BaseUrl/api/tasks" -Method Post -Body $task1Body -ContentType "application/json"
$task1 | ConvertTo-Json
$task1Id = $task1.data.id
if (-not $task1Id) { $task1Id = $task1.data._id }
Write-Host ""

# Create Task 2
Write-Host "3. Creating Task 2..." -ForegroundColor Yellow
$task2Body = @{
    title = "Build REST API"
    description = "Create a complete CRUD API"
    status = "pending"
    priority = "medium"
} | ConvertTo-Json

Invoke-RestMethod -Uri "$BaseUrl/api/tasks" -Method Post -Body $task2Body -ContentType "application/json" | ConvertTo-Json
Write-Host ""

# Create Task 3
Write-Host "4. Creating Task 3..." -ForegroundColor Yellow
$task3Body = @{
    title = "Deploy to Production"
    description = "Deploy the application"
    status = "pending"
    priority = "low"
} | ConvertTo-Json

Invoke-RestMethod -Uri "$BaseUrl/api/tasks" -Method Post -Body $task3Body -ContentType "application/json" | ConvertTo-Json
Write-Host ""

# Get All Tasks
Write-Host "5. Getting All Tasks..." -ForegroundColor Yellow
Invoke-RestMethod -Uri "$BaseUrl/api/tasks" -Method Get | ConvertTo-Json -Depth 5
Write-Host ""

# Get Task by ID
if ($task1Id) {
    Write-Host "6. Getting Task by ID: $task1Id" -ForegroundColor Yellow
    Invoke-RestMethod -Uri "$BaseUrl/api/tasks/$task1Id" -Method Get | ConvertTo-Json
    Write-Host ""
}

# Update Task
if ($task1Id) {
    Write-Host "7. Updating Task..." -ForegroundColor Yellow
    $updateBody = @{
        status = "completed"
    } | ConvertTo-Json
    
    Invoke-RestMethod -Uri "$BaseUrl/api/tasks/$task1Id" -Method Put -Body $updateBody -ContentType "application/json" | ConvertTo-Json
    Write-Host ""
}

# Get All Tasks Again
Write-Host "8. Getting All Tasks (after update)..." -ForegroundColor Yellow
Invoke-RestMethod -Uri "$BaseUrl/api/tasks" -Method Get | ConvertTo-Json -Depth 5
Write-Host ""

# Delete Task
if ($task1Id) {
    Write-Host "9. Deleting Task..." -ForegroundColor Yellow
    Invoke-RestMethod -Uri "$BaseUrl/api/tasks/$task1Id" -Method Delete | ConvertTo-Json
    Write-Host ""
}

# Get All Tasks Final
Write-Host "10. Getting All Tasks (after delete)..." -ForegroundColor Yellow
Invoke-RestMethod -Uri "$BaseUrl/api/tasks" -Method Get | ConvertTo-Json -Depth 5
Write-Host ""

Write-Host "================================" -ForegroundColor Cyan
Write-Host "Test Complete!" -ForegroundColor Green
Write-Host "================================" -ForegroundColor Cyan
