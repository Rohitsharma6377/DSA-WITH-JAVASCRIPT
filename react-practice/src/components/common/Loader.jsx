const Loader = () => {
    return (
        <div className="flex items-center justify-center p-8">
            <div className="relative">
                <div className="w-16 h-16 border-4 border-primary-200 border-t-primary-600 rounded-full animate-spin"></div>
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                    <div className="w-8 h-8 border-4 border-primary-100 border-t-primary-400 rounded-full animate-spin"></div>
                </div>
            </div>
        </div>
    )
}

export default Loader
