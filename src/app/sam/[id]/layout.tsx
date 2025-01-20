import { fetchTodo } from "@/fetchData";
import Link from "next/link";

const Layout = async ({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ id: string }>;
}) => {
  const param = await params;

  const data = await fetchTodo(param.id);
  console.log(data.data);

  // const data = await fetch(`https://dummyjson.com/todos/${param.id}`, {
  //   cache: "force-cache",
  // });
  // console.log(await data.json());
  // console.log("Layout rendered");
  return (
    <div>
      <div>
        <Link href={`/sam/${param.id}/tab1`}>Tab1</Link>
        <Link href={`/sam/${param.id}/tab2`}>Tab2</Link>
      </div>
      {children}
    </div>
  );
};

export default Layout;
