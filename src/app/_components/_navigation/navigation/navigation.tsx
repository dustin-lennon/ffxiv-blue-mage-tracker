"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const navLinks = [
  {
    name: "Spellbook",
    href: "/",
  },
  {
    name: "Masked Carnivale",
    href: "/maskedCarnivale",
  },
  {
    name: "Suggested Gear",
    href: "/suggestedGear",
  },
];

export const Navigation = () => {
  const currentPath = usePathname();

  return (
    <div className="flex flex-row justify-between gap-x-4 gap-y-2 p-4 text-center sm:flex-col sm:p-6 sm:text-left">
      <div className="flex w-screen shrink-0 flex-col sm:w-[215px]">
        {navLinks.map((link) => (
          <Link
            key={link.name}
            className={`flex h-max flex-col items-center justify-center gap-2 rounded-md px-2 py-1.5 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 sm:h-10 sm:flex-row sm:justify-start sm:px-4 sm:text-sm ${
              currentPath === link.href
                ? "bg-muted text-foreground/80"
                : "text-muted-foreground"
            }`}
            href={link.href}
          >
            {link.name}
          </Link>
        ))}
      </div>
    </div>
  );
};
