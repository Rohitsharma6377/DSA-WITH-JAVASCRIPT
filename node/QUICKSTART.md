# 🚀 Quick Start Guide

## Step 1: Choose Your Database

Edit the `.env` file and set your database type:

### For MongoDB (Recommended for beginners):
```env
DB_TYPE=mongodb
MONGODB_URI=mongodb://localhost:27017/taskdb
```

### For MySQL:
```env
DB_TYPE=mysql
MYSQL_HOST=localhost
MYSQL_USER=root
MYSQL_PASSWORD=yourpassword
MYSQL_DATABASE=taskdb
```

### For PostgreSQL:
```env
DB_TYPE=postgres
POSTGRES_HOST=localhost
POSTGRES_USER=postgres
POSTGRES_PASSWORD=yourpassword
POSTGRES_DATABASE=taskdb
```

## Step 2: Install Dependencies (if not already done)

```bash
npm install
```

## Step 3: Start the Server

```bash
npm start
```

Or for development with auto-reload:
```bash
npm run dev
```

## Step 4: Test the API

Open your browser or use curl:

### Health Check:
```
http://localhost:5000/health
```

### Create a Task:
```bash
curl -X POST http://localhost:5000/api/tasks \
  -H "Content-Type: application/json" \
  -d "{\"title\":\"My First Task\",\"description\":\"Testing the API\",\"priority\":\"high\"}"
```

### Get All Tasks:
```
http://localhost:5000/api/tasks
```

## 📝 API Endpoints

- `GET /api/tasks` - Get all tasks
- `GET /api/tasks/:id` - Get task by ID
- `POST /api/tasks` - Create new task
- `PUT /api/tasks/:id` - Update task
- `DELETE /api/tasks/:id` - Delete task

## 🎯 Example Task Object

```json
{
  "title": "Complete project",
  "description": "Finish the backend API",
  "status": "pending",
  "priority": "high"
}
```

**Status options:** `pending`, `in-progress`, `completed`  
**Priority options:** `low`, `medium`, `high`

## 🔧 Troubleshooting

### MongoDB not connecting?
1. Make sure MongoDB is installed and running
2. Check if MongoDB service is active: `mongod --version`
3. Verify connection string in `.env`

### MySQL/PostgreSQL not connecting?
1. Ensure the database server is running
2. Verify credentials in `.env`
3. Create the database if it doesn't exist

## 📚 Next Steps

- Add authentication (JWT tokens)
- Add validation middleware
- Add pagination for large datasets
- Add filtering and sorting
- Deploy to production

Happy coding! 🎉
