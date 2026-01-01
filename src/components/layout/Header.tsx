import Link from "next/link";

export function Header() {
    return (
        <header className="border-b-2 border-neutral-900 bg-white dark:bg-neutral-950 dark:border-neutral-100">
            <div className="container mx-auto flex h-20 items-center justify-between px-4 sm:px-8">
                
                <Link href="/" className="text-2xl font-bold tracking-tighter font-mono">
                    [ A11yWire ]
                </Link>

                <nav className="flex items-center gap-8 font-medium">
                    <Link href="/" className="hover:underline underline-offset-4 decoration-2">
                        Home
                    </Link>
                    <Link href="newsletter" className="hover:underline underline-offset-4 decoration-2">
                        Newsletter
                    </Link>
                    <Link href="/news" className="hover:underline underline-offset-4 decoration-2">
                        News
                    </Link>
                    <Link href="/about" className="hover:underline underline-offset-4 decoration-2">
                        About
                    </Link>
                </nav>
            
            </div>
        </header>
    );
}