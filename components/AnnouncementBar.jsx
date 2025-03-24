"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import { useState, useEffect } from "react"
import Image from "next/image"
import Link from "next/link"

export default function AnnouncementBanner() {
  // Keep only the animation state, remove the visibility state
  const [animationStep, setAnimationStep] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setAnimationStep((prev) => (prev + 1) % 4)
    }, 2000)

    return () => clearInterval(interval)
  }, [])

  // No conditional rendering based on visibility
  return (
    <div className="relative bg-gradient-to-r from-purple-900 via-pink-900 to-purple-900 overflow-hidden py-8 mt-16">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-4 -left-4 w-24 h-24 rounded-full bg-purple-500 opacity-20 blur-xl"></div>
        <div className="absolute top-10 right-1/4 w-32 h-32 rounded-full bg-pink-500 opacity-20 blur-xl"></div>
        <div className="absolute bottom-0 right-10 w-20 h-20 rounded-full bg-orange-500 opacity-20 blur-xl"></div>
      </div>

      <div className="container mx-auto px-4 relative">
        <div className="max-w-5xl mx-auto">
          <div className="flex flex-col md:flex-row gap-8 items-center">
            {/* Animation Section */}
            <div className="w-full md:w-2/5 flex justify-center">
              <div className="relative h-64 w-64">
                {/* Central User Circle with "YOU" */}
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-20 h-20 rounded-full flex items-center justify-center z-10 shadow-lg bg-gradient-to-r from-purple-500 to-pink-500 border-2 border-white">
                  <span className="text-white font-bold text-lg">YOU</span>
                </div>

                {/* Orbiting People */}
                <div
                  className={`absolute w-full h-full transition-transform duration-1000 ease-in-out ${animationStep === 0
                      ? "rotate-0"
                      : animationStep === 1
                        ? "rotate-90"
                        : animationStep === 2
                          ? "rotate-180"
                          : "rotate-270"
                    }`}
                >
                  {/* Person 1 */}
                  <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-14 h-14 rounded-full flex items-center justify-center shadow-md overflow-hidden border-2 border-white">
                    <Image
                      src="https://i.pravatar.cc/56?img=5"
                      alt="Potential match"
                      width={56}
                      height={56}
                      className="object-cover w-full h-full"
                    />
                  </div>

                  {/* Person 2 */}
                  <div className="absolute top-1/2 right-0 transform translate-x-1/2 -translate-y-1/2 w-14 h-14 rounded-full flex items-center justify-center shadow-md overflow-hidden border-2 border-white">
                    <Image
                      src="https://i.pravatar.cc/56?img=32"
                      alt="Potential match"
                      width={56}
                      height={56}
                      className="object-cover w-full h-full"
                    />
                  </div>

                  {/* Person 3 */}
                  <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-1/2 w-14 h-14 rounded-full flex items-center justify-center shadow-md overflow-hidden border-2 border-white">
                    <Image
                      src="https://i.pravatar.cc/56?img=11"
                      alt="Potential match"
                      width={56}
                      height={56}
                      className="object-cover w-full h-full"
                    />
                  </div>

                  {/* Person 4 */}
                  <div className="absolute top-1/2 left-0 transform -translate-x-1/2 -translate-y-1/2 w-14 h-14 rounded-full flex items-center justify-center shadow-md overflow-hidden border-2 border-white">
                    <Image
                      src="https://i.pravatar.cc/56?img=23"
                      alt="Potential match"
                      width={56}
                      height={56}
                      className="object-cover w-full h-full"
                    />
                  </div>
                </div>

                {/* Connection lines */}
                <div className="absolute top-1/2 left-1/2 w-full h-full transform -translate-x-1/2 -translate-y-1/2">
                  <svg className="w-full h-full" viewBox="0 0 200 200">
                    <line
                      x1="100"
                      y1="100"
                      x2="100"
                      y2="20"
                      stroke="rgba(255,255,255,0.5)"
                      strokeWidth="2"
                      strokeDasharray="5,5"
                    />
                    <line
                      x1="100"
                      y1="100"
                      x2="180"
                      y2="100"
                      stroke="rgba(255,255,255,0.5)"
                      strokeWidth="2"
                      strokeDasharray="5,5"
                    />
                    <line
                      x1="100"
                      y1="100"
                      x2="100"
                      y2="180"
                      stroke="rgba(255,255,255,0.5)"
                      strokeWidth="2"
                      strokeDasharray="5,5"
                    />
                    <line
                      x1="100"
                      y1="100"
                      x2="20"
                      y2="100"
                      stroke="rgba(255,255,255,0.5)"
                      strokeWidth="2"
                      strokeDasharray="5,5"
                    />
                  </svg>
                </div>
              </div>
            </div>

            {/* Content Section */}
            <div className="w-full md:w-3/5">
              <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
                Create an AI version of you that schedules dates for you weekly
              </h2>

              <p className="text-gray-200 mb-4">Start connecting wherever you are and meet new people</p>

              <ul className="space-y-3 mb-6 list-none">
                <li className="text-gray-200">
                  <span className="inline-block w-2 h-2 bg-pink-400 rounded-full mr-2"></span>
                  <span>
                    Instantly match with someone nearby for a night out or dinner this week—
                    <span className="font-semibold text-white">no endless chatting, no flaking</span>
                  </span>
                </li>
                <li className="text-gray-200">
                  <span className="inline-block w-2 h-2 bg-pink-400 rounded-full mr-2"></span>
                  <span>
                    Your AI-SuperINTRO simulates{" "}
                    <span className="font-semibold text-white">over 1000hrs of experiences with others in minutes</span>{" "}
                    to find the best matches for you
                  </span>
                </li>
                <li className="text-gray-200">
                  <span className="inline-block w-2 h-2 bg-pink-400 rounded-full mr-2"></span>
                  <span>
                    No swiping, no ghosting—just{" "}
                    <span className="font-semibold text-white">
                      real-world experiences with people you'll actually be excited to meet
                    </span>
                  </span>
                </li>
              </ul>

              <Button asChild className="bg-white text-purple-900 hover:bg-gray-100 group">
                <Link href={"https://app.superintro.me/login"}>
                  Get Weekly Date Recommendations
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </Button>
            </div>

            {/* Removed the close button */}
          </div>
        </div>
      </div>
    </div>
  )
}

