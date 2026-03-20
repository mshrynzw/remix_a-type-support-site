import keyVisual from "../../../assets/images/key-visual.webp?w=840&format=webp&as=img";

export function HeroSection() {
  return (
    <section className="py-4">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="rounded-2xl bg-gradient-to-r from-pink-200 to-purple-100 p-6 md:p-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div className="flex justify-center md:justify-start">
              <img
                src={keyVisual.src}
                width={keyVisual.w}
                height={keyVisual.h}
                alt="キービジュアル"
                className="w-full max-w-[420px] rounded-sm object-cover"
                decoding="async"
              />
            </div>
            <div className="text-center md:text-left">
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

