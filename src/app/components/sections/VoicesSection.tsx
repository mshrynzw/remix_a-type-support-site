import { gsap } from "gsap";
import { useEffect, useRef } from "react";

import personVoice00 from "../../../assets/images/persons/person_voice_00.webp";
import personVoice01 from "../../../assets/images/persons/person_voice_01.webp";
import personVoice02 from "../../../assets/images/persons/person_voice_02.webp";
import personVoice03 from "../../../assets/images/persons/person_voice_03.webp";

export function VoicesSection() {
  const gridRef = useRef<HTMLDivElement | null>(null);
  useEffect(() => {
    const gridEl = gridRef.current;
    if (!gridEl) return;
    // ":scope" の解釈差で拾えていないケースがあるため、直下要素をカードとして確定させる
    const cards = Array.from(gridEl.children).filter(
      (el): el is HTMLElement => el instanceof HTMLElement,
    );
    if (cards.length === 0) return;
    const prefersReducedMotion = window.matchMedia?.(
      "(prefers-reduced-motion: reduce)",
    ).matches;
    if (prefersReducedMotion) {
      gsap.set(cards, { opacity: 1 });
      return;
    }
    // ちらつき防止
    gsap.set(cards, { opacity: 0 });
    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        if (!entry?.isIntersecting) return;
        observer.disconnect();
        gsap.fromTo(
          cards,
          { opacity: 0 },
          {
            opacity: 1,
            duration: 1,
            ease: "bounce",
            stagger: 0.25,
          },
        );
      },
      { threshold: 0.2 },
    );
    observer.observe(gridEl);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="voices" className="py-16 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-pink-100/35 to-transparent" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
          メンバーさん（ご利用者）の声
        </h2>
        <div ref={gridRef} className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="relative rounded-2xl border border-white/50 bg-pink-100/20 p-8 backdrop-blur-md shadow-xl shadow-pink-300/35 overflow-hidden transition-transform duration-300 hover:-translate-y-1">
            <div className="absolute inset-0 bg-gradient-to-br from-white/30 to-pink-200/35 opacity-95" />
            <div className="absolute -top-10 -left-10 h-32 w-32 bg-pink-300/60 blur-2xl opacity-55" />
            <div className="absolute -bottom-10 -right-10 h-32 w-32 bg-fuchsia-300/45 blur-2xl opacity-35" />
            <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/60 to-transparent opacity-60" />

            <div className="relative z-10">
              <div className="flex items-start gap-6 mb-4">
                <div className="flex-shrink-0">
                  <img
                    src={personVoice00}
                    alt="30代・女性の利用者"
                    width={100}
                    height={100}
                    className="h-[100px] w-[100px] rounded-md object-cover border border-pink-200/60 shadow-sm"
                    decoding="async"
                  />
                </div>
                <div>
                  <p className="text-pink-500 font-bold text-sm mb-1">
                    30代・女性
                  </p>
                  <p className="text-gray-600 text-sm">利用歴：1年</p>
                </div>
              </div>

              <p className="text-gray-700 leading-relaxed">
                「自分のペースで働けるので、無理なく続けられています。
                スタッフの方々も優しく、困ったことがあればすぐに相談できる環境です。
                ここで働き始めて、自信がつきました。」
              </p>
            </div>
          </div>

          <div className="relative rounded-2xl border border-white/50 bg-pink-100/20 p-8 backdrop-blur-md shadow-xl shadow-pink-300/35 overflow-hidden transition-transform duration-300 hover:-translate-y-1">
            <div className="absolute inset-0 bg-gradient-to-br from-white/30 to-pink-200/35 opacity-95" />
            <div className="absolute -top-10 -left-10 h-32 w-32 bg-pink-300/60 blur-2xl opacity-55" />
            <div className="absolute -bottom-10 -right-10 h-32 w-32 bg-fuchsia-300/45 blur-2xl opacity-35" />
            <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/60 to-transparent opacity-60" />

            <div className="relative z-10">
              <div className="flex items-start gap-6 mb-4">
                <div className="flex-shrink-0">
                  <img
                    src={personVoice01}
                    alt="10代・男性の利用者"
                    width={100}
                    height={100}
                    className="h-[100px] w-[100px] rounded-md object-cover border border-pink-200/60 shadow-sm"
                    decoding="async"
                  />
                </div>
                <div>
                  <p className="text-pink-500 font-bold text-sm mb-1">
                    10代・男性
                  </p>
                  <p className="text-gray-600 text-sm">利用歴：6ヶ月</p>
                </div>
              </div>

              <p className="text-gray-700 leading-relaxed">
                「長い間働くことに不安を感じていましたが、
                ここでは無理のない業務内容と丁寧なサポートで安心して働けています。
                仲間もでき、毎日通所するのが楽しみです。」
              </p>
            </div>
          </div>

          <div className="relative rounded-2xl border border-white/50 bg-pink-100/20 p-8 backdrop-blur-md shadow-xl shadow-pink-300/35 overflow-hidden transition-transform duration-300 hover:-translate-y-1">
            <div className="absolute inset-0 bg-gradient-to-br from-white/30 to-pink-200/35 opacity-95" />
            <div className="absolute -top-10 -left-10 h-32 w-32 bg-pink-300/60 blur-2xl opacity-55" />
            <div className="absolute -bottom-10 -right-10 h-32 w-32 bg-fuchsia-300/45 blur-2xl opacity-35" />
            <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/60 to-transparent opacity-60" />

            <div className="relative z-10">
              <div className="flex items-start gap-6 mb-4">
                <div className="flex-shrink-0">
                  <img
                    src={personVoice02}
                    alt="50代・男性の利用者"
                    width={100}
                    height={100}
                    className="h-[100px] w-[100px] rounded-md object-cover border border-pink-200/60 shadow-sm"
                    decoding="async"
                  />
                </div>
                <div>
                  <p className="text-pink-500 font-bold text-sm mb-1">
                    50代・男性
                  </p>
                  <p className="text-gray-600 text-sm">利用歴：3年</p>
                </div>
              </div>

              <p className="text-gray-700 leading-relaxed">
                「年齢的にも不安がありましたが、自分に合った仕事を見つけることができました。
                給与をいただきながら働けるので、生活も安定してきました。
                スタッフの皆さんに感謝しています。」
              </p>
            </div>
          </div>

          <div className="relative rounded-2xl border border-white/50 bg-pink-100/20 p-8 backdrop-blur-md shadow-xl shadow-pink-300/35 overflow-hidden transition-transform duration-300 hover:-translate-y-1">
            <div className="absolute inset-0 bg-gradient-to-br from-white/30 to-pink-200/35 opacity-95" />
            <div className="absolute -top-10 -left-10 h-32 w-32 bg-pink-300/60 blur-2xl opacity-55" />
            <div className="absolute -bottom-10 -right-10 h-32 w-32 bg-fuchsia-300/45 blur-2xl opacity-35" />
            <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/60 to-transparent opacity-60" />

            <div className="relative z-10">
              <div className="flex items-start gap-6 mb-4">
                <div className="flex-shrink-0">
                  <img
                    src={personVoice03}
                    alt="20代・女性・男性の利用者"
                    width={100}
                    height={100}
                    className="h-[100px] w-[100px] rounded-md object-cover border border-pink-200/60 shadow-sm"
                    decoding="async"
                  />
                </div>
                <div>
                  <p className="text-pink-500 font-bold text-sm mb-1">
                    20代・女性・男性
                  </p>
                  <p className="text-gray-600 text-sm">利用歴：2年</p>
                </div>
              </div>

              <p className="text-gray-700 leading-relaxed">
                「最初は緊張していましたが、明るい雰囲気の職場で
                すぐに馴染むことができました。自分のできることから始められるので、
                無理なくステップアップしていけます。」
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
