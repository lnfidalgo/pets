import Features from "../ui/components/features/page";
import HeroPage from "../ui/components/hero/page";
import NavigationBar from "../ui/components/navigation/page";
import CarouselDemo from "../ui/components/price/price-mobile/page";

export default function Home() {
  return (
    <main className="bg-[#080D27] px-5 lg:px-32">
      <NavigationBar />
      <HeroPage />
      <Features />
      <CarouselDemo />
    </main>
  );
}
