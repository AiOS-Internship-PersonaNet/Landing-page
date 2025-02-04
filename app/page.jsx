import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  Calendar,
  Users,
  MessageSquare,
  Coffee,
  ChevronRight,
} from "lucide-react";
import Image from "next/image";

const TESTIMONIALS = [
  `I used to waste hours on first dates that went nowhere. I just explore different scenarios just for me—I just show up when I know it’s a great fit.`,

  `Sometimes I want deep convos, other times I want playful, sarcastic banter. It helps me see who really vibes with me before I even chat with them.`,

  `Every week, SuperIntro invites me to sit down with 5 amazing people at dinner, and I already know I’ll click with at least a few. There is less small talk and no awkwardness`,

  `My SuperIntro has already had multiple conversations with potential matches before I even talk to them. By the time we meet, it already feels like we know each other`,
];

export default function LandingPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container px-4 sm:px-6 lg:px-8 flex h-16 items-center justify-between">
          <Link href="/" className="flex items-center gap-2">
            <span className="text-2xl font-bold bg-gradient-to-r from-purple-600 to-indigo-600 bg-clip-text text-transparent">
              <img src="/images/logo.svg" width={120} alt="SuperIntro" />
            </span>
          </Link>
          <nav className="hidden md:flex gap-6 px-4">
            <Link
              href="#how-it-works"
              className="text-sm font-medium hover:text-purple-600 transition-colors"
            >
              How It Works
            </Link>
            <Link
              href="#testimonials"
              className="text-sm font-medium hover:text-purple-600 transition-colors"
            >
              Success Stories
            </Link>
            {/* <Link
              href="#pricing"
              className="text-sm font-medium hover:text-purple-600 transition-colors"
            >
              Pricing
            </Link> */}
          </nav>
          <div className="flex gap-4">
            <Button asChild variant="ghost">
              <a href="https://app.superintro.me/login">Log in</a>
            </Button>
            <Button asChild>
              <a href="https://app.superintro.me/signup">Get Started</a>
            </Button>
          </div>
        </div>
      </header>

      <main className="flex-1">
        <section className="relative py-6 sm:py-10 lg:py-13">
          <div className="container px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col lg:flex-row items-center gap-8 py-9 lg:py-16">
              <div className="flex flex-col items-start gap-6 lg:w-1/2">
                <h1 className="text-4xl font-bold tracking-tight lg:text-6xl max-w-[600px]">
                  Experience Dates With Matches{" "}
                  <span className="bg-gradient-to-r from-purple-600 to-indigo-600 bg-clip-text text-transparent">
                    Before You Meet
                  </span>
                </h1>
                <p className="text-lg text-muted-foreground max-w-[500px]">
                  Let your SuperIntro handle all the small talk. Join weekly
                  dinners with 5 amazing connections who share your interests.
                </p>
                <div className="flex gap-4 mt-4">
                  <Button asChild size="lg">
                    <a href="https://app.superintro.me/signup">
                      Join now
                      <ChevronRight className="ml-2 h-4 w-4" />
                    </a>
                  </Button>
                  {/* <Button variant="outline" size="lg">
                    Learn more
                  </Button> */}
                </div>
                <div className="flex items-center gap-4 mt-6">
                  <div className="flex -space-x-4">
                    {[
                      `https://lh3.googleusercontent.com/a/ACg8ocIhzzLnSZ22Vk-GjD51RFLIJgD75QBOY4qpM4bbus7dZWPM=s96-c`,
                      `https://lh3.googleusercontent.com/a/ACg8ocI9pQFbakjpISZF6_o6Jd551bHEL0_KgxdxDzVsETGI4ys2tQ=s96-c`,
                      `https://lh3.googleusercontent.com/a/ACg8ocIhZoYJWr6WLIbs9GmrSwiYvDcGxIHT3JEnScnmaQ4ACZlWIWo=s96-c`,
                      `https://firebasestorage.googleapis.com/v0/b/checkout-fe492.appspot.com/o/profile_urls%2FAvatar%20SuperIntro%20Theme.PNG?alt=media&token=4f7a78d9-3d0d-48f7-aabb-ed15814d3fec`,
                    ].map((i) => (
                      <Image
                        key={i}
                        src={i}
                        width={40}
                        height={40}
                        alt="User"
                        className="w-10 h-10 rounded-full border-2 border-background"
                      />
                    ))}
                  </div>
                  <div className="text-sm">
                    <span className="font-medium">2,000+</span> matches made
                    this week
                  </div>
                </div>
              </div>
              <div className="lg:w-1/2 relative">
                <div className="relative w-full">
                  <img
                    src="/images/meetup.jpg"
                    alt="Feature Preview"
                    className="rounded-2xl shadow-2xl"
                  />
                  <div className="absolute bottom-4 right-4 sm:bottom-6 sm:right-6 bg-purple-600 text-white p-3 sm:p-4 rounded-xl shadow-lg">
                    <p className="text-xs sm:text-sm font-medium">
                      95% match rate
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section
          id="how-it-works"
          className="py-4 sm:py-12 lg:py-16 bg-slate-50"
        >
          <div className="container px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-2xl mx-auto mb-16">
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4">
                How It Works
              </h2>
              <p className="text-muted-foreground">
                Four simple steps to meaningful connections
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 px-4 sm:px-6 lg:px-0 auto-rows-fr">
              {[
                {
                  icon: <MessageSquare className="h-8 w-8" />,
                  title: "Define",
                  description:
                    "Answer quick questions to set goals and shape your SuperIntro experience",
                },
                {
                  icon: <Users className="h-8 w-8" />,
                  title: "Connect",
                  description:
                    "Your SuperIntro goes on dates for you—view and create dates before you meet",
                },
                {
                  icon: <Coffee className="h-8 w-8" />,
                  title: "Dine",
                  description:
                    "Reserve your spot at weekly dinners with 5 compatible people",
                },
                {
                  icon: <Calendar className="h-8 w-8" />,
                  title: "Meet",
                  description:
                    "Meet like-minded people you've already gotten to know through your SuperIntro",
                },
              ].map((step, i) => (
                <div key={i} className="relative group h-full">
                  <div className="bg-white rounded-2xl p-6 shadow-lg transition-all duration-200 hover:shadow-xl h-full">
                    <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4 text-purple-600">
                      {step.icon}
                    </div>
                    <h3 className="font-semibold text-xl mb-2">{step.title}</h3>
                    <p className="text-muted-foreground">{step.description}</p>
                  </div>
                  {i < 3 && (
                    <div className="hidden lg:block absolute top-1/2 -right-4 w-8 h-[2px] bg-purple-200" />
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="testimonials" className="py-16 sm:py-24 lg:py-32">
          <div className="container px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-2xl mx-auto mb-16">
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4">
                Success Stories
              </h2>
              <p className="text-muted-foreground">
                Hear What Others Are Saying About SuperIntro!
              </p>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
              {TESTIMONIALS.map((i) => (
                <div key={i} className="bg-white rounded-2xl p-6 shadow">
                  <div className="flex items-center gap-4 mb-4">
                    <div>
                      <p className="font-medium">User Review</p>
                      <p className="text-sm text-muted-foreground">
                        Matched recently
                      </p>
                    </div>
                  </div>
                  <p className="text-muted-foreground">{i}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16 sm:py-24 lg:py-32 bg-purple-600 text-white">
          <div className="container px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
              <div>
                <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4">
                  Ready to find your perfect match?
                </h2>
                <p className="text-purple-100">
                  Join thousands of others who have found meaningful connections
                  through SuperIntro.
                </p>
              </div>
              <Button asChild size="lg" variant="secondary">
                <a href="https://app.superintro.me/signup">
                  Get Started Now
                  <ChevronRight className="ml-2 h-4 w-4" />
                </a>
              </Button>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t py-8">
        <div className="container px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="flex items-center gap-4">
              <p className="text-sm text-muted-foreground">
                © 2025 SuperIntro. All rights reserved.
              </p>
            </div>
            <nav className="flex gap-6">
              <Link
                href="/terms-and-conditions"
                className="text-sm text-muted-foreground hover:text-foreground"
              >
                Terms & Conditions
              </Link>
              <Link
                href="/privacy-policy"
                className="text-sm text-muted-foreground hover:text-foreground"
              >
                Privacy Policy
              </Link>
              {/* <Link
                href="#"
                className="text-sm text-muted-foreground hover:text-foreground"
              >
                Contact
              </Link> */}
            </nav>
          </div>
        </div>
      </footer>
    </div>
  );
}
