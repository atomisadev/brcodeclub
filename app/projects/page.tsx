import Link from "next/link"

export default function Projects() {
    return (
        <div className="flex flex-col min-h-[100dvh]">
            <header className="px-4 lg:px-6 h-14 flex items-center bg-background">
                <Link href="#" className="flex items-center justify-center" prefetch={false}>
                    <CodeIcon className="h-6 w-6 text-primary mr-2" />
                    <span className="text-xl font-bold text-foreground font-heading">
                        C.O.D.E.
                    </span>
                </Link>
                <nav className="ml-auto flex gap-4 sm:gap-6">
                    <Link
                        href="#"
                        className="text-sm font-medium font-inter text-foreground hover:underline underline-offset-4"
                        prefetch={false}
                    >
                        Home
                    </Link>
                    <Link
                        href="#"
                        className="text-sm font-medium font-inter text-foreground hover:underline underline-offset-4"
                        prefetch={false}
                    >
                        About
                    </Link>
                    <Link
                        href="#"
                        className="text-sm font-medium font-inter text-foreground hover:underline underline-offset-4"
                        prefetch={false}
                    >
                        Competition
                    </Link>
                    <Link
                        href="#"
                        className="text-sm font-medium font-inter text-foreground hover:underline underline-offset-4"
                        prefetch={false}
                    >
                        Projects
                    </Link>
                    <Link
                        href="#"
                        className="text-sm font-medium font-inter text-foreground hover:underline underline-offset-4"
                        prefetch={false}
                    >
                        Gallery
                    </Link>
                </nav>
            </header>
            <main className="flex-1 flex justify-center items-center">
                <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48 bg-background">
                        <div className="container px-4 md:px-6">
                            <div className="flex flex-col justify-center space-y-4">
                                <div className="space-y-2">
                                    <h1 className="text-6xl font-bold font-heading tracking-tighter text-foreground">
                                        Projects
                                    </h1>
                                    <p className="max-w-[600px] font-inter text-muted-foreground font-normal tracking-tight md:text-xl">
                                        Showcase of innovative projects by our members.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </section>
                    <section className="w-full py-12 md:py-24 lg:py-32">
                        <div className="container px-4 md:px-6 text-center">
                            <h2 className="text-3xl font-heading font-bold tracking-tighter text-foreground sm:text-4xl mb-4">
                                No projects yet...
                            </h2>
                            <p className="max-w-[600px] mx-auto font-inter text-muted-foreground font-normal tracking-tight md:text-xl">
                                Come back soon to see projects past members have made!
                            </p>
                        </div>
                    </section>
                </div>
            </main>
            <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t">
                <p className="text-xs text-muted-foreground font-inter">
                    &copy; 2024 C.O.D.E. All rights reserved.
                </p>
                <nav className="sm:ml-auto flex gap-4 sm:gap-6">
                    <Link
                        href="#"
                        className="text-xs hover:underline font-inter underline-offset-4"
                        prefetch={false}
                    >
                        Terms of Service
                    </Link>
                    <Link
                        href="#"
                        className="text-xs hover:underline font-inter underline-offset-4"
                        prefetch={false}
                    >
                        Privacy Policy
                    </Link>
                </nav>
            </footer>
        </div>
    )
}

function CodeIcon(props: any) {
    return (
        <svg
            {...props}
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <polyline points="16 18 22 12 16 6" />
            <polyline points="8 6 2 12 8 18" />
        </svg>
    )
}