export function AboutSection() {
  return (
    <section id="about" className="py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-10">
          <p className="text-xs tracking-[0.15em] text-gray-500 mb-2">
            就労継続支援A型事業所
          </p>
          <h2 className="inline-flex items-center gap-3 text-4xl font-medium text-gray-600">
            <span className="inline-block h-9 w-1.5 rounded bg-pink-400" />
            あるあるあとは
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-start">
          <div>
            <h3 className="text-4xl leading-tight text-gray-600 place-self-center">
              サポートを通じて
              <br />
              最先端のIT技術の可能性を
            </h3>
          </div>
          <div>
            <p className="text-gray-600 leading-relaxed">
              あるあるあサポートがご提供するのは、就業するための自信や未来を叶えるタスクを通所しながら実践的に学べる空間です。
              障害との向き合い方や仕事の上手な進め方、自分の適正に合った職業の探し方など、最先端の専門的なスタッフが未来を叶えるお手伝いをします。
            </p>
            <div className="mt-8 md:mt-10 flex md:justify-end">
              <a
                href="#contact"
                className="relative inline-flex items-center gap-3 rounded-full px-8 py-3 font-bold text-white backdrop-blur-md border border-white/50 bg-gradient-to-r from-pink-500/90 to-fuchsia-400/75 shadow-2xl shadow-pink-500/60 overflow-hidden transition-colors hover:from-pink-500/100 hover:to-fuchsia-400/85 hover:shadow-pink-600/70"
              >
                <span
                  aria-hidden="true"
                  className="pointer-events-none absolute inset-0 rounded-full bg-gradient-to-br from-white/40 via-white/15 to-transparent opacity-60"
                />
                <span
                  aria-hidden="true"
                  className="pointer-events-none absolute inset-px rounded-full ring-1 ring-white/60"
                />
                事業所紹介
                <span aria-hidden="true">→</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
