# Task Management Backend API

A flexible Node.js backend with support for **MongoDB**, **MySQL**, and **PostgreSQL** databases.

## 🚀 Features

- ✅ RESTful API for Task CRUD operations
- ✅ Support for multiple databases (MongoDB, MySQL, PostgreSQL)
- ✅ Express.js framework
- ✅ Environment-based configuration
- ✅ Error handling middleware
- ✅ Request logging with Morgan
- ✅ CORS enabled

## 📁 Project Structure

```
node/
├── config/
│   └── database.js          # Database configuration
├── controllers/
│   └── taskController.js    # Task business logic
├── models/
│   └── Task.js             # MongoDB schema
├── routes/
│   └── taskRoutes.js       # API routes
├── .env                    # Environment variables (create from .env.example)
├── .env.example            # Environment template
├── .gitignore
├── package.json
└── server.js               # Entry point
```

## 🛠️ Installation

1. **Install dependencies:**
   ```bash
   npm install
   ```

2. **Configure environment:**
   ```bash
   cp .env.example .env
   ```

3. **Edit `.env` file:**
   - Set `DB_TYPE` to `mongodb`, `mysql`, or `postgres`
   - Configure your database credentials

## 🗄️ Database Setup

### Option 1: MongoDB
```env
DB_TYPE=mongodb
MONGODB_URI=mongodb://localhost:27017/taskdb
```

### Option 2: MySQL
```env
DB_TYPE=mysql
MYSQL_HOST=localhost
MYSQL_PORT=3306
MYSQL_USER=root
MYSQL_PASSWORD=yourpassword
MYSQL_DATABASE=taskdb
```

### Option 3: PostgreSQL
```env
DB_TYPE=postgres
POSTGRES_HOST=localhost
POSTGRES_PORT=5432
POSTGRES_USER=postgres
POSTGRES_PASSWORD=yourpassword
POSTGRES_DATABASE=taskdb
```

## ▶️ Running the Server

```bash
node server.js
```

Or with nodemon for development:
```bash
npm install -g nodemon
nodemon server.js
```

Server will run on `http://localhost:5000`

## 📡 API Endpoints

### Base URL: `http://localhost:5000/api/tasks`

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/` | Get all tasks |
| GET | `/:id` | Get task by ID |
| POST | `/` | Create new task |
| PUT | `/:id` | Update task |
| DELETE | `/:id` | Delete task |
| DELETE | `/` | Delete all tasks |

## 📝 API Examples

### Create Task
```bash
POST http://localhost:5000/api/tasks
Content-Type: application/json

{
  "title": "Complete project",
  "description": "Finish the backend API",
  "status": "pending",
  "priority": "high"
}
```

### Get All Tasks
```bash
GET http://localhost:5000/api/tasks
```

### Get Task by ID
```bash
GET http://localhost:5000/api/tasks/1
```

### Update Task
```bash
PUT http://localhost:5000/api/tasks/1
Content-Type: application/json

{
  "status": "completed"
}
```

### Delete Task
```bash
DELETE http://localhost:5000/api/tasks/1
```

## 📊 Task Schema

```javascript
{
  "title": String (required, max 255 chars),
  "description": String (optional),
  "status": Enum ["pending", "in-progress", "completed"] (default: "pending"),
  "priority": Enum ["low", "medium", "high"] (default: "medium"),
  "createdAt": Timestamp,
  "updatedAt": Timestamp
}
```

## 🧪 Testing with cURL

```bash
# Create a task
curl -X POST http://localhost:5000/api/tasks \
  -H "Content-Type: application/json" \
  -d '{"title":"Test Task","description":"Testing API","priority":"high"}'

# Get all tasks
curl http://localhost:5000/api/tasks

# Update task
curl -X PUT http://localhost:5000/api/tasks/1 \
  -H "Content-Type: application/json" \
  -d '{"status":"completed"}'

# Delete task
curl -X DELETE http://localhost:5000/api/tasks/1
```

## 🔧 Environment Variables

| Variable | Description | Default |
|----------|-------------|---------|
| PORT | Server port | 5000 |
| NODE_ENV | Environment | development |
| DB_TYPE | Database type | mongodb |
| MONGODB_URI | MongoDB connection string | - |
| MYSQL_* | MySQL configuration | - |
| POSTGRES_* | PostgreSQL configuration | - |

## 🚦 Health Check

```bash
GET http://localhost:5000/health
```

Response:
```json
{
  "status": "OK",
  "message": "Server is running"
}
```

## 📦 Dependencies

- **express** - Web framework
- **mongoose** - MongoDB ODM
- **mysql2** - MySQL client
- **pg** - PostgreSQL client
- **cors** - CORS middleware
- **dotenv** - Environment variables
- **morgan** - HTTP request logger

## 🤝 Contributing

Feel free to submit issues and enhancement requests!

## 📄 License

MIT
