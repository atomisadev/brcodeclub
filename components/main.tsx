import Link from "next/link"
import { Card, CardHeader, CardTitle, CardContent, CardFooter, CardDescription } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"

export function Main() {
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
            href="/"
            className="text-sm font-inter font-medium text-foreground hover:underline underline-offset-4"
            prefetch={false}
          >
            Home
          </Link>
          <Link
            href="/about"
            className="text-sm font-inter font-medium text-foreground hover:underline underline-offset-4"
            prefetch={false}
          >
            About
          </Link>
          <Link
            href="/competition"
            className="text-sm font-medium font-inter text-foreground hover:underline underline-offset-4"
            prefetch={false}
          >
            Competition
          </Link>
          <Link
            href="/projects"
            className="text-sm font-medium font-inter text-foreground hover:underline underline-offset-4"
            prefetch={false}
          >
            Projects
          </Link>
          <Link
            href="/gallery"
            className="text-sm font-medium font-inter text-foreground hover:underline underline-offset-4"
            prefetch={false}
          >
            Gallery
          </Link>
        </nav>
      </header>
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48 bg-background">
          <div className="container mx-auto px-4 md:px-6 max-w-6xl">
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-12">
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <h1 className="text-3xl font-bold font-heading tracking-tighter text-foreground sm:text-5xl xl:text-6xl/none">
                    Welcome to C.O.D.E. Club
                  </h1>
                  <p className="max-w-[600px] font-inter text-muted-foreground font-normal tracking-tight md:text-xl">
                    At C.O.D.E. Club, we're passionate about helping introduce the world of programming to any BRHS
                    student. Since 2020, C.O.D.E. Club has provided a high-quality education and support to all of our
                    club members. Our commitment to your computer science needs remains the key driving force behind our
                    club. Our team of officers is here to guide and inspire you with their unique ideas and abilities.
                  </p>
                </div>
                <div className="flex flex-col gap-2 min-[400px]:flex-row">
                  <Link
                    href="#"
                    className="inline-flex h-10 items-center justify-center rounded-md bg-primary px-8 text-sm font-normal text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
                    prefetch={false}
                  >
                    Join Now
                  </Link>
                  <Link
                    href="#"
                    className="inline-flex h-10 items-center justify-center rounded-md border border-input bg-background px-8 text-sm font-normal shadow-sm transition-colors hover:bg-accent hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
                    prefetch={false}
                  >
                    Learn More
                  </Link>
                </div>
              </div>
              <img
                src="/placeholder.svg"
                width="550"
                height="550"
                alt="Hero"
                className="mx-auto aspect-square overflow-hidden rounded-xl object-cover sm:w-full lg:order-last"
              />
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container mx-auto px-4 md:px-6 max-w-6xl">
            <h2 className="text-3xl font-heading font-bold tracking-tighter text-foreground md:text-4xl/tight mb-8">
              Software That Excites.
            </h2>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4 lg:gap-12">
              <Card className="bg-background p-4 shadow-sm flex flex-col">
                <CardHeader>
                  <CardTitle>About Us</CardTitle>
                </CardHeader>
                <CardContent className="flex-1">
                  <p className="text-muted-foreground font-inter">
                    We're a club... doing things to make things better.
                  </p>
                </CardContent>
                <CardFooter>
                  <Button className="w-full">MORE</Button>
                </CardFooter>
              </Card>
              <Card className="bg-background p-4 shadow-sm flex flex-col">
                <CardHeader>
                  <CardTitle>Team</CardTitle>
                </CardHeader>
                <CardContent className="flex-1">
                  <p className="text-muted-foreground font-inter">
                    The people who are behind it all, a successful club that inspires and educates members about
                    software development
                  </p>
                </CardContent>
                <CardFooter>
                  <Button className="w-full">MORE</Button>
                </CardFooter>
              </Card>
              <Card className="bg-background p-4 shadow-sm flex flex-col">
                <CardHeader>
                  <CardTitle>Competition</CardTitle>
                </CardHeader>
                <CardContent className="flex-1">
                  <p className="text-muted-foreground font-inter">
                    Unlock your potential and showcase your coding expertise at our premier code competition. Come and
                    put your skills to the test for a chance to win valuable prizes and recognition in the tech
                    community.
                  </p>
                </CardContent>
                <CardFooter>
                  <Button className="w-full">MORE</Button>
                </CardFooter>
              </Card>
              <Card className="bg-background p-4 shadow-sm flex flex-col">
                <CardHeader>
                  <CardTitle>Projects</CardTitle>
                </CardHeader>
                <CardContent className="flex-1">
                  <p className="text-muted-foreground font-inter">
                    Check out some of the cool past projects members of this club have made
                  </p>
                </CardContent>
                <CardFooter>
                  <Button className="w-full">MORE</Button>
                </CardFooter>
              </Card>
            </div>
          </div>
        </section>

        {/* <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container mx-auto px-4 md:px-6 max-w-6xl">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold font-heading tracking-tighter text-foreground sm:text-5xl">
                  Get in Touch
                </h2>
                <p className="max-w-[600px] font-inter text-muted-foreground font-normal tracking-tight md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Have a question or want to get involved? Fill out the form below and we'll get back to you as soon as
                  possible.
                </p>
              </div>
              <div className="mx-auto w-full max-w-sm space-y-2">
                <form className="flex flex-col gap-2">
                  <Input type="text" placeholder="Name" className="max-w-lg flex-1" />
                  <Input type="email" placeholder="Email" className="max-w-lg flex-1" />
                  <Textarea placeholder="Message" className="max-w-lg flex-1" />
                  <Button type="submit">Submit</Button>
                </form>
              </div>
            </div>
          </div>
        </section> */}
      </main>
      <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t">
        <p className="text-xs text-muted-foreground font-heading">
          &copy; 2024 BRHS C.O.D.E. Club All rights reserved.
        </p>
        <nav className="sm:ml-auto flex gap-4 sm:gap-6">
          <Link
            href="#"
            className="text-xs hover:underline underline-offset-4 font-inter"
            prefetch={false}
          >
            Terms of Service
          </Link>
          <Link
            href="#"
            className="text-xs hover:underline underline-offset-4 font-inter"
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