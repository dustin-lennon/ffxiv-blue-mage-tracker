"use client";

import * as React from "react";

import { UserDropdown } from "./userDropdown";
import { ThemeSwitch } from "./themeSwitch";
import { SearchBar } from "./searchbar";
import { Logo } from "./logo";

export function Header() {
  return (
    <div className="mx-auto hidden h-24 w-full max-w-7xl items-center justify-between gap-x-6 p-6 sm:flex lg:px-8">
      <div className="flex items-center gap-x-4">
        <Logo />
      </div>
      <div className="flex items-center gap-4">
        <SearchBar />
        <ThemeSwitch />
        <UserDropdown />
      </div>
    </div>
  );
}
