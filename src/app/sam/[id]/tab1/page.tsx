import { fetchTodo } from "@/fetchData";
import React from "react";

const Tab1 = async ({ params }: { params: Promise<{ id: string }> }) => {
  const param = await params;
  // console.log(param);
  // const data = await fetch(`https://dummyjson.com/todos/${param.id}`, {
  //   cache: "force-cache",
  // });
  // console.log(await data.json());

  const data = await fetchTodo(param.id);
  console.log(data.data);

  return <div>Tab1</div>;
};

export default Tab1;
