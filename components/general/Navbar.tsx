import Link from "next/link";
import { Button } from "../ui/button";
import { ModeToggle } from "./ModeToggle";

export function Navbar(){
    return (
        <nav className="flex items-center justify-between p-2 shadow-md border-b-2 border-blue-400">
            {/* Logo */}
            <div>
                <Link href="/" className="text-3xl font-semibold">
                    <span>Daily</span><span className="text-blue-500">Blog</span>
                </Link>
            </div>
            {/* Navigation Links */}
            <div className="hidden sm:flex items-center gap-6">
                <Link href="/" className="text-blue-400 hover:text-blue-600 font-semibold hover:cursor-pointer">Home</Link>
                <Link href="/dashboard" className="text-blue-400 hover:text-blue-600 font-semibold hover:cursor-pointer">Dashboard</Link>
            </div>
            {/* Authentications Button */}
            <div className="flex items-center gap-4">
                <Button className="hover:cursor-pointer">Login</Button>
                <Button className="hover:cursor-pointer" variant={"secondary"}>Signup</Button>
                {/* Theme Button */}
                <div>
                    <ModeToggle />
                </div>
            </div>
        </nav>
    )
}