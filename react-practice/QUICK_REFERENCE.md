# Quick Reference Guide

## 🚀 Start Development

```bash
# Frontend (React)
cd react-practice
npm run dev
# Opens at http://localhost:5173

# Backend (Node.js) - in another terminal
cd node
npm start
# Runs at http://localhost:5000
```

## 📁 File Locations

| What | Where |
|------|-------|
| Components | `src/components/` |
| Pages | `src/pages/` |
| Redux | `src/redux/` |
| API | `src/services/` |
| Utils | `src/utils/` |
| Styles | `src/index.css` |
| Config | Root directory |

## 🎨 Common Tasks

### Create New Component
```jsx
// src/components/MyComponent.jsx
import PropTypes from 'prop-types'

const MyComponent = ({ title }) => {
  return <div>{title}</div>
}

MyComponent.propTypes = {
  title: PropTypes.string.isRequired
}

export default MyComponent
```

### Add Redux Slice
```javascript
// src/redux/slices/mySlice.js
import { createSlice } from '@reduxjs/toolkit'

const mySlice = createSlice({
  name: 'myFeature',
  initialState: { data: [] },
  reducers: {
    setData: (state, action) => {
      state.data = action.payload
    }
  }
})

export const { setData } = mySlice.actions
export default mySlice.reducer
```

Then add to store:
```javascript
// src/redux/store.js
import myReducer from './slices/mySlice'

export const store = configureStore({
  reducer: {
    myFeature: myReducer,
    // ... other reducers
  }
})
```

### Add API Endpoint
```javascript
// src/services/api.js
export const myAPI = {
  getData: () => axiosInstance.get('/api/data'),
  postData: (data) => axiosInstance.post('/api/data', data)
}
```

### Add New Page
1. Create `src/pages/MyPage.jsx`
2. Add route in `src/App.jsx`:
```jsx
<Route path="mypage" element={<MyPage />} />
```
3. Add nav link in `src/components/layout/Header.jsx`

### Use Toast
```javascript
import { toast } from 'react-toastify'

toast.success('Success!')
toast.error('Error!')
toast.info('Info!')
toast.warning('Warning!')
```

### Use Redux
```jsx
import { useDispatch, useSelector } from 'react-redux'
import { fetchTasks } from '../redux/slices/taskSlice'

function MyComponent() {
  const dispatch = useDispatch()
  const tasks = useSelector(state => state.tasks.items)
  
  useEffect(() => {
    dispatch(fetchTasks())
  }, [dispatch])
}
```

## 🎨 Tailwind Classes

### Colors
```jsx
<div className="bg-primary-500 text-white">
<div className="bg-green-500 text-white">
<div className="bg-red-500 text-white">
```

### Spacing
```jsx
<div className="p-4 m-2">        // padding & margin
<div className="px-4 py-2">      // horizontal & vertical
<div className="mt-4 mb-2">      // top & bottom
```

### Flexbox
```jsx
<div className="flex items-center justify-between">
<div className="flex flex-col gap-4">
```

### Grid
```jsx
<div className="grid grid-cols-3 gap-4">
<div className="grid md:grid-cols-2 lg:grid-cols-4">
```

### Responsive
```jsx
<div className="text-sm md:text-base lg:text-lg">
<div className="hidden md:block">
```

## 🔄 Common Patterns

### Async Data Fetching
```jsx
const [loading, setLoading] = useState(false)
const [data, setData] = useState([])

useEffect(() => {
  const fetchData = async () => {
    setLoading(true)
    try {
      const response = await api.getData()
      setData(response.data)
    } catch (error) {
      toast.error('Failed to fetch data')
    } finally {
      setLoading(false)
    }
  }
  fetchData()
}, [])
```

### Form Handling
```jsx
const [formData, setFormData] = useState({ name: '', email: '' })

const handleChange = (e) => {
  setFormData(prev => ({
    ...prev,
    [e.target.name]: e.target.value
  }))
}

const handleSubmit = (e) => {
  e.preventDefault()
  // Submit formData
}
```

### Conditional Rendering
```jsx
{loading && <Loader />}
{error && <div className="text-red-500">{error}</div>}
{data.length === 0 && <div>No data</div>}
{data.length > 0 && <DataList data={data} />}
```

## 📦 Environment Variables

```env
# .env
VITE_API_URL=http://localhost:5000
VITE_APP_NAME=My App
```

Access:
```javascript
const apiUrl = import.meta.env.VITE_API_URL
```

## 🐛 Debugging

### Redux DevTools
- Install Redux DevTools browser extension
- Open browser DevTools > Redux tab

### React DevTools
- Install React DevTools browser extension
- Inspect component tree and props

### Console Logging
```javascript
console.log('Data:', data)
console.table(arrayData)
console.error('Error:', error)
```

## 📝 Code Snippets

### Button Component
```jsx
<Button variant="primary" size="md" onClick={handleClick}>
  Click Me
</Button>
```

### Card Component
```jsx
<Card title="Title" footer={<div>Footer</div>}>
  Content
</Card>
```

### Link Navigation
```jsx
import { Link } from 'react-router-dom'

<Link to="/tasks">Go to Tasks</Link>
```

### Programmatic Navigation
```jsx
import { useNavigate } from 'react-router-dom'

const navigate = useNavigate()
navigate('/tasks')
```

## 🎯 Best Practices

1. **Always use PropTypes** for components
2. **Use Redux for global state**, useState for local
3. **Handle loading and error states**
4. **Show user feedback** with toasts
5. **Keep components small** and focused
6. **Use semantic HTML** elements
7. **Make UI responsive** with Tailwind
8. **Validate forms** before submission
9. **Handle errors gracefully**
10. **Write clean, readable code**

## 📚 Documentation

- **README.md** - Full setup guide
- **PROJECT_STRUCTURE.md** - Architecture details
- **SETUP_COMPLETE.md** - Feature summary

## 🔗 Useful Links

- React: https://react.dev
- Redux Toolkit: https://redux-toolkit.js.org
- Tailwind: https://tailwindcss.com
- React Router: https://reactrouter.com
- Axios: https://axios-http.com

---

**Keep this handy while coding! 📌**
