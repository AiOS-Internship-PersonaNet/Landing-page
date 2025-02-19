import { MessageSquare, UserCircle2, Users, Utensils } from "lucide-react";

const steps = [
  {
    icon: UserCircle2,
    number: "1",
    title: "Define",
    description:
      "Answer a few quick questions about your personality and social style—your SuperIntro is built around you.",
  },
  {
    icon: MessageSquare,
    number: "2",
    title: "Connect",
    description:
      "Your SuperIntro chats with potential matches—view, refine, and personalize these experiences to find the best fit.",
  },
  {
    icon: Utensils,
    number: "3",
    title: "Dine",
    description:
      "Reserve your spot at a small-group dinner with five people your SuperIntro already connected with.",
  },
  {
    icon: Users,
    number: "4",
    title: "Meet",
    description:
      "No awkward blind dates—you decide when, where, and how you meet the people you’ve already connected with.",
  },
];

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="py-20 bg-black border-t border-gray-800">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 text-gray-300">
          How It Works
        </h2>
        <p className="text-xl text-center text-gray-400 mb-16 max-w-2xl mx-auto">
          Meet People You Already Click With—Not Just People Who Look Good on
          Paper
        </p>
        <div className="relative max-w-5xl mx-auto">
          {/* Progress Line */}
          <div className="absolute top-24 left-0 right-0 h-1 bg-gray-800 hidden lg:block">
            <div className="h-full w-full bg-gradient-to-r from-purple-500 via-pink-500 to-orange-500" />
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 relative">
            {steps.map((step, index) => (
              <div key={index} className="relative flex flex-col items-center">
                {/* Step Number */}
                <div className="w-16 h-16 rounded-full bg-gray-900 flex items-center justify-center mb-4 border-2 border-gray-800">
                  <span className="text-3xl font-bold bg-gradient-to-r from-purple-500 via-pink-500 to-orange-500 text-transparent bg-clip-text">
                    {step.number}
                  </span>
                </div>

                {/* Icon */}
                <div className="w-20 h-20 rounded-2xl bg-gray-900 flex items-center justify-center mb-6 transform -rotate-12 hover:rotate-0 transition-transform duration-300">
                  <step.icon className="w-10 h-10 text-purple-500" />
                </div>

                {/* Content */}
                <h3 className="text-2xl font-semibold mb-3 text-gray-300">{step.title}</h3>
                <p className="text-gray-400 text-center">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
