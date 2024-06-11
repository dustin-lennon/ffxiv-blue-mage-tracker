import Image from "next/image";

export const Logo = () => {
  return (
    <>
      <Image
        src="/images/ffxiv_blue_mage_tracker_logo_v2.webp"
        width={96}
        height={96}
        alt="Logo"
        data-loaded="false"
        onLoad={(event) => {
          event.currentTarget.setAttribute("data-loaded", "true");
        }}
        className="data-[loaded=false]:animate-pulse data-[loaded=false]:bg-gray-100/10"
      />
      Blue Mage Spell Tracker
    </>
  );
};
