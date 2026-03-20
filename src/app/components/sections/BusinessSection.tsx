import multiCreativeDesigner from "../../../assets/images/multi-creative-designer.webp?w=640&h=360&fit=cover&format=webp&as=img";
import pcOperator from "../../../assets/images/pc-operator.webp?w=640&h=360&fit=cover&format=webp&as=img";
import webDesignEngineer from "../../../assets/images/web-design-engineer.webp?w=640&h=360&fit=cover&format=webp&as=img";
import webProgrammer from "../../../assets/images/web-programmer.webp?w=640&h=360&fit=cover&format=webp&as=img";
import websiteDevelopmentOperationSupport from "../../../assets/images/website-development-operation-support.webp?w=640&h=360&fit=cover&format=webp&as=img";

const businessCards = [
  {
    title: "WEBプログラマー",
    description:
      "プログラミング言語を使用して、個人に合った開発案件をおこなっていただきます。",
    image: webProgrammer,
  },
  {
    title: "WEBデザインエンジニア",
    description: "HTMLやCSSを用いて、WEB制作業務をおこなっていただきます。",
    image: webDesignEngineer,
  },
  {
    title: "PCオペレーター",
    description:
      "文章の作成、帳票や図面の作成など、簡単におこなえるデータ入力をおこなっていただきます。",
    image: pcOperator,
  },
  {
    title: "WEB制作・運用サポート",
    description:
      "WEBサイトやスマホアプリ、業務用システムの保守・改善をおこなっていただきます。",
    image: websiteDevelopmentOperationSupport,
  },
  {
    title: "マルチクリエイティブデザイナー",
    description:
      "紙・WEB・動画など、様々な媒体を使ってデザインをおこなっていただきます。",
    image: multiCreativeDesigner,
  },
];

export function BusinessSection() {
  return (
    <section className="py-16 bg-pink-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <p className="text-xs tracking-[0.15em] text-gray-500 mb-2">
            業務内容
          </p>
          <h2 className="text-3xl font-bold text-gray-900">Our Business</h2>
          <p className="mt-4 text-sm text-gray-600 leading-relaxed max-w-2xl mx-auto">
            あるあるあとは、あなたの得意を活かした仕事を通じて自信を育てる場所です。ITに興味がある方も、
            まずはできることから始められます。
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-6">
          {businessCards.map((card) => (
            <article
              key={card.title}
              className="relative bg-pink-100/20 rounded-2xl border border-white/50 shadow-xl shadow-pink-300/30 overflow-hidden basis-full sm:basis-[calc(50%-1.5rem)] lg:basis-[calc(33.333%-1rem)] lg:max-w-[360px] flex-shrink-0 backdrop-blur-md transition-transform duration-300 hover:-translate-y-1"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-white/30 to-pink-200/25 opacity-95" />
              <div className="absolute -top-10 -left-10 h-32 w-32 bg-pink-300/60 blur-2xl opacity-45" />
              <div className="absolute -bottom-10 -right-10 h-32 w-32 bg-fuchsia-300/45 blur-2xl opacity-35" />

              <div className="relative z-10">
                <img
                  src={card.image.src}
                  alt={card.title}
                  width={card.image.w}
                  height={card.image.h}
                  className="h-44 w-full object-cover"
                  loading="lazy"
                />
                {/* <div className="absolute top-3 right-3 rounded-full bg-white/90 border border-gray-200 p-1.5">
                  <MessageCircle size={18} className="text-gray-600" />
                </div> */}
              </div>

              <div className="relative z-10 p-5">
                <h3 className="text-sm font-bold text-pink-600 mb-2">
                  {card.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {card.description}
                </p>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-10 flex justify-center">
          <a
            href="#schedule"
            className="relative inline-flex items-center gap-3 rounded-full px-10 py-3 font-bold text-white backdrop-blur-md border border-white/50 bg-gradient-to-r from-pink-500/90 to-fuchsia-400/75 shadow-2xl shadow-pink-500/60 overflow-hidden transition-colors hover:from-pink-500/100 hover:to-fuchsia-400/85 hover:shadow-pink-600/70"
          >
            <span
              aria-hidden="true"
              className="pointer-events-none absolute inset-0 rounded-full bg-gradient-to-br from-white/40 via-white/15 to-transparent opacity-60"
            />
            <span
              aria-hidden="true"
              className="pointer-events-none absolute inset-px rounded-full ring-1 ring-white/60"
            />
            業務の詳細へ
            <span aria-hidden="true">→</span>
          </a>
        </div>
      </div>
    </section>
  );
}
