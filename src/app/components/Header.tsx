import { Link } from "react-router";

export function Header() {
  return (
    <header className="bg-white border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="text-2xl font-bold text-pink-500">
            A型事業所
          </Link>
          <nav className="flex gap-8">
            <a href="#about" className="text-gray-700 hover:text-pink-500 transition-colors">
              事業所について
            </a>
            <a href="#target" className="text-gray-700 hover:text-pink-500 transition-colors">
              ご利用対象者
            </a>
            <a href="#schedule" className="text-gray-700 hover:text-pink-500 transition-colors">
              一日のスケジュール
            </a>
            <a href="#voices" className="text-gray-700 hover:text-pink-500 transition-colors">
              利用者の声
            </a>
            <a href="#contact" className="text-gray-700 hover:text-pink-500 transition-colors">
              お問い合わせ
            </a>
          </nav>
        </div>
      </div>
    </header>
  );
}
