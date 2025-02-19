import Image from "next/image";

const testimonials = [
  {
    quote:
      "I was skeptical—another app promising 'real connections'? But the AI actually nailed it. I walked into my first dinner and felt like I already knew everyone. Zero small talk, just good vibes.",
    author: "Sarah",
    role: "UX Designer",
  },
  {
    quote:
      "I don't have time for bad dates and wasted networking events. SuperIntro made sure every interaction felt natural and actually worth my time.",
    author: "Jason",
    role: "Product Manager",
  },
  {
    quote:
      "I hate forced conversations. My SuperIntro basically pre-met my matches for me, so by the time we met IRL, it felt effortless.",
    author: "Maya",
    role: "Startup Founder",
  },
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-20 bg-black border-t border-gray-800">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-300">
          📣 What People Are Saying
        </h2>
        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-gray-900 p-6 rounded-lg">
              <p className="text-gray-300 mb-6">💬 "{testimonial.quote}"</p>
              <div className="flex items-center gap-4">
                <Image
                  src={`https://i.pravatar.cc/48?img=${index + 10}`}
                  alt={testimonial.author}
                  width={48}
                  height={48}
                  className="rounded-full"
                />
                <div>
                  <p className="font-semibold text-gray-300">{testimonial.author}</p>
                  <p className="text-sm text-gray-400">{testimonial.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
