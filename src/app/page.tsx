import { Header } from "./(header)/_components/header/header";
import { MobileHeader } from "./(header)/_components/mobileHeader/mobileHeader";
import { NavAndContent } from "./(main)/_components/navAndContent";

export default async function Home() {
  return (
    <div className="flex h-full w-full flex-col">
      <Header />
      <MobileHeader />
      <div className="h-px w-screen bg-border"></div>
      <NavAndContent />
    </div>
  );
}
