import { useState } from "react";
import { Link } from "react-router";
import { MenuIcon } from "lucide-react";
import logo from "../../assets/images/logo.webp?h=40&format=webp&as=img";
import { Sheet, SheetClose, SheetContent, SheetTrigger } from "./ui/sheet";

const navItems = [
  { href: "#about", label: "事業所について" },
  { href: "#target", label: "ご利用対象者" },
  { href: "#schedule", label: "一日のスケジュール" },
  { href: "#voices", label: "利用者の声" },
  { href: "#contact", label: "お問い合わせ" },
];

export function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link to="/">
            <img
              src={logo.src}
              width={logo.w}
              height={logo.h}
              alt="ALALA SUPPORT"
              className="h-10 w-auto"
              decoding="async"
            />
          </Link>
          <nav className="hidden md:flex gap-8">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="text-gray-700 hover:text-pink-500 transition-colors"
              >
                {item.label}
              </a>
            ))}
          </nav>

          <Sheet open={menuOpen} onOpenChange={setMenuOpen}>
            <SheetTrigger asChild>
              <button
                type="button"
                className="md:hidden inline-flex items-center justify-center rounded-md p-2 text-gray-700 hover:bg-pink-50 hover:text-pink-500 transition-colors"
                aria-label="メニューを開く"
              >
                <MenuIcon className="size-6" />
              </button>
            </SheetTrigger>
            <SheetContent side="right" className="w-72 sm:w-80">
              <nav className="mt-10 flex flex-col gap-4">
                {navItems.map((item) => (
                  <SheetClose asChild key={item.href}>
                    <a
                      href={item.href}
                      className="rounded-md px-3 py-2 text-base text-gray-700 hover:bg-pink-50 hover:text-pink-500 transition-colors"
                    >
                      {item.label}
                    </a>
                  </SheetClose>
                ))}
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
