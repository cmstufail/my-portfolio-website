import { useRouteError, Link } from 'react-router-dom';

const ErrorPage = () => {
    const error = useRouteError();
    console.error( error );

    return (
        <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100">
            <div className="bg-white p-8 rounded-lg shadow-md text-center">
                <h1 className="text-4xl font-bold text-red-600 mb-4">Oops!</h1>
                <p className="text-lg mb-4">Sorry, this page could not be found.</p>
                <p className="text-gray-600 mb-6">
                    { error.statusText || error.message }
                </p>
                <Link
                    to="/"
                    className="px-6 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition"
                >
                    Return to home page
                </Link>
            </div>
        </div>
    );
};

export default ErrorPage;