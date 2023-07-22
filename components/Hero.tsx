import Header from "./Header";
import HeroSection from "./HeroSection";

export default function Hero() {
  return (
    <div className="bg-white dark:bg-slate-900 dark:text-white">
      <Header />
      <HeroSection />
    </div>
  );
}
