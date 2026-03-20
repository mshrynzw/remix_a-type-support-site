import keyVisual from "../../../assets/images/key-visual.webp?w=840&format=webp&as=img";

export function HeroSection() {
  return (
    <section className="py-4">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative rounded-2xl border border-white/50 bg-white/10 p-6 md:p-8 backdrop-blur-md shadow-xl shadow-pink-300/30 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-pink-200/35 to-purple-100/20" />
          <div className="absolute -top-16 -left-16 h-48 w-48 bg-pink-300/35 blur-3xl opacity-50" />
          <div className="absolute -bottom-16 -right-16 h-48 w-48 bg-fuchsia-300/25 blur-3xl opacity-35" />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div className="relative z-10 flex justify-center md:justify-start">
              <img
                src={keyVisual.src}
                width={keyVisual.w}
                height={keyVisual.h}
                alt="キービジュアル"
                className="w-full max-w-[420px] rounded-sm object-cover"
                decoding="async"
              />
            </div>
            <div className="relative z-10 text-center md:text-left">
              <h1 className="text-xl font-medium tracking-wide text-gray-700">
                寄り添いと共感、思いやりの心を大切に
              </h1>
              <p className="mt-4 text-xs tracking-[0.2em] text-gray-500">
                ALALA SUPPORT
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

