import { Battery, BatteryCharging } from "lucide-react";

export default function EmotionalBanking() {
  return (
    <section className="py-20 bg-black border-t border-gray-800">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl text-gray-300 font-bold text-center mb-12">
          From Emotional Debt to Connection Credit
        </h2>
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <div className="bg-gray-900 p-8 rounded-lg">
            <div className="flex items-center gap-4 mb-6">
              <Battery className="w-8 h-8 text-red-500" />
              <h3 className="text-xl font-semibold text-gray-300">Traditional Dating Apps</h3>
            </div>
            <p className="text-gray-400">
              Constant swiping, ignored messages, and surface-level small talk
              drain your emotional energy like overdrafting your account.
            </p>
          </div>
          <div className="bg-gray-900 p-8 rounded-lg">
            <div className="flex items-center gap-4 mb-6">
              <BatteryCharging className="w-8 h-8 text-green-500" />
              <h3 className="text-xl font-semibold text-gray-300">SuperIntro</h3>
            </div>
            <p className="text-gray-400">
              Automates the exhausting early-stage conversations, ensuring that
              by the time you meet, you're already aligned on chemistry, values,
              and interests—no more wasted emotional investment.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
