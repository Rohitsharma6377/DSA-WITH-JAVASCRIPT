import Card from '../components/common/Card'

const About = () => {
    const technologies = [
        {
            name: 'React 19',
            description: 'Latest version of React with improved performance',
            icon: '⚛️',
        },
        {
            name: 'Redux Toolkit',
            description: 'Official, opinionated, batteries-included toolset for Redux',
            icon: '🔄',
        },
        {
            name: 'Axios',
            description: 'Promise-based HTTP client with interceptors',
            icon: '🌐',
        },
        {
            name: 'React Router',
            description: 'Declarative routing for React applications',
            icon: '🛣️',
        },
        {
            name: 'Tailwind CSS',
            description: 'Utility-first CSS framework for rapid UI development',
            icon: '🎨',
        },
        {
            name: 'React Toastify',
            description: 'Beautiful toast notifications for React',
            icon: '🔔',
        },
        {
            name: 'Vite',
            description: 'Next generation frontend tooling',
            icon: '⚡',
        },
        {
            name: 'ESLint',
            description: 'Pluggable linting utility for JavaScript',
            icon: '✅',
        },
    ]

    return (
        <div className="animate-fade-in">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">About This Project</h1>
            <p className="text-xl text-gray-600 mb-12">
                A modern React application showcasing best practices and popular libraries
            </p>

            {/* Project Info */}
            <Card title="Project Overview" className="mb-8">
                <div className="space-y-4 text-gray-700">
                    <p>
                        This project is a comprehensive React application template that demonstrates
                        the integration of modern web development tools and libraries.
                    </p>
                    <p>
                        It includes a complete setup for state management, API communication,
                        routing, styling, and user notifications - everything you need to build
                        a production-ready application.
                    </p>
                    <p>
                        The project follows React best practices and includes a well-organized
                        folder structure that scales with your application.
                    </p>
                </div>
            </Card>

            {/* Technologies */}
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Technologies Used</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
                {technologies.map((tech) => (
                    <div
                        key={tech.name}
                        className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow"
                    >
                        <div className="text-4xl mb-3">{tech.icon}</div>
                        <h3 className="text-lg font-semibold text-gray-900 mb-2">{tech.name}</h3>
                        <p className="text-sm text-gray-600">{tech.description}</p>
                    </div>
                ))}
            </div>

            {/* Features */}
            <Card title="Key Features" className="mb-8">
                <ul className="space-y-3 text-gray-700">
                    <li className="flex items-start gap-3">
                        <span className="text-green-500 mt-1">✓</span>
                        <span>Redux Toolkit for efficient state management with async thunks</span>
                    </li>
                    <li className="flex items-start gap-3">
                        <span className="text-green-500 mt-1">✓</span>
                        <span>Axios with request/response interceptors for API calls</span>
                    </li>
                    <li className="flex items-start gap-3">
                        <span className="text-green-500 mt-1">✓</span>
                        <span>React Router for client-side routing</span>
                    </li>
                    <li className="flex items-start gap-3">
                        <span className="text-green-500 mt-1">✓</span>
                        <span>Tailwind CSS for beautiful, responsive UI</span>
                    </li>
                    <li className="flex items-start gap-3">
                        <span className="text-green-500 mt-1">✓</span>
                        <span>React Toastify for user-friendly notifications</span>
                    </li>
                    <li className="flex items-start gap-3">
                        <span className="text-green-500 mt-1">✓</span>
                        <span>Component-based architecture with reusable components</span>
                    </li>
                    <li className="flex items-start gap-3">
                        <span className="text-green-500 mt-1">✓</span>
                        <span>Environment-based configuration</span>
                    </li>
                    <li className="flex items-start gap-3">
                        <span className="text-green-500 mt-1">✓</span>
                        <span>ESLint for code quality</span>
                    </li>
                </ul>
            </Card>

            {/* Folder Structure */}
            <Card title="Folder Structure">
                <pre className="bg-gray-50 p-4 rounded-lg overflow-x-auto text-sm">
                    {`src/
├── components/
│   ├── common/          # Reusable UI components
│   ├── layout/          # Layout components
│   └── tasks/           # Task-specific components
├── pages/               # Page components
├── redux/
│   ├── slices/          # Redux slices
│   └── store.js         # Redux store
├── services/
│   ├── api.js           # API endpoints
│   └── axios.js         # Axios configuration
├── App.jsx              # Main app component
├── main.jsx             # Entry point
└── index.css            # Global styles`}
                </pre>
            </Card>
        </div>
    )
}

export default About
