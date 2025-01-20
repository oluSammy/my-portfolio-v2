import { fetchTodo } from "@/fetchData";
import React from "react";

const Tab2 = async ({ params }: { params: Promise<{ id: string }> }) => {
  const param = await params;
  // const data = await fetch(`https://dummyjson.com/todos/${param.id}`, {
  //   cache: "force-cache",
  // });
  // console.log(await data.json());

  console.log("rendering from server");

  const data = await fetchTodo(param.id);
  console.log(data.data);
  return <div>Tab2</div>;
};

export default Tab2;
