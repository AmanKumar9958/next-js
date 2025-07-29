import Link from "next/link";

export default function blog(){
    return (
        <div className="flex min-h-screen flex-col items-center justify-center p-24 border-2 border-blue-400 mt-4">
            <h1>This is a blog page.</h1>
            <h2 className="text-green-500">Welcome to the blog!</h2>
            <Link href="/dashboard" className="mt-4 text-blue-600 hover:underline">
                Go to Dashboard
            </Link>
            <Link href="/" className="mt-4 text-red-600 hover:underline">
                Go to Home
            </Link>
        </div>
    );
}