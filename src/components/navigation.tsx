import {
    SignInButton,
    SignOutButton,
    // UserButton,
    SignedIn,
    SignedOut,
    SignUpButton,
} from "@clerk/nextjs";
import Link from "next/link";

export function Navigation() {
    return (
        <nav className="bg-[var(--background)] border-b border-[var(--foreground)]/10">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between h-16 items-center">
                    <div className="flex-shrink-0">
                        <h1 className="text-xl font-semibold text-[var(--foreground)]">
                            Next.js App
                        </h1>
                    </div>
                    <div className="flex item-center gap-4">
                        <SignedOut>
                            <SignInButton >
                                <button type="button">Sign in</button>
                            </SignInButton>
                            <SignUpButton >
                                <button type="button">Sign up</button>
                            </SignUpButton>
                        </SignedOut>
                        <SignedIn>
                            <SignOutButton />
                            {/* <UserButton /> */}
                            <Link href="/user-profile">User Profile</Link>
                        </SignedIn>
                    </div>
                </div>
            </div>
        </nav>
    );
}
