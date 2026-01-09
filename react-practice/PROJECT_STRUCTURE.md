# Project Structure Documentation

## 📁 Complete Folder Structure

```
react-practice/
│
├── public/                          # Static assets
│   └── vite.svg
│
├── src/
│   │
│   ├── components/                  # All React components
│   │   │
│   │   ├── common/                  # Reusable UI components
│   │   │   ├── Button.jsx          # Customizable button component
│   │   │   ├── Card.jsx            # Card container component
│   │   │   └── Loader.jsx          # Loading spinner
│   │   │
│   │   ├── layout/                  # Layout components
│   │   │   ├── Layout.jsx          # Main layout wrapper
│   │   │   ├── Header.jsx          # Navigation header
│   │   │   └── Footer.jsx          # Page footer
│   │   │
│   │   └── tasks/                   # Task-specific components
│   │       ├── TaskCard.jsx        # Individual task card
│   │       └── TaskForm.jsx        # Task create/edit form
│   │
│   ├── pages/                       # Page components (routes)
│   │   ├── Home.jsx                # Landing page
│   │   ├── Tasks.jsx               # Task management page
│   │   ├── About.jsx               # About page
│   │   └── NotFound.jsx            # 404 page
│   │
│   ├── redux/                       # Redux state management
│   │   ├── slices/                 # Redux slices
│   │   │   ├── taskSlice.js       # Task state & actions
│   │   │   └── userSlice.js       # User state & actions
│   │   └── store.js               # Redux store configuration
│   │
│   ├── services/                    # API & external services
│   │   ├── api.js                  # API endpoint definitions
│   │   └── axios.js                # Axios instance & interceptors
│   │
│   ├── utils/                       # Utility functions
│   │   ├── dateUtils.js           # Date formatting utilities
│   │   ├── validation.js          # Form validation helpers
│   │   └── helpers.js             # General helper functions
│   │
│   ├── assets/                      # Images, fonts, etc.
│   │   └── react.svg
│   │
│   ├── App.jsx                      # Main app component with routes
│   ├── main.jsx                     # Application entry point
│   └── index.css                    # Global styles & Tailwind
│
├── .env                             # Environment variables (local)
├── .env.example                     # Environment template
├── .gitignore                       # Git ignore rules
├── eslint.config.js                 # ESLint configuration
├── index.html                       # HTML template
├── package.json                     # Dependencies & scripts
├── postcss.config.js                # PostCSS configuration
├── tailwind.config.js               # Tailwind CSS configuration
├── vite.config.js                   # Vite configuration
└── README.md                        # Project documentation
```

## 🎯 Component Architecture

### Common Components (`src/components/common/`)
Reusable UI components used throughout the application.

- **Button.jsx**: Flexible button with variants (primary, secondary, success, danger, outline) and sizes
- **Card.jsx**: Container component with optional title and footer
- **Loader.jsx**: Animated loading spinner

### Layout Components (`src/components/layout/`)
Components that define the application structure.

- **Layout.jsx**: Main wrapper with header, content area, and footer
- **Header.jsx**: Navigation bar with links and theme indicator
- **Footer.jsx**: Page footer with copyright and social links

### Feature Components (`src/components/tasks/`)
Components specific to task management feature.

- **TaskCard.jsx**: Displays individual task with status, priority, and actions
- **TaskForm.jsx**: Form for creating and editing tasks

## 📄 Pages (`src/pages/`)

Each page represents a route in the application:

- **Home.jsx**: Landing page with features and call-to-action
- **Tasks.jsx**: Main task management interface with CRUD operations
- **About.jsx**: Information about the project and technologies
- **NotFound.jsx**: 404 error page

## 🔄 Redux Structure (`src/redux/`)

### Store (`store.js`)
Central Redux store configuration with all slices.

### Slices (`slices/`)

**taskSlice.js**
- State: `items`, `loading`, `error`, `selectedTask`
- Async Thunks: `fetchTasks`, `createTask`, `updateTask`, `deleteTask`
- Actions: `setSelectedTask`, `clearSelectedTask`, `clearError`

**userSlice.js**
- State: `currentUser`, `isAuthenticated`, `theme`
- Actions: `setUser`, `logout`, `toggleTheme`

## 🌐 Services (`src/services/`)

### axios.js
Configured Axios instance with:
- Base URL from environment
- Request interceptor (adds auth token)
- Response interceptor (handles 401 errors)

### api.js
Organized API endpoints:
- **taskAPI**: CRUD operations for tasks
- **userAPI**: Authentication and profile
- **healthAPI**: Server health check

## 🛠️ Utils (`src/utils/`)

### dateUtils.js
- `formatDate()`: Format date to readable string
- `formatDateTime()`: Format with time
- `getRelativeTime()`: Relative time (e.g., "2 hours ago")

### validation.js
- `isValidEmail()`: Email validation
- `isValidPassword()`: Password strength validation
- `isRequired()`: Required field check
- `minLength()`, `maxLength()`: Length validation

### helpers.js
- `debounce()`: Debounce function calls
- `throttle()`: Throttle function calls
- `deepClone()`: Deep clone objects
- `generateId()`: Generate unique IDs
- `capitalize()`: Capitalize strings
- `truncate()`: Truncate long text

## 🎨 Styling

### index.css
- Tailwind directives (`@tailwind`)
- Custom scrollbar styles
- Custom animations
- Toast notification styles

### tailwind.config.js
- Custom color palette
- Font family configuration
- Content paths for purging

## ⚙️ Configuration Files

### vite.config.js
Vite build tool configuration with React plugin

### postcss.config.js
PostCSS configuration for Tailwind CSS

### eslint.config.js
ESLint rules for code quality

## 🔐 Environment Variables

### .env
Local environment configuration (not committed)

### .env.example
Template for environment variables

## 📦 Package Management

### package.json
- Dependencies: React, Redux, Axios, Tailwind, etc.
- Scripts: dev, build, preview, lint
- Dev dependencies: Vite, ESLint, etc.

## 🚦 Data Flow

```
User Action
    ↓
Component
    ↓
Dispatch Redux Action (Async Thunk)
    ↓
API Service (Axios)
    ↓
Backend Server
    ↓
Response
    ↓
Redux State Update
    ↓
Component Re-render
    ↓
Toast Notification (if applicable)
```

## 🎯 Best Practices

1. **Components**: One component per file, named exports
2. **Props**: Use PropTypes for type checking
3. **State**: Redux for global, useState for local
4. **Styling**: Tailwind utilities, custom classes when needed
5. **API**: Always use service layer, never direct axios calls
6. **Errors**: Handle gracefully, show user-friendly messages
7. **Loading**: Show loading states for async operations

## 📝 Naming Conventions

- **Components**: PascalCase (e.g., `TaskCard.jsx`)
- **Files**: camelCase for utilities (e.g., `dateUtils.js`)
- **Folders**: lowercase (e.g., `components/common/`)
- **Constants**: UPPER_SNAKE_CASE
- **Functions**: camelCase
- **CSS Classes**: kebab-case (Tailwind utilities)

## 🔄 Adding New Features

### 1. New Component
1. Create in appropriate folder (`components/`)
2. Add PropTypes
3. Export component
4. Import and use in parent

### 2. New Page
1. Create in `pages/`
2. Add route in `App.jsx`
3. Add navigation in `Header.jsx`

### 3. New Redux Slice
1. Create in `redux/slices/`
2. Define initial state
3. Create reducers and async thunks
4. Add to store

### 4. New API Endpoint
1. Add to `services/api.js`
2. Create async thunk in Redux slice
3. Use in component

## 🎨 Theming

The app uses a consistent color scheme defined in `tailwind.config.js`:

- **Primary**: Blue shades (50-900)
- **Success**: Green
- **Error**: Red
- **Warning**: Yellow
- **Info**: Blue

## 📱 Responsive Design

All components are responsive using Tailwind breakpoints:
- `sm`: 640px
- `md`: 768px
- `lg`: 1024px
- `xl`: 1280px
- `2xl`: 1536px

---

This structure is scalable and follows React best practices! 🚀
