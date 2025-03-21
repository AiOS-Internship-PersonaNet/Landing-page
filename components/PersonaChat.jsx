"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { MessageSquare, Users, Calendar, Sparkles, X, ArrowRight } from "lucide-react"
import ChatBox from "./ChatBox"
import { getCookie, setCookie } from "@/lib/cookie"

export default function PersonaChat() {
    const [isModalOpen, setIsModalOpen] = useState(false)
    const [isChatWithPersonaModalOpen, setIsChatWithPersonaModalOpen] = useState(false)
    const [currentSlide, setCurrentSlide] = useState(0)
    const [isVisible, setIsVisible] = useState(false)

    useEffect(() => {
        // Add a slight delay before showing the button to make the animation more noticeable
        const timer = setTimeout(() => {
            setIsVisible(true)
        }, 500)

        return () => clearTimeout(timer)
    }, [])

    const slides = [
        {
            title: "Preview Real Connections",
            description:
                "PersonaChat lets you interact with authentic digital versions of real people. These personas are created and customized by their owners to reflect their true personality, interests, and communication style.",
            icon: <Users className="w-16 h-16 text-purple-500" />,
        },
        {
            title: "Genuine Conversations, Real Insights",
            description:
                "Have meaningful conversations that reveal the real person behind the profile. Each persona is trained on its owner's actual preferences, humor, and values—not generic AI responses.",
            icon: <MessageSquare className="w-16 h-16 text-pink-500" />,
        },
        {
            title: "Find Your Chemistry Before Meeting",
            description:
                "Test your compatibility through natural conversations that feel like texting the actual person. When you finally meet in person, you'll already know you have a genuine connection.",
            icon: <Sparkles className="w-16 h-16 text-orange-500" />,
        },
    ]

    const nextSlide = () => {
        if (currentSlide < slides.length - 1) {
            setCurrentSlide(currentSlide + 1)
        }
    }

    const prevSlide = () => {
        if (currentSlide > 0) {
            setCurrentSlide(currentSlide - 1)
        }
    }

    return (
        <>
            <section className="py-20 bg-black border-t border-gray-800 relative">
                <div className="container mx-auto px-4">
                    <div className="max-w-4xl mx-auto text-center">
                        <h2 className="text-3xl md:text-4xl font-bold mb-6">Chat with Real People's Digital Personas</h2>
                        <p className="text-xl text-gray-300 mb-8">
                            PersonaChat connects you with authentic digital versions of real people—created and customized by them to
                            reflect their true personality. These aren't generic bots; they're personal digital twins that think,
                            respond, and connect just like their creators.
                        </p>

                        <div className="grid md:grid-cols-3 gap-8 mb-24">
                            {" "}
                            {/* Increased bottom margin to make room for the fixed button */}
                            <div className="bg-gray-900 p-6 rounded-lg">
                                <div className="w-12 h-12 bg-purple-500 rounded-full flex items-center justify-center mx-auto mb-4">
                                    <MessageSquare className="w-6 h-6 text-white" />
                                </div>
                                <h3 className="text-xl font-semibold mb-3">Authentic Interactions</h3>
                                <p className="text-gray-400">
                                    Each persona is trained on its owner's actual preferences, communication style, and personality—creating
                                    conversations that feel genuinely human.
                                </p>
                            </div>
                            <div className="bg-gray-900 p-6 rounded-lg">
                                <div className="w-12 h-12 bg-pink-500 rounded-full flex items-center justify-center mx-auto mb-4">
                                    <Calendar className="w-6 h-6 text-white" />
                                </div>
                                <h3 className="text-xl font-semibold mb-3">Always Available</h3>
                                <p className="text-gray-400">
                                    Connect with someone's digital persona anytime—get to know the real them before committing to an
                                    in-person meeting.
                                </p>
                            </div>
                            <div className="bg-gray-900 p-6 rounded-lg">
                                <div className="w-12 h-12 bg-orange-500 rounded-full flex items-center justify-center mx-auto mb-4">
                                    <Sparkles className="w-6 h-6 text-white" />
                                </div>
                                <h3 className="text-xl font-semibold mb-3">Real Compatibility</h3>
                                <p className="text-gray-400">
                                    Discover genuine connection through conversations that reveal shared interests, values, and
                                    chemistry—just like texting the actual person.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Animated button fixed to the bottom right */}
                <div
                    className={`fixed bottom-8 right-8 z-40 transition-all duration-700 ease-in-out transform ${isVisible ? "translate-y-0 opacity-100" : "translate-y-16 opacity-0"
                        }`}
                >
                    <div className="relative">
                        {/* Pulsing background effect */}
                        <div className="absolute inset-0 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 opacity-70 blur-md animate-pulse"></div>

                        {/* Bouncing button */}
                        <Button
                            size="lg"
                            onClick={() => {
                                if (!getCookie('did_viewe_guide')) {
                                    setIsModalOpen(true)
                                    setCookie({
                                        name: 'did_viewe_guide',
                                        value: true,
                                        days: 30
                                    })
                                } else if (getCookie('did_viewe_guide') == 'true') {
                                    setIsChatWithPersonaModalOpen(true)
                                }
                            }
                            }
                            className="relative bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white px-8 py-6 h-auto rounded-full shadow-lg animate-bounce-subtle"
                        >
                            Try PersonaChat Now
                            <ArrowRight className="ml-2 h-5 w-5" />
                        </Button>
                    </div>
                </div>

                {/* Tutorial Modal */}
                {isModalOpen && (
                    <div className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-4">
                        <div className="bg-gray-900 rounded-xl max-w-2xl w-full relative overflow-hidden">
                            <button
                                onClick={() => {
                                    setIsModalOpen(false)
                                    setCurrentSlide(0)
                                }}
                                className="absolute top-4 right-4 text-gray-400 hover:text-white z-10"
                                aria-label="Close modal"
                            >
                                <X className="w-6 h-6" />
                            </button>

                            <div className="p-8">
                                {/* Progress indicator */}
                                <div className="flex gap-2 justify-center mb-6">
                                    {slides.map((_, index) => (
                                        <div
                                            key={index}
                                            className={`h-1 rounded-full transition-all duration-300 ${index === currentSlide ? "w-8 bg-gradient-to-r from-purple-500 to-pink-500" : "w-4 bg-gray-700"
                                                }`}
                                        />
                                    ))}
                                </div>

                                {/* Slide content */}
                                <div className="text-center">
                                    <div className="mx-auto mb-6 flex justify-center">{slides[currentSlide].icon}</div>
                                    <h3 className="text-2xl font-bold mb-4">{slides[currentSlide].title}</h3>
                                    <p className="text-gray-300 mb-8">{slides[currentSlide].description}</p>

                                    {currentSlide < slides.length - 1 ? (
                                        <div className="flex justify-between">
                                            <Button variant="ghost" onClick={prevSlide} disabled={currentSlide === 0} className="text-gray-400">
                                                Back
                                            </Button>
                                            <Button onClick={nextSlide}>Next</Button>
                                        </div>
                                    ) : (
                                        <Button
                                            size="lg"
                                            className="w-full bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600"
                                            onClick={() => {

                                                setIsModalOpen(false);
                                                setCurrentSlide(0);

                                                setIsChatWithPersonaModalOpen(true)
                                            }}
                                        >
                                            Start a Chat
                                        </Button>
                                    )}
                                </div>
                            </div>
                        </div>
                    </div>
                )}
            </section>
            {isChatWithPersonaModalOpen && <ChatBox onClose={() => setIsChatWithPersonaModalOpen(false)} />}
        </>
    )
}

