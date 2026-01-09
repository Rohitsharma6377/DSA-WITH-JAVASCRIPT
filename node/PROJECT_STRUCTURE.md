# 📁 Project Structure

```
node/
│
├── 📁 config/
│   └── database.js              # Database configuration (MongoDB, MySQL, PostgreSQL)
│
├── 📁 controllers/
│   └── taskController.js        # Business logic for CRUD operations
│
├── 📁 models/
│   └── Task.js                  # MongoDB Mongoose schema
│
├── 📁 routes/
│   └── taskRoutes.js            # API route definitions
│
├── 📁 node_modules/             # Dependencies (auto-generated)
│
├── .env                         # Environment variables (DO NOT COMMIT)
├── .env.example                 # Environment template
├── .gitignore                   # Git ignore rules
│
├── server.js                    # Main entry point
├── package.json                 # Project metadata & dependencies
├── package-lock.json            # Locked dependency versions
│
├── README.md                    # Full documentation
├── QUICKSTART.md                # Quick start guide
├── PROJECT_STRUCTURE.md         # This file
│
├── Task-API.postman_collection.json  # Postman collection for testing
├── test-api.ps1                 # PowerShell test script (Windows)
└── test-api.sh                  # Bash test script (Linux/Mac)
```

## 🔄 Request Flow

```
Client Request
    ↓
server.js (Express App)
    ↓
routes/taskRoutes.js (Route Handler)
    ↓
controllers/taskController.js (Business Logic)
    ↓
config/database.js (Database Connection)
    ↓
models/Task.js (MongoDB Schema) OR SQL Tables
    ↓
Database (MongoDB / MySQL / PostgreSQL)
    ↓
Response back to Client
```

## 🗄️ Database Support

### MongoDB (NoSQL)
- Uses Mongoose ODM
- Schema defined in `models/Task.js`
- Automatic validation and indexing

### MySQL (SQL)
- Uses mysql2 with connection pooling
- Tables auto-created on startup
- Prepared statements for security

### PostgreSQL (SQL)
- Uses pg with connection pooling
- Tables auto-created on startup
- Parameterized queries for security

## 🚀 Key Features

1. **Multi-Database Support**: Switch between MongoDB, MySQL, or PostgreSQL by changing `.env`
2. **RESTful API**: Standard HTTP methods (GET, POST, PUT, DELETE)
3. **Error Handling**: Centralized error handling middleware
4. **CORS Enabled**: Cross-origin requests supported
5. **Request Logging**: Morgan middleware for development
6. **Environment Config**: Dotenv for secure configuration
7. **Auto Table Creation**: SQL tables created automatically
8. **Connection Pooling**: Efficient database connections

## 📊 Task Data Model

```javascript
{
  id: Number/ObjectId,           // Auto-generated
  title: String,                 // Required, max 255 chars
  description: String,           // Optional
  status: Enum,                  // 'pending' | 'in-progress' | 'completed'
  priority: Enum,                // 'low' | 'medium' | 'high'
  createdAt: Timestamp,          // Auto-generated
  updatedAt: Timestamp           // Auto-updated
}
```

## 🔧 Configuration Files

### `.env` (Local - Not committed)
Contains actual credentials and configuration

### `.env.example` (Template - Committed)
Template showing required environment variables

### `package.json`
- Project metadata
- Dependencies list
- NPM scripts

### `.gitignore`
Prevents committing:
- `node_modules/`
- `.env`
- Log files

## 📡 API Endpoints Summary

| Endpoint | Method | Description |
|----------|--------|-------------|
| `/health` | GET | Server health check |
| `/api/tasks` | GET | Get all tasks |
| `/api/tasks/:id` | GET | Get single task |
| `/api/tasks` | POST | Create new task |
| `/api/tasks/:id` | PUT | Update task |
| `/api/tasks/:id` | DELETE | Delete task |
| `/api/tasks` | DELETE | Delete all tasks |

## 🧪 Testing Options

1. **Postman**: Import `Task-API.postman_collection.json`
2. **PowerShell**: Run `.\test-api.ps1`
3. **Bash**: Run `./test-api.sh`
4. **cURL**: Manual commands (see README.md)
5. **Browser**: GET requests only

## 🔐 Security Considerations

- [ ] Add input validation middleware
- [ ] Implement rate limiting
- [ ] Add authentication (JWT)
- [ ] Use HTTPS in production
- [ ] Sanitize user inputs
- [ ] Add request size limits
- [ ] Implement CSRF protection

## 📈 Future Enhancements

- [ ] Add pagination
- [ ] Add filtering & sorting
- [ ] Add search functionality
- [ ] Add user authentication
- [ ] Add file upload support
- [ ] Add caching (Redis)
- [ ] Add API documentation (Swagger)
- [ ] Add unit tests
- [ ] Add integration tests
- [ ] Add Docker support
