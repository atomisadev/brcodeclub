import Link from "next/link"
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card"
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"

export function About() {
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
            className="text-sm font-medium font-inter text-foreground hover:underline underline-offset-4"
            prefetch={false}
          >
            Home
          </Link>
          <Link
            href="/about"
            className="text-sm font-medium font-inter text-foreground hover:underline underline-offset-4"
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
      <main className="flex-1 flex justify-center items-center">
        <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48 bg-background">
            <div className="container px-4 md:px-6">
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <h1
                    className="text-6xl font-bold font-heading tracking-tighter text-foreground"
                  >
                    About Us
                  </h1>
                  <p
                    className="max-w-[600px] font-inter text-muted-foreground font-normal tracking-tight md:text-xl"
                  >
                    This is where you learn about the C.O.D.E. Club and its mission.
                  </p>
                </div>
              </div>
            </div>
          </section>
          <section className="w-full py-12 md:py-24 lg:py-32">
            <div className="container px-4 md:px-6 grid grid-cols-1 lg:grid-cols-2 gap-8">
              <div className="bg-muted p-6 rounded-lg">
                <h2
                  className="text-3xl font-heading font-bold tracking-tighter text-foreground md:text-4xl/tight mb-8"
                >
                  Our Strategy
                </h2>
                <p
                  className="max-w-[900px] font-inter text-muted-foreground font-normal tracking-tight md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed"
                >
                  At C.O.D.E. Club, our comprehensive presentational solutions help aspiring BRHS students to achieve
                  greater successes than previously imagined. Our club provides a variety of support services to help
                  students develop their skills and reach their full potential.
                </p>
              </div>
              <div className="bg-muted p-6 rounded-lg">
                <h2
                  className="text-3xl font-heading font-bold tracking-tighter text-foreground md:text-4xl/tight mb-8"
                >
                  Our Story
                </h2>
                <p
                  className="max-w-[900px] font-inter text-muted-foreground font-normal tracking-tight md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed"
                >
                  From student-athletes to seasoned programmers, our diversely talented group of officers have a common
                  passion for educating the public about the glories of computer science. Since humble beginnings, the
                  vision for a better future built on programming has inspired C.O.D.E. Club to take on its four main
                  pillars to heart(Create, Outline, Develop, Enhance). At C.O.D.E. Club, we believe anyone can learn to
                  code, understand seemingly foreign concepts, and ultimately build a better future for himself or herself
                  in this modern world. A right understanding to how powerful such a technological edge can be will lead
                  students to bring the best of them towards successful futures.
                </p>
              </div>
            </div>
          </section>
          <section className="w-full py-12 md:py-24 lg:py-32">
            <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="flex flex-col items-center justify-center space-y-4 text-center">
                <div className="space-y-2">
                  <h2 className="text-3xl font-heading font-bold tracking-tighter text-foreground sm:text-5xl">
                    Meet the Team
                  </h2>
                  <p className="max-w-[900px] font-inter text-muted-foreground font-normal tracking-tight md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                    Get to know the passionate individuals behind C.O.D.E.
                  </p>
                </div>
                <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-3 lg:gap-12">
                  {[
                    {
                      name: "Saanvi Goel",
                      role: "Co-President",
                      initials: "SG",
                      imageUrl: "https://example.com/john-doe.jpg"
                    },
                    {
                      name: "Kinshuk Goel",
                      role: "Co-President",
                      initials: "KG",
                      imageUrl: "https://example.com/jane-smith.jpg"
                    },
                    {
                      name: "Ayushmaan Mukherjee",
                      role: "Secretary",
                      initials: "AM",
                      imageUrl: "https://example.com/bob-davis.jpg"
                    },
                    {
                      name: "Vedaang Verma",
                      role: "Events Coordinator",
                      initials: "VV",
                      imageUrl: "https://example.com/bob-davis.jpg"
                    },
                    {
                      name: "Karolina Torbus",
                      role: "Digital Publicist",
                      initials: "KT",
                      imageUrl: "https://example.com/bob-davis.jpg"
                    },
                    {
                      name: "Mohit Srinivasan",
                      role: "Webmaster",
                      initials: "AM",
                      imageUrl: "https://example.com/bob-davis.jpg"
                    },
                  ].map((member, index) => (
                    <Card key={index} className="bg-background p-6 shadow-sm flex flex-col items-center">
                      <CardHeader className="text-center">
                        <Avatar className="w-24 h-24 mx-auto mb-4">
                          <AvatarImage src="/placeholder-user.jpg" alt="Avatar" />
                          <AvatarFallback>{member.initials}</AvatarFallback>
                        </Avatar>
                        <CardTitle>{member.name}</CardTitle>
                        <CardDescription>{member.role}</CardDescription>
                      </CardHeader>
                    </Card>
                  ))}
                </div>
              </div>
            </div>
          </section>
          {/* <section className="w-full py-12 md:py-24 lg:py-32">
            <div className="container px-4 md:px-6">
              <div className="space-y-4 text-center">
                <h2
                  className="text-3xl font-heading font-bold tracking-tighter text-foreground sm:text-5xl"
                >
                  Competition
                </h2>
                <p
                  className="max-w-[900px] font-inter mx-auto text-muted-foreground font-normal tracking-tight md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed"
                >
                  Competition in C.O.D.E. Club and win prizes. ACSL and USACO are both competitions that students can
                  compete in to show off their computer talents.
                </p>
              </div>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-8">
                <Card className="bg-background p-4 shadow-sm flex flex-col">
                  <CardHeader className="p-4">
                    <TrophyIcon className="h-6 w-6 text-primary mb-2" />
                    <CardTitle>ACSL/USACO</CardTitle>
                  </CardHeader>
                  <CardContent className="p-4 flex-1">
                    <p className="text-muted-foreground font-inter">
                      A team and school-based competition
                    </p>
                  </CardContent>
                  <div className="p-4 flex gap-2 w-full mt-auto">
                    <Button className="w-full">ACSL</Button>
                    <Button className="w-full">USACO</Button>
                  </div>
                </Card>
                <Card className="bg-background p-4 shadow-sm flex flex-col">
                  <CardHeader className="p-4">
                    <CodeIcon className="h-6 w-6 text-primary mb-2" />
                    <CardTitle>Projects</CardTitle>
                  </CardHeader>
                  <CardContent className="p-4 flex-1">
                    <p className="text-muted-foreground font-inter" >
                      Check out some of the projects past students have made in this hackathon
                    </p>
                  </CardContent>
                  <div className="p-4 w-full">
                    <Button className="w-full">MORE</Button>
                  </div>
                </Card>
                <Card className="bg-background p-4 shadow-sm flex flex-col">
                  <CardHeader className="p-4">
                    <ClockIcon className="h-6 w-6 text-primary mb-2" />
                    <CardTitle>Monthly Hackathons</CardTitle>
                  </CardHeader>
                  <CardContent className="p-4 flex-1">
                    <p className="text-muted-foreground font-inter">
                      Where teams come together to innovate within a set amount of time.
                    </p>
                  </CardContent>
                </Card>
                <Card className="bg-background p-4 shadow-sm flex flex-col">
                  <CardHeader className="p-4">
                    <BugIcon className="h-6 w-6 text-primary mb-2" />
                    <CardTitle>Why Compete?</CardTitle>
                  </CardHeader>
                  <CardContent className="p-4 flex-1">
                    <p className="text-muted-foreground font-inter">
                      Why not? It's a great way to learn new skills, network with like-minded individuals, and
                      potentitally bring your ideas to life.
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </section> */}
          {/* <section className="w-full py-12 md:py-24 lg:py-32">
            <div className="container px-4 md:px-6">
              <div className="flex flex-col items-center justify-center space-y-4 text-center">
                <div className="space-y-2">
                  <h2
                    className="text-3xl font-heading font-bold tracking-tighter text-foreground sm:text-5xl"
                  >
                    Get in Touch
                  </h2>
                  <p
                    className="max-w-[600px] font-heading text-muted-foreground font-normal tracking-tight md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed"
                  >
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

function BugIcon(props: any) {
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
      <path d="m8 2 1.88 1.88" />
      <path d="M14.12 3.88 16 2" />
      <path d="M9 7.13v-1a3.003 3.003 0 1 1 6 0v1" />
      <path d="M12 20c-3.3 0-6-2.7-6-6v-3a4 4 0 0 1 4-4h4a4 4 0 0 1 4 4v3c0 3.3-2.7 6-6 6" />
      <path d="M12 20v-9" />
      <path d="M6.53 9C4.6 8.8 3 7.1 3 5" />
      <path d="M6 13H2" />
      <path d="M3 21c0-2.1 1.7-3.9 3.8-4" />
      <path d="M20.97 5c0 2.1-1.6 3.8-3.5 4" />
      <path d="M22 13h-4" />
      <path d="M17.2 17c2.1.1 3.8 1.9 3.8 4" />
    </svg>
  )
}


function ClockIcon(props: any) {
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
      <circle cx="12" cy="12" r="10" />
      <polyline points="12 6 12 12 16 14" />
    </svg>
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


function TrophyIcon(props: any) {
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
      <path d="M6 9H4.5a2.5 2.5 0 0 1 0-5H6" />
      <path d="M18 9h1.5a2.5 2.5 0 0 0 0-5H18" />
      <path d="M4 22h16" />
      <path d="M10 14.66V17c0 .55-.47.98-.97 1.21C7.85 18.75 7 20.24 7 22" />
      <path d="M14 14.66V17c0 .55.47.98.97 1.21C16.15 18.75 17 20.24 17 22" />
      <path d="M18 2H6v7a6 6 0 0 0 12 0V2Z" />
    </svg>
  )
}
