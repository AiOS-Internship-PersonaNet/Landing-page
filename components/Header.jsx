import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-black/50 backdrop-blur-sm border-b border-gray-800">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <Link href="/" className="text-2xl font-bold text-white">
          SuperIntro
        </Link>
        <nav className="hidden md:flex space-x-6">
          <Link href="#how-it-works" className="text-gray-300 hover:text-white">
            How It Works
          </Link>
          <Link href="#benefits" className="text-gray-300 hover:text-white">
            Benefits
          </Link>
          <Link href="#testimonials" className="text-gray-300 hover:text-white">
            Testimonials
          </Link>
        </nav>
        <div className="flex gap-4">
          <Button variant="ghost" className="text-gray-300 hover:text-white">
            Sign in
          </Button>
          <Button>Apply Now</Button>
        </div>
      </div>
    </header>
  );
}
