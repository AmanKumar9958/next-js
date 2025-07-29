import Link from "next/link";

export default function Profile(){
    return (
        <div className="flex min-h-screen flex-col items-center justify-center p-24 border-2 border-blue-400 mt-4">
            <h1>This is the Profile page.</h1>
            <h2 className="text-green-500">Welcome to your Profile!</h2>
            <Link href="/dashboard" className="mt-4 text-blue-600 hover:underline">
                Go to Dashboard
            </Link>
        </div>
    );
}