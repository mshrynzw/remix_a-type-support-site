export function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-lg font-bold mb-4">A型事業所</h3>
            <p className="text-gray-300 text-sm">
              就労継続支援A型事業所として、<br />
              皆様の就労をサポートいたします。
            </p>
          </div>
          <div>
            <h3 className="text-lg font-bold mb-4">お問い合わせ</h3>
            <p className="text-gray-300 text-sm">
              電話: 000-0000-0000<br />
              受付時間: 平日 9:00〜17:00
            </p>
          </div>
          <div>
            <h3 className="text-lg font-bold mb-4">アクセス</h3>
            <p className="text-gray-300 text-sm">
              〒000-0000<br />
              東京都○○区○○ 1-2-3
            </p>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-gray-700 text-center text-gray-400 text-sm">
          © 2026 A型事業所. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
