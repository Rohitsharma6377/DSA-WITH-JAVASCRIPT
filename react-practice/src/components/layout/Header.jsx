import { Link, NavLink } from 'react-router-dom'
import { useSelector } from 'react-redux'

const Header = () => {
    const { theme } = useSelector((state) => state.user)

    const navLinkClass = ({ isActive }) =>
        `px-4 py-2 rounded-lg transition-colors ${isActive
            ? 'bg-primary-500 text-white'
            : 'text-gray-700 hover:bg-primary-100'
        }`

    return (
        <header className="bg-white shadow-md sticky top-0 z-50">
            <nav className="container mx-auto px-4 py-4">
                <div className="flex items-center justify-between">
                    {/* Logo */}
                    <Link to="/" className="text-2xl font-bold text-primary-600">
                        React App
                    </Link>

                    {/* Navigation */}
                    <div className="flex items-center gap-4">
                        <NavLink to="/" className={navLinkClass}>
                            Home
                        </NavLink>
                        <NavLink to="/tasks" className={navLinkClass}>
                            Tasks
                        </NavLink>
                        <NavLink to="/about" className={navLinkClass}>
                            About
                        </NavLink>
                    </div>

                    {/* Theme indicator */}
                    <div className="flex items-center gap-2">
                        <span className="text-sm text-gray-600">
                            Theme: {theme}
                        </span>
                    </div>
                </div>
            </nav>
        </header>
    )
}

export default Header
