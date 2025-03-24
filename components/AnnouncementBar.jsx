"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import { useState, useEffect } from "react"
import Image from "next/image"

export default function AnnouncementBanner() {
  const [animationStep, setAnimationStep] = useState(0)
  const [hoverEffect, setHoverEffect] = useState(false)

  useEffect(() => {
    // Faster animation interval (1000ms instead of 2000ms)
    const interval = setInterval(() => {
      setAnimationStep((prev) => (prev + 1) % 4)
    }, 1000)

    // Add random hover effect for more dynamic movement
    const hoverInterval = setInterval(() => {
      setHoverEffect((prev) => !prev)
    }, 3000)

    return () => {
      clearInterval(interval)
      clearInterval(hoverInterval)
    }
  }, [])

  return (
    <div className="relative bg-gradient-to-r from-purple-900 via-pink-900 to-purple-900 overflow-hidden py-8 mt-16">
      {/* Enhanced animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-4 -left-4 w-24 h-24 rounded-full bg-purple-500 opacity-20 blur-xl animate-pulse"></div>
        <div
          className="absolute top-10 right-1/4 w-32 h-32 rounded-full bg-pink-500 opacity-20 blur-xl animate-pulse"
          style={{ animationDelay: "0.5s" }}
        ></div>
        <div
          className="absolute bottom-0 right-10 w-20 h-20 rounded-full bg-orange-500 opacity-20 blur-xl animate-pulse"
          style={{ animationDelay: "1s" }}
        ></div>
      </div>

      <div className="container mx-auto px-4 relative">
        <div className="max-w-5xl mx-auto">
          <div className="flex flex-col md:flex-row gap-8 items-center">
            {/* Animation Section - Enhanced with more movement */}
            <div className="w-full md:w-2/5 flex justify-center">
              <div className="relative h-64 w-64">
                {/* Central User Circle with "YOU" - Added subtle pulse animation */}
                <div
                  className={`absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-20 h-20 rounded-full flex items-center justify-center z-10 shadow-lg bg-gradient-to-r from-purple-500 to-pink-500 border-2 border-white transition-all duration-500 ${
                    hoverEffect ? "scale-110" : "scale-100"
                  }`}
                >
                  <span className="text-white font-bold text-lg">YOU</span>
                </div>

                {/* Orbiting People - Faster rotation and added hover effects */}
                <div
                  className={`absolute w-full h-full transition-transform duration-700 ease-in-out ${
                    animationStep === 0
                      ? "rotate-0"
                      : animationStep === 1
                        ? "rotate-90"
                        : animationStep === 2
                          ? "rotate-180"
                          : "rotate-270"
                  }`}
                >
                  {/* Person 1 */}
                  <div
                    className={`absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-14 h-14 rounded-full flex items-center justify-center shadow-md overflow-hidden border-2 border-white transition-transform duration-300 ${
                      animationStep === 0 ? "scale-110" : "scale-100"
                    }`}
                  >
                    <Image
                      src="https://i.pravatar.cc/56?img=5"
                      alt="Potential match"
                      width={56}
                      height={56}
                      className="object-cover w-full h-full"
                    />
                  </div>

                  {/* Person 2 */}
                  <div
                    className={`absolute top-1/2 right-0 transform translate-x-1/2 -translate-y-1/2 w-14 h-14 rounded-full flex items-center justify-center shadow-md overflow-hidden border-2 border-white transition-transform duration-300 ${
                      animationStep === 1 ? "scale-110" : "scale-100"
                    }`}
                  >
                    <Image
                      src="https://i.pravatar.cc/56?img=32"
                      alt="Potential match"
                      width={56}
                      height={56}
                      className="object-cover w-full h-full"
                    />
                  </div>

                  {/* Person 3 */}
                  <div
                    className={`absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-1/2 w-14 h-14 rounded-full flex items-center justify-center shadow-md overflow-hidden border-2 border-white transition-transform duration-300 ${
                      animationStep === 2 ? "scale-110" : "scale-100"
                    }`}
                  >
                    <Image
                      src="https://i.pravatar.cc/56?img=11"
                      alt="Potential match"
                      width={56}
                      height={56}
                      className="object-cover w-full h-full"
                    />
                  </div>

                  {/* Person 4 */}
                  <div
                    className={`absolute top-1/2 left-0 transform -translate-x-1/2 -translate-y-1/2 w-14 h-14 rounded-full flex items-center justify-center shadow-md overflow-hidden border-2 border-white transition-transform duration-300 ${
                      animationStep === 3 ? "scale-110" : "scale-100"
                    }`}
                  >
                    <Image
                      src="https://i.pravatar.cc/56?img=23"
                      alt="Potential match"
                      width={56}
                      height={56}
                      className="object-cover w-full h-full"
                    />
                  </div>
                </div>

                {/* Connection lines with pulse animation */}
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
                      className={animationStep === 0 ? "animate-pulse" : ""}
                    />
                    <line
                      x1="100"
                      y1="100"
                      x2="180"
                      y2="100"
                      stroke="rgba(255,255,255,0.5)"
                      strokeWidth="2"
                      strokeDasharray="5,5"
                      className={animationStep === 1 ? "animate-pulse" : ""}
                    />
                    <line
                      x1="100"
                      y1="100"
                      x2="100"
                      y2="180"
                      stroke="rgba(255,255,255,0.5)"
                      strokeWidth="2"
                      strokeDasharray="5,5"
                      className={animationStep === 2 ? "animate-pulse" : ""}
                    />
                    <line
                      x1="100"
                      y1="100"
                      x2="20"
                      y2="100"
                      stroke="rgba(255,255,255,0.5)"
                      strokeWidth="2"
                      strokeDasharray="5,5"
                      className={animationStep === 3 ? "animate-pulse" : ""}
                    />
                  </svg>
                </div>
              </div>
            </div>

            {/* Content Section - More concise messaging */}
            <div className="w-full md:w-3/5">
              <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">Your AI dates for you</h2>

              <p className="text-gray-200 mb-4">Weekly matches with people you'll actually connect with</p>

              <ul className="space-y-3 mb-6 list-none">
                <li className="text-gray-200 flex items-start">
                  <span className="inline-block w-2 h-2 bg-pink-400 rounded-full mr-2 mt-2"></span>
                  <span>
                    <span className="font-semibold text-white">No endless chatting, no flaking</span> — instant matches
                    for real-world meetups
                  </span>
                </li>
                <li className="text-gray-200 flex items-start">
                  <span className="inline-block w-2 h-2 bg-pink-400 rounded-full mr-2 mt-2"></span>
                  <span>
                    <span className="font-semibold text-white">1000+ hours of simulated experiences</span> in minutes to
                    find your perfect match
                  </span>
                </li>
                <li className="text-gray-200 flex items-start">
                  <span className="inline-block w-2 h-2 bg-pink-400 rounded-full mr-2 mt-2"></span>
                  <span>
                    <span className="font-semibold text-white">No swiping, no ghosting</span> — just real connections
                  </span>
                </li>
              </ul>

              <Button className="bg-white text-purple-900 hover:bg-gray-100 group">
                Get Weekly Matches
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}


