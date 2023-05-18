import Todo from "../Todo/Todo";
import { useEffect, useState } from "react";
import { todos } from "../../../database/todoList";
import { TodoType } from "../type/todoType";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";

const TodoList = () => {
  const [todoList, setTodoList] = useState<TodoType[]>(todos);

  const handleDeleteTodo = (id: string) => {
    const currentTodos = todoList.filter((todo) => todo.id !== id);
    setTodoList(currentTodos);
  };

  return (
    <>
      <h3 className="text-center text-danger">Todo List</h3>
      <div className="d-flex justify-content-end">
        <Link to="/todos/add-todo">
          <Button variant="primary">Add Todo</Button>
        </Link>
      </div>
      {todoList.length > 0
        ? todoList.map((todo) => {
            return (
              <Todo
                key={todo.id}
                id={todo.id}
                title={todo.title}
                time={todo.time}
                handleDeleteTodo={handleDeleteTodo}
              />
            );
          })
        : "Nothing to show"}
    </>
  );
};

export default TodoList;
