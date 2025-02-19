import { Check } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function AiChemistry() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">🚀 AI Can't Fake Chemistry—It Just Finds It Faster</h2>
        <div className="max-w-2xl mx-auto">
          <ul className="space-y-4">
            <li className="flex items-start">
              <Check className="w-6 h-6 text-green-500 mr-2 flex-shrink-0" />
              <span>
                Your SuperIntro talks to other SuperIntros in AI-powered social simulations. It asks questions, makes
                jokes, and even detects awkward moments.
              </span>
            </li>
            <li className="flex items-start">
              <Check className="w-6 h-6 text-green-500 mr-2 flex-shrink-0" />
              <span>
                You control and view your SuperIntro's conversations—so you get a preview of how natural your
                connections will feel before you commit.
              </span>
            </li>
            <li className="flex items-start">
              <Check className="w-6 h-6 text-green-500 mr-2 flex-shrink-0" />
              <span>
                No more swiping, no more surface-level chats—just real, curated experiences with people you're actually
                excited to meet.
              </span>
            </li>
          </ul>
        </div>
        <div className="text-center mt-12">
          <p className="text-xl font-semibold mb-4">
            ✅ A 95% show-up rate—because people don't flake when they already feel a connection.
          </p>
          <p className="text-xl font-semibold mb-4">
            ✅ An 89% match success rate—because compatibility isn't left to chance.
          </p>
          <p className="text-xl font-semibold mb-8">
            ✅ No randomness, no networking gimmicks—just meaningful interactions.
          </p>
          <Button size="lg">Apply Now</Button>
        </div>
      </div>
    </section>
  )
}

