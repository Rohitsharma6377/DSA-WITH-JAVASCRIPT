# React Practice App - Complete Setup

## 🎉 What's Included

This is a fully configured React application with:

- ✅ **Redux Toolkit** - State management
- ✅ **Axios** - HTTP client with interceptors
- ✅ **React Router** - Client-side routing
- ✅ **Tailwind CSS** - Utility-first CSS framework
- ✅ **React Toastify** - Toast notifications
- ✅ **Vite** - Fast build tool
- ✅ **ESLint** - Code linting

## 📁 Folder Structure

```
react-practice/
├── public/                  # Static assets
├── src/
│   ├── components/
│   │   ├── common/         # Reusable UI components
│   │   │   ├── Button.jsx
│   │   │   ├── Card.jsx
│   │   │   └── Loader.jsx
│   │   ├── layout/         # Layout components
│   │   │   ├── Layout.jsx
│   │   │   ├── Header.jsx
│   │   │   └── Footer.jsx
│   │   └── tasks/          # Task-specific components
│   │       ├── TaskCard.jsx
│   │       └── TaskForm.jsx
│   ├── pages/              # Page components
│   │   ├── Home.jsx
│   │   ├── Tasks.jsx
│   │   ├── About.jsx
│   │   └── NotFound.jsx
│   ├── redux/
│   │   ├── slices/         # Redux slices
│   │   │   ├── taskSlice.js
│   │   │   └── userSlice.js
│   │   └── store.js        # Redux store configuration
│   ├── services/
│   │   ├── api.js          # API endpoints
│   │   └── axios.js        # Axios configuration
│   ├── utils/              # Utility functions
│   │   ├── dateUtils.js
│   │   ├── validation.js
│   │   └── helpers.js
│   ├── App.jsx             # Main app component
│   ├── main.jsx            # Entry point
│   └── index.css           # Global styles
├── .env                    # Environment variables
├── .env.example            # Environment template
├── tailwind.config.js      # Tailwind configuration
├── postcss.config.js       # PostCSS configuration
├── vite.config.js          # Vite configuration
└── package.json            # Dependencies

```

## 🚀 Quick Start

### 1. Install Dependencies (if not done)
```bash
npm install
```

### 2. Configure Environment
The `.env` file is already created with:
```env
VITE_API_URL=http://localhost:5000
```

### 3. Start Development Server
```bash
npm run dev
```

The app will open at `http://localhost:5173`

### 4. Make sure Backend is Running
The backend server should be running on `http://localhost:5000`

## 📚 Available Scripts

```bash
npm run dev      # Start development server
npm run build    # Build for production
npm run preview  # Preview production build
npm run lint     # Run ESLint
```

## 🎨 Tailwind CSS Setup

Tailwind is fully configured with:
- Custom color palette (primary colors)
- Custom animations (fade-in, slide-up)
- Custom scrollbar styles
- Toast notification styles
- Responsive utilities

## 🔄 Redux Toolkit

### Store Structure
```javascript
{
  tasks: {
    items: [],
    loading: false,
    error: null,
    selectedTask: null
  },
  user: {
    currentUser: null,
    isAuthenticated: false,
    theme: 'light'
  }
}
```

### Available Actions

**Task Actions:**
- `fetchTasks()` - Get all tasks
- `createTask(data)` - Create new task
- `updateTask({ id, data })` - Update task
- `deleteTask(id)` - Delete task
- `setSelectedTask(task)` - Set selected task
- `clearSelectedTask()` - Clear selected task

**User Actions:**
- `setUser(user)` - Set current user
- `logout()` - Logout user
- `toggleTheme()` - Toggle theme

## 🌐 Axios Configuration

### Base Configuration
- Base URL: `http://localhost:5000`
- Timeout: 10 seconds
- Automatic token injection
- Error handling interceptors

### API Endpoints

**Task API:**
```javascript
taskAPI.getAllTasks()
taskAPI.getTaskById(id)
taskAPI.createTask(data)
taskAPI.updateTask(id, data)
taskAPI.deleteTask(id)
```

**User API:**
```javascript
userAPI.login(credentials)
userAPI.register(userData)
userAPI.getProfile()
userAPI.updateProfile(data)
```

## 🔔 Toast Notifications

Toast notifications are automatically shown for:
- ✅ Task created successfully
- ✅ Task updated successfully
- ✅ Task deleted successfully
- ❌ API errors

### Manual Toast Usage
```javascript
import { toast } from 'react-toastify'

toast.success('Success message')
toast.error('Error message')
toast.info('Info message')
toast.warning('Warning message')
```

## 🛣️ Routes

| Route | Component | Description |
|-------|-----------|-------------|
| `/` | Home | Landing page |
| `/tasks` | Tasks | Task management |
| `/about` | About | About page |
| `*` | NotFound | 404 page |

## 🧩 Component Usage

### Button Component
```jsx
import Button from './components/common/Button'

<Button variant="primary" size="md" onClick={handleClick}>
  Click Me
</Button>
```

**Props:**
- `variant`: 'primary' | 'secondary' | 'success' | 'danger' | 'outline'
- `size`: 'sm' | 'md' | 'lg'
- `loading`: boolean
- `disabled`: boolean

### Card Component
```jsx
import Card from './components/common/Card'

<Card title="Card Title" footer={<div>Footer</div>}>
  Card content
</Card>
```

### Loader Component
```jsx
import Loader from './components/common/Loader'

{loading && <Loader />}
```

## 🎯 Best Practices

1. **Component Organization**
   - Keep components small and focused
   - Use PropTypes for type checking
   - Extract reusable logic to custom hooks

2. **State Management**
   - Use Redux for global state
   - Use local state for component-specific data
   - Use async thunks for API calls

3. **Styling**
   - Use Tailwind utility classes
   - Create custom components for repeated patterns
   - Use responsive design utilities

4. **API Calls**
   - Always use the API service layer
   - Handle errors gracefully
   - Show loading states

## 🔧 Customization

### Adding New Pages
1. Create page component in `src/pages/`
2. Add route in `src/App.jsx`
3. Add navigation link in `src/components/layout/Header.jsx`

### Adding New Redux Slice
1. Create slice in `src/redux/slices/`
2. Import and add to store in `src/redux/store.js`

### Adding New API Endpoints
1. Add endpoints in `src/services/api.js`
2. Create async thunks in Redux slice if needed

## 📦 Environment Variables

Create a `.env` file with:

```env
VITE_API_URL=http://localhost:5000
VITE_APP_NAME=React Practice App
VITE_APP_VERSION=1.0.0
```

Access in code:
```javascript
const apiUrl = import.meta.env.VITE_API_URL
```

## 🐛 Troubleshooting

### Tailwind styles not working?
- Make sure `tailwind.config.js` and `postcss.config.js` exist
- Check that `@tailwind` directives are in `index.css`
- Restart dev server

### Redux not working?
- Check that Provider wraps App in `main.jsx`
- Verify store configuration in `store.js`
- Check Redux DevTools in browser

### API calls failing?
- Verify backend server is running
- Check `VITE_API_URL` in `.env`
- Check browser console for errors

## 🚀 Deployment

### Build for Production
```bash
npm run build
```

The build output will be in the `dist/` folder.

### Deploy to Vercel/Netlify
1. Connect your Git repository
2. Set build command: `npm run build`
3. Set output directory: `dist`
4. Add environment variables

## 📝 Next Steps

- [ ] Add authentication
- [ ] Add protected routes
- [ ] Add form validation
- [ ] Add unit tests
- [ ] Add E2E tests
- [ ] Add dark mode
- [ ] Add internationalization
- [ ] Add PWA support

## 🤝 Contributing

Feel free to submit issues and enhancement requests!

## 📄 License

MIT

---

**Happy Coding! 🎉**
