import Image from "next/image";

export default function SocialProof() {
  return (
    <section className="py-20 bg-black border-t border-gray-800">
      <div className="container mx-auto px-4 text-center">
        <div className="flex flex-col md:flex-row items-center justify-center gap-8 mb-12">
          <div className="flex items-center gap-2">
            <div className="flex -space-x-2">
              {[1, 2, 3, 4].map((i) => (
                <Image
                  key={i}
                  src={`https://i.pravatar.cc/40?img=${i}`}
                  alt="User avatar"
                  width={40}
                  height={40}
                  className="rounded-full border-2 border-black"
                />
              ))}
            </div>
            <p className="text-gray-400">Over 2,000+ matches</p>
          </div>
          <div className="h-8 w-px bg-gray-800 hidden md:block" />
          <div className="flex items-center gap-4">
            <div className="bg-green-500/10 text-green-500 px-4 py-2 rounded-full">
              95% Match Rate
            </div>
            <div className="bg-purple-500/10 text-purple-500 px-4 py-2 rounded-full">
              4.9/5.0 Rating
            </div>
          </div>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {["WIRED", "TechCrunch", "Forbes", "Product Hunt"].map((brand) => (
            <div key={brand} className="text-gray-500 font-semibold">
              {brand}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
