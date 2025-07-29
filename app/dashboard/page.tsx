import Link from "next/link";

export default function Dashboard() {
    return (
        <div className="flex min-h-screen flex-col items-center justify-center p-24 border-2 border-green-400 mt-4">
            <h1>This is the Dashboard page.</h1>
            <h2 className="text-purple-500">Welcome to your <span className="bg-purple-400 text-black rounded-xl p-2">Dashboard!</span></h2>
            <Link href="/profile" className="mt-4 text-blue-600 hover:underline">
                Go to Profile
            </Link>
            <Link href="/" className="mt-4 text-red-600 hover:underline">
                Go to Home
            </Link>
        </div>
    );
}