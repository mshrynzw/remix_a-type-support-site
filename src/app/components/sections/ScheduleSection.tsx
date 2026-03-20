import { gsap } from "gsap";
import { useEffect, useRef } from "react";
import {
  EndIcon,
  LunchIcon,
  ReceptionIcon,
  WorkIcon,
} from "../illustrations/ScheduleIcons";

export function ScheduleSection() {
  const cardsWrapRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const wrapEl = cardsWrapRef.current;
    if (!wrapEl) return;

    const prefersReducedMotion = window.matchMedia?.(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    const cards = Array.from(
      wrapEl.querySelectorAll<HTMLElement>(":scope > div"),
    );
    if (cards.length === 0) return;

    if (prefersReducedMotion) {
      gsap.set(cards, { opacity: 1, x: 0 });
      return;
    }

    // スクロール到達までは一旦非表示（ちらつき防止）
    gsap.set(cards, { opacity: 0, x: `calc(calc(1/2 * 100%) * -1)` });

    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        if (!entry?.isIntersecting) return;

        observer.disconnect();

        gsap.to(cards, {
          opacity: 1,
          x: 0,
          duration: 0.5,
          ease: "power4.in",
          stagger: 0.25,
        });
      },
      { threshold: 0.2 },
    );

    observer.observe(wrapEl);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="schedule" className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
          一日のスケジュール
        </h2>
        <div className="max-w-4xl mx-auto">
          <div className="space-y-6" ref={cardsWrapRef}>
            <div className="relative opacity-0 -translate-x-1/2 rounded-2xl border border-white/50 bg-white/10 p-6 backdrop-blur-md shadow-xl shadow-pink-300/30 overflow-hidden transition-transform duration-300 hover:-translate-y-1">
              <div className="absolute inset-0 bg-gradient-to-br from-white/35 to-pink-200/15 opacity-95" />
              <div className="absolute -top-10 -left-10 h-32 w-32 bg-pink-300/45 blur-2xl opacity-40" />
              <div className="absolute -bottom-10 -right-10 h-32 w-32 bg-fuchsia-300/30 blur-2xl opacity-30" />

              <div className="relative z-10 flex items-start gap-6">
                <div className="flex-shrink-0">
                  <ReceptionIcon />
                </div>
                <div className="flex-1">
                  <div className="inline-block bg-pink-500 text-white px-4 py-1 rounded-full text-sm font-bold mb-2">
                    10:00
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    受付・準備開始
                  </h3>
                  <p className="text-gray-600">
                    朝はゆっくり出勤できます。体調など自由に相談できます。
                  </p>
                </div>
              </div>
            </div>

            <div className="relative opacity-0 -translate-x-16 rounded-2xl border border-white/50 bg-white/10 p-6 backdrop-blur-md shadow-xl shadow-pink-300/30 overflow-hidden transition-transform duration-300 hover:-translate-y-1">
              <div className="absolute inset-0 bg-gradient-to-br from-white/35 to-pink-200/15 opacity-95" />
              <div className="absolute -top-10 -left-10 h-32 w-32 bg-pink-300/45 blur-2xl opacity-40" />
              <div className="absolute -bottom-10 -right-10 h-32 w-32 bg-fuchsia-300/30 blur-2xl opacity-30" />

              <div className="relative z-10 flex items-start gap-6">
                <div className="flex-shrink-0">
                  <LunchIcon />
                </div>
                <div className="flex-1">
                  <div className="inline-block bg-pink-500 text-white px-4 py-1 rounded-full text-sm font-bold mb-2">
                    12:00前後
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    お昼休憩
                  </h3>
                  <p className="text-gray-600">
                    ゆっくりお昼を食べて休憩を取ります。仲間と楽しくおしゃべりも！
                  </p>
                </div>
              </div>
            </div>

            <div className="relative opacity-0 -translate-x-16 rounded-2xl border border-white/50 bg-white/10 p-6 backdrop-blur-md shadow-xl shadow-pink-300/30 overflow-hidden transition-transform duration-300 hover:-translate-y-1">
              <div className="absolute inset-0 bg-gradient-to-br from-white/35 to-pink-200/15 opacity-95" />
              <div className="absolute -top-10 -left-10 h-32 w-32 bg-pink-300/45 blur-2xl opacity-40" />
              <div className="absolute -bottom-10 -right-10 h-32 w-32 bg-fuchsia-300/30 blur-2xl opacity-30" />

              <div className="relative z-10 flex items-start gap-6">
                <div className="flex-shrink-0">
                  <WorkIcon />
                </div>
                <div className="flex-1">
                  <div className="inline-block bg-pink-500 text-white px-4 py-1 rounded-full text-sm font-bold mb-2">
                    14:00頃
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    業務再開
                  </h3>
                  <p className="text-gray-600">
                    午後も自分のペースで業務を続けます。無理なく働けます。
                  </p>
                </div>
              </div>
            </div>

            <div className="relative opacity-0 -translate-x-16 rounded-2xl border border-white/50 bg-white/10 p-6 backdrop-blur-md shadow-xl shadow-pink-300/30 overflow-hidden transition-transform duration-300 hover:-translate-y-1">
              <div className="absolute inset-0 bg-gradient-to-br from-white/35 to-pink-200/15 opacity-95" />
              <div className="absolute -top-10 -left-10 h-32 w-32 bg-pink-300/45 blur-2xl opacity-40" />
              <div className="absolute -bottom-10 -right-10 h-32 w-32 bg-fuchsia-300/30 blur-2xl opacity-30" />

              <div className="relative z-10 flex items-start gap-6">
                <div className="flex-shrink-0">
                  <EndIcon />
                </div>
                <div className="flex-1">
                  <div className="inline-block bg-pink-500 text-white px-4 py-1 rounded-full text-sm font-bold mb-2">
                    16:00頃
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    就労終了
                  </h3>
                  <p className="text-gray-600">
                    仕事を終え、また明日元気に会いましょう！
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
