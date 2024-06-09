export function Navigation() {
  return (
    <div className="flex flex-row justify-between gap-x-4 gap-y-2 p-4 text-center sm:flex-col sm:p-6 sm:text-left">
      <div className="flex w-screen shrink-0 flex-col sm:w-[215px] ">
        <a
          className="focus-visible:ring-ring hover:bg-accent hover:text-accent-foreground bg-muted text-foreground/80 flex h-max flex-col items-center justify-center gap-2 rounded-md px-2 py-1.5 text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 disabled:pointer-events-none disabled:opacity-50 sm:h-10 sm:flex-row sm:justify-start sm:px-4 sm:text-sm"
          href="#"
        >
          Spellbook
        </a>
        <a
          className="focus-visible:ring-ring hover:bg-accent hover:text-accent-foreground text-muted-foreground flex h-max flex-col items-center justify-center gap-2 rounded-md px-2 py-1.5 text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 disabled:pointer-events-none disabled:opacity-50 sm:h-10 sm:flex-row sm:justify-start sm:px-4 sm:text-sm"
          href="#"
        >
          Masked Carnivale
        </a>
        <a
          className="focus-visible:ring-ring hover:bg-accent hover:text-accent-foreground text-muted-foreground flex h-max flex-col items-center justify-center gap-2 rounded-md px-2 py-1.5 text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 disabled:pointer-events-none disabled:opacity-50 sm:h-10 sm:flex-row sm:justify-start sm:px-4 sm:text-sm"
          href="#"
        >
          Suggested Gear
        </a>
      </div>
    </div>
  );
}
