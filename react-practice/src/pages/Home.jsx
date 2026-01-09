import { Link } from 'react-router-dom'
import Button from '../components/common/Button'

const Home = () => {
    return (
        <div className="animate-fade-in">
            {/* Hero Section */}
            <div className="text-center py-20">
                <h1 className="text-5xl font-bold text-gray-900 mb-6">
                    Welcome to React Practice App
                </h1>
                <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
                    A modern React application with Redux Toolkit, Axios, Tailwind CSS, and React Toastify
                </p>
                <div className="flex gap-4 justify-center">
                    <Link to="/tasks">
                        <Button size="lg">
                            Get Started
                        </Button>
                    </Link>
                    <Link to="/about">
                        <Button variant="outline" size="lg">
                            Learn More
                        </Button>
                    </Link>
                </div>
            </div>

            {/* Features Section */}
            <div className="grid md:grid-cols-3 gap-8 mt-16">
                <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                    <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center mb-4">
                        <svg className="w-6 h-6 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                        </svg>
                    </div>
                    <h3 className="text-xl font-semibold mb-2">Redux Toolkit</h3>
                    <p className="text-gray-600">
                        State management made simple with Redux Toolkit and async thunks
                    </p>
                </div>

                <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                    <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
                        <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z" />
                        </svg>
                    </div>
                    <h3 className="text-xl font-semibold mb-2">Axios Integration</h3>
                    <p className="text-gray-600">
                        HTTP client with interceptors for seamless API communication
                    </p>
                </div>

                <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                    <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
                        <svg className="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
                        </svg>
                    </div>
                    <h3 className="text-xl font-semibold mb-2">Tailwind CSS</h3>
                    <p className="text-gray-600">
                        Beautiful, responsive UI with utility-first CSS framework
                    </p>
                </div>
            </div>

            {/* Stats Section */}
            <div className="mt-16 bg-gradient-to-r from-primary-600 to-purple-600 rounded-lg p-8 text-white">
                <div className="grid md:grid-cols-4 gap-8 text-center">
                    <div>
                        <div className="text-4xl font-bold mb-2">100%</div>
                        <div className="text-primary-100">Type Safe</div>
                    </div>
                    <div>
                        <div className="text-4xl font-bold mb-2">Fast</div>
                        <div className="text-primary-100">Performance</div>
                    </div>
                    <div>
                        <div className="text-4xl font-bold mb-2">Modern</div>
                        <div className="text-primary-100">Tech Stack</div>
                    </div>
                    <div>
                        <div className="text-4xl font-bold mb-2">Easy</div>
                        <div className="text-primary-100">To Use</div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home
