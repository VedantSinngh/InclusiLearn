export default function NotFound() {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen border-2 border-dashed border-gray-300 rounded-md p-8">
            <h1 className="text-4xl font-bold mb-4">404</h1>
            <p className="text-xl text-gray-600 mb-4">Page Not Found</p>
            <p className="text-gray-500">The page you're looking for does not exist.</p>
        </div>
    );
}