import { Content } from "../content/content";
import { Navigation } from "../navigation/navigation";

export const NavAndContent = () => {
  return (
    <div className="flex sm:h-[calc(100vh-6rem-1px)]">
      <div className="mx-auto flex min-w-0 max-w-7xl grow flex-col sm:flex-row sm:py-6">
        <Navigation />
        <Content />
      </div>
    </div>
  );
};