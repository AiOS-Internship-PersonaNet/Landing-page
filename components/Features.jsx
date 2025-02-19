import { Check } from "lucide-react";

const features = [
  'Your SuperIntro "goes on dates" for you in AI-powered simulations—so you only meet people you\'re already vibing with.',
  "No ghosting, no flaking—just natural, effortless conversations that lead to real-life connections.",
  "Meet in the real world—when it makes sense—SuperIntro facilitates small-group dinners, exclusive events, or 1:1 meetups where matches can naturally connect.",
];

export default function Features() {
  return (
    <section className="py-20 bg-black border-t border-gray-800">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-300 mb-6">
            Your SuperIntro Finds Chemistry for You—Before You Even Meet
          </h2>
          <p className="text-xl text-gray-400 mb-4">
            Less Small Talk. More Real Connections. Zero Wasted Time.
          </p>
          <p className="text-gray-400">
            Tired of forced, awkward meetups? SuperIntro simulates conversations
            between your digital self and others—so by the time you meet in real
            life, the chemistry is already there.
          </p>
        </div>
        <div className="max-w-3xl mx-auto">
          {features.map((feature, index) => (
            <div key={index} className="flex items-start gap-4 mb-6">
              <Check className="w-6 h-6 text-green-500 flex-shrink-0 mt-1" />
              <p className="text-gray-300">{feature}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
