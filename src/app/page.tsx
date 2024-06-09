import { Header } from "./_components/header";
import { MobileHeader } from "./_components/mobileHeader";
import { NavAndContent } from "./_components/navAndContent";

export default async function Home() {
  return (
    <div className="flex h-full w-full flex-col">
      <Header />
      <MobileHeader />
      <div className="bg-border h-px w-screen"></div>
      <NavAndContent />
    </div>
  );
}
