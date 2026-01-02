import Link from "next/link";

export function Header() {
    const linkClasses = "text-base md:text-lg font-medium hover:underline underline-offset-8 decoration-2 decoration-violet-600 transition-all text-neutral-600 hover:text-neutral-900 dark:text-neutral-300 dark:hover:text-white";
    
    return (
        <header className="border-b-2 border-neutral-200 bg-white dark:bg-neutral-950 dark:border-neutral-800 sticky top-0 z-50">
            <div className="container mx-auto flex h-20 items-center justify-between px-4 sm:px-8">
                
                <Link href="/" className="group flex items-center gap-1">
                    <span className="text-2xl font-bold tracking-tighter font-mono text-neutral-900 dark:text-white group-hover:text-violet-600 transition-colors">
                        [ A11yWire ]
                    </span>
                </Link>

                <nav className="flex items-center gap-6 md:gap-8">
                    <Link href="/" className={linkClasses}>
                        Home
                    </Link>
                    <Link href="/newsletter" className={linkClasses}>
                        Newsletter
                    </Link>
                    <Link href="/news" className={linkClasses}>
                        Articles
                    </Link>
                    <Link href="/about" className={linkClasses}>
                        About
                    </Link>
                </nav>
            
            </div>
        </header>
    );
}