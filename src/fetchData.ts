/* eslint-disable prefer-const */
import axios from "axios";

import { cache } from "react";

export let fetchTodo = cache(async (id: string) => {
    const data = await axios.get(`https://dummyjson.com/todos/${id}`);
    console.log("fetchTodo");
    return data;
});