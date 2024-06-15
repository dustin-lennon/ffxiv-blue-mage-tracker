import BlueSpellBook from "@/components/BlueSpells";
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";

const Home = () => {
  return (
    <div className="flex w-screen grow flex-col overflow-y-auto px-4 sm:w-full sm:p-6">
      <h1 className="text-center text-3xl font-bold">Blue Mage Spellbook</h1>
      <div className="my-4 grid grid-cols-2 gap-4 md:grid-cols-4">
        <BlueSpellBook />
      </div>
      {/* HOW TO SERVER SIDE RENDER THIS? */}
      <Pagination>
        <PaginationContent>
          <PaginationItem>
            <PaginationPrevious href="#" />
          </PaginationItem>
          <PaginationItem>
            <PaginationLink href="#">1</PaginationLink>
          </PaginationItem>
          <PaginationItem>
            <PaginationEllipsis />
          </PaginationItem>
          <PaginationItem>
            <PaginationNext href="#" />
          </PaginationItem>
        </PaginationContent>
      </Pagination>
    </div>
  );
};

export default Home;
