import { FaStar } from "react-icons/fa6";
import Image from "next/image";
import { getAvailableSpells } from "@/server/queries";
import { Checkbox } from "@/components/ui/checkbox";

const BlueSpells = async () => {
  // delay the response
  // await new Promise((resolve) => setTimeout(resolve, 10000));

  const spells = await getAvailableSpells();

  return (
    <>
      {spells.map((spell) => (
        <div
          key={spell.spellId}
          className="justify-items grid max-h-fit items-center rounded-lg border border-gray-200 px-4 pb-4 shadow-lg"
        >
          <div className="flex flex-grow">
            <div className="mb-0 flex items-center justify-between px-8 py-3">
              <div className="flex items-center">
                <Image
                  src={spell.icon}
                  alt={spell.name}
                  width={42}
                  height={42}
                  className="pr-3"
                />
                <span className="mt-2 text-center text-sm font-semibold">
                  {spell.name}
                </span>
              </div>
            </div>
          </div>
          <div className="hidden flex-col text-xs sm:block">
            <div className="flex flex-wrap justify-between">
              <div>
                <dd className="pr-4 font-bold">Type: </dd>
                <dt>{spell.type}</dt>
              </div>
              <div>
                <dd className="pr-4 font-bold">Aspect: </dd>
                <dt className="pb-4">{spell.aspect}</dt>
              </div>
            </div>
            <div className="flex flex-wrap justify-between">
              <div>
                <dd className="pr-4 font-bold">Patch: </dd>
                <dt className="pb-4">{spell.patch}</dt>
              </div>
              <div>
                <dd className="pr-4 font-bold">Rank: </dd>
                <dt>{addStar(spell.rank)}</dt>
              </div>
            </div>
          </div>
          <div className="mb-2 flex items-center justify-center">
            <Checkbox className="mr-2" />
            <label>Acquired Spell</label>
          </div>
        </div>
      ))}
    </>
  );
};

const addStar = (n: number) => {
  return Array(n)
    .fill(0)
    .map((_, i) => <FaStar key={i} className="inline-block text-yellow-500" />);
};

const BlueSpellBook = () => {
  return (
    <>
      <BlueSpells />
    </>
  );
};

export default BlueSpellBook;
