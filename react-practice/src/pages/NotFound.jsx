import { Link } from 'react-router-dom'
import Button from '../components/common/Button'

const NotFound = () => {
    return (
        <div className="flex flex-col items-center justify-center min-h-[60vh] text-center animate-fade-in">
            <div className="text-9xl font-bold text-primary-600 mb-4">404</div>
            <h1 className="text-4xl font-bold text-gray-900 mb-4">Page Not Found</h1>
            <p className="text-xl text-gray-600 mb-8 max-w-md">
                Oops! The page you're looking for doesn't exist. It might have been moved or deleted.
            </p>
            <Link to="/">
                <Button size="lg">
                    Go Back Home
                </Button>
            </Link>
        </div>
    )
}

export default NotFound
