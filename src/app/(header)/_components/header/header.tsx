"use client";

import * as React from "react";
import { Logo } from "../logo/logo";
import { AppVersion } from "../appVersion/appVersion";
import { SearchBar } from "../searchbar/searchbar";
import { ThemeSwitch } from "../themeswitch/themeSwitch";
import { UserDropdown } from "../userDropdown/userDropdown";
import { GitHubStars } from "../gitHubStars/gitHubStars";

export const Header = () => {
  return (
    <header className="mx-auto hidden h-28 w-full max-w-7xl items-center justify-between gap-x-6 p-6 sm:flex lg:px-8">
      <div className="flex items-center gap-x-4">
        <Logo />
        <AppVersion />
        <GitHubStars />
      </div>
      <div className="flex items-center gap-4">
        <SearchBar />
        <ThemeSwitch />
        <UserDropdown />
      </div>
    </header>
  );
};
