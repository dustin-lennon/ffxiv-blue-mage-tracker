import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";

const getData = async () => {
  const result = await fetch("https://jsonplaceholder.typicode.com/todos/");

  // delay the response
  await new Promise((resolve) => setTimeout(resolve, 10000));

  return result.json();
};

export const Content = async () => {
  // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment, @typescript-eslint/no-unused-vars
  const data = await getData();

  return (
    <div className="flex w-screen grow flex-col overflow-y-auto px-4 sm:w-full sm:p-6">
      <div className="grid grid-cols-4 gap-8">
        {"abcdefghijklmnopqrstuvwxyz".split("").map((_, i) => (
          <Card key={i} className="flex flex-col justify-between">
            <CardHeader className="flex-row items-center gap-4">
              Card Header
            </CardHeader>
            <CardContent>Card Content</CardContent>
            <CardFooter>Card Footer</CardFooter>
          </Card>
        ))}
      </div>
    </div>
  );
};
