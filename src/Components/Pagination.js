import { useEffect, useState } from "react";
import axios from "axios";

export default function Pagination() {
  const [todos, setTodos] = useState([]);
  const [numberOfPages, setNumberOfPages] = useState(0);
  const [page, setPage] = useState(0);
  const numberOfTotalPages = Math.ceil(todos.length / 10);
  const pages = [...Array(numberOfTotalPages + 1).keys()].slice(1);
  console.log("pages", pages);
  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/todos")
      .then((res) => setTodos(res.data));
  }, []);

  return (
    <>
      <h1>ToDo List</h1>
      {todos.slice(page, page + 10).map((todo, i) => (
        <p>{todo.title}</p>
      ))}
      <button onClick={() => setPage(page - 10)}> Previous</button>

      <button onClick={() => setPage(page + 10)}> Next</button>
    </>
  );
}
