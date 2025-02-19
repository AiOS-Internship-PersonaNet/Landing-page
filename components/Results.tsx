import { Check } from "lucide-react"

const results = [
  "A 95% show-up rate—because people don't flake when they already feel a connection.",
  "An 89% match success rate—because compatibility isn't left to chance.",
  "No randomness, no networking gimmicks—just meaningful interactions.",
]

export default function Results() {
  return (
    <section className="py-20 bg-black border-t border-gray-800">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Results That Speak for Themselves</h2>
        <div className="max-w-3xl mx-auto">
          {results.map((result, index) => (
            <div key={index} className="flex items-center gap-4 mb-6">
              <Check className="w-6 h-6 text-green-500 flex-shrink-0" />
              <p className="text-xl text-gray-300">{result}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

