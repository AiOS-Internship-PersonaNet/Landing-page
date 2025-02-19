import { Button } from "@/components/ui/button"
import { Check } from "lucide-react"

export default function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center pt-20 pb-20 bg-black">
      <div className="container mx-auto px-4 text-center">
        <div className="mb-12">
          <div className="w-24 h-24 mx-auto mb-8 rounded-full bg-gradient-to-r from-purple-500 via-pink-500 to-orange-500" />
        </div>
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 bg-gradient-to-r from-purple-500 via-pink-500 to-orange-500 text-transparent bg-clip-text">
          Stop the Emotional Drain—Start Connecting with Confidence
        </h1>
        <h2 className="text-2xl md:text-3xl text-gray-300 mb-12">
          Your SuperIntro Meets People for You—So You Only Invest in Real Connections
        </h2>
        <div className="max-w-2xl mx-auto mb-12">
          <ul className="space-y-6 text-left">
            <li className="flex items-start gap-3">
              <Check className="w-6 h-6 text-purple-500 flex-shrink-0 mt-1" />
              <div>
                <span className="block text-xl font-semibold text-purple-400 mb-1">
                  Emotional Toll of Traditional Apps
                </span>
                <span className="text-gray-400">
                  Every swipe, ghosted message, and dead-end conversation drains your emotional bank account.
                </span>
              </div>
            </li>
            <li className="flex items-start gap-3">
              <Check className="w-6 h-6 text-pink-500 flex-shrink-0 mt-1" />
              <div>
                <span className="block text-xl font-semibold text-pink-400 mb-1">SuperIntro's Solution</span>
                <span className="text-gray-400">
                  We condense hours of emotional labor into engaging, meaningful interactions within minutes of
                  matching.
                </span>
              </div>
            </li>
            <li className="flex items-start gap-3">
              <Check className="w-6 h-6 text-orange-500 flex-shrink-0 mt-1" />
              <div>
                <span className="block text-xl font-semibold text-orange-400 mb-1">Real Connections, Less Effort</span>
                <span className="text-gray-400">
                  Stop investing hours of emotional labor just to end up feeling drained, discouraged, and disconnected.
                </span>
              </div>
            </li>
          </ul>
        </div>
        <Button
          size="lg"
          className="bg-teal-500 hover:bg-teal-600 text-white text-lg px-8 py-6 h-auto rounded-full transition duration-300 ease-in-out transform hover:scale-105"
        >
          Try SuperIntro—No Strings Attached
        </Button>
      </div>
    </section>
  )
}

