import { Outlet } from "react-router";
import { Footer } from "./Footer";
import { Header } from "./Header";
import { SnowBackground } from "./backgrounds/SnowBackground";

export function Root() {
  return (
    <div className="min-h-screen flex flex-col relative bg-white">
      <SnowBackground />
      <div className="relative z-10 flex min-h-screen flex-col">
        <Header />
        <main className="flex-1">
          <Outlet />
        </main>
        <Footer />
      </div>
    </div>
  );
}
