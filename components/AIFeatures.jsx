import { Brain, MessageSquare, Sparkles } from "lucide-react";

export default function AIFeatures() {
  return (
    <section className="py-20 bg-black border-t border-gray-800">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl text-gray-300 md:text-4xl font-bold text-center mb-12">
          🚀 AI Can't Fake Chemistry—It Just Finds It Faster
        </h2>
        <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          <div className="text-center">
            <MessageSquare className="w-12 h-12 mx-auto mb-4 text-purple-500" />
            <p className="text-gray-300">
              👥 Your SuperIntro talks to other SuperIntros in AI-powered social
              simulations. It asks questions, makes jokes, and even detects
              awkward moments.
            </p>
          </div>
          <div className="text-center">
            <Brain className="w-12 h-12 mx-auto mb-4 text-pink-500" />
            <p className="text-gray-300">
              🔥 You control and view your SuperIntro's conversations—so you get
              a preview of how natural your connections will feel before you
              commit.
            </p>
          </div>
          <div className="text-center">
            <Sparkles className="w-12 h-12 mx-auto mb-4 text-orange-500" />
            <p className="text-gray-300">
              💡 No more swiping, no more surface-level chats—just real, curated
              experiences with people you're actually excited to meet.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
