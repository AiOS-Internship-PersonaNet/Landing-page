import { Button } from "@/components/ui/button";

export default function CallToAction() {
  return (
    <section className="py-20 bg-gradient-to-r from-purple-900 to-pink-900">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">
          Swipe fatigue stops here.
        </h2>
        <p className="text-xl mb-8 max-w-2xl mx-auto text-gray-300">
          With SuperIntro, every interaction makes an emotional deposit, not a
          withdrawal.
        </p>
        <Button
          asChild
          size="lg"
          className="bg-white text-purple-900 hover:bg-gray-100"
        >
          <a href="https://app.superintro.me/signup">
            Try Risk-Free Today
          </a>
        </Button>
      </div>
    </section>
  );
}
