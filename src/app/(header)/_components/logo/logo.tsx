import Image from "next/image";

export function Logo() {
  return (
    <>
      <Image
        src="/images/ffxiv_blue_mage_tracker_logo_v2.webp"
        width={96}
        height={96}
        alt="Logo"
        className="h-auto w-auto"
      />
      Blue Mage Spell Tracker
    </>
  );
}
