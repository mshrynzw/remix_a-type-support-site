import { AboutSection } from "./sections/AboutSection";
import { ContactSection } from "./sections/ContactSection";
import { HeroSection } from "./sections/HeroSection";
import { ScheduleSection } from "./sections/ScheduleSection";
import { TargetSection } from "./sections/TargetSection";
import { VoicesSection } from "./sections/VoicesSection";
import { WorkspaceSection } from "./sections/WorkspaceSection";

export function HomePage() {
  return (
    <div className="relative">
      <HeroSection />
      <AboutSection />
      <WorkspaceSection />
      <ScheduleSection />
      <TargetSection />
      <VoicesSection />
      <ContactSection />
    </div>
  );
}
