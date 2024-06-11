import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";

interface Todo {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
}

const getData = async (): Promise<Todo[]> => {
  const result = await fetch("https://jsonplaceholder.typicode.com/todos/");

  // delay the response
  await new Promise((resolve) => setTimeout(resolve, 10000));

  return result.json() as Promise<Todo[]>;
};

const Home = async () => {
  const data = await getData();

  return (
    <div className="flex w-screen grow flex-col overflow-y-auto px-4 sm:w-full sm:p-6">
      <div className="grid grid-cols-4 gap-8">
        {data.map((todo) => (
          <Card key={todo.id} className="flex flex-col justify-between">
            <CardHeader className="flex-row items-center gap-4">
              {todo.title}
            </CardHeader>
            <CardContent>{todo.title}</CardContent>
            <CardFooter>{todo.completed.toString()}</CardFooter>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default Home;
