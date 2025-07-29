import Link from "next/link";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center p-24 border-2 border-red-400 mt-4">
      <h1>This is my index page.</h1>
      <h2 className="text-blue-500">Welcome to my Next.js app!</h2>
      <Link href="/profile" className="mt-4 text-blue-600 hover:underline">
        Go to Profile
      </Link>
      <Link href="/dashboard" className="mt-4 text-green-600 hover:underline">
        Go to Dashboard
      </Link>
    </div>
  );
}
