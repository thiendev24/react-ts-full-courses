import { v4 as uuidv4 } from "uuid";

export const todos = [
    { id: uuidv4(), title: "read book", time: new Date().toISOString() },
    { id: uuidv4(), title: "sleep", time: new Date().toISOString() },
    { id: uuidv4(), title: "do exercise", time: new Date().toISOString() },
  ];