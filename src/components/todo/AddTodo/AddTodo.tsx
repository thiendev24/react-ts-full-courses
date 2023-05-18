import { useState } from "react";
import { Button, Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import { todos } from "../../../database/todoList";
import { v4 as uuidv4 } from "uuid";

const AddTodo = () => {
  const [todo, setTodo] = useState<string>("");

  const onChangeInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTodo(e.target.value);
    console.log(todo);
  };

  const handleCreateTodo = () => {
    if (todo) {
      const newTodo = {
        id: uuidv4(),
        title: todo,
        time: new Date().toISOString(),
      };
      todos.push(newTodo);
    } else {
      alert(`Can't empty toto field!`);
    }
  };
  return (
    <Container fluid>
      <h3 className="text-center text-danger mt-2">Add Todo</h3>
      <div>
        <form>
          <div className="mb-3">
            <label htmlFor="title" className="form-label">
              Title
            </label>
            <input
              type="text"
              className="form-control"
              id="title"
              placeholder="Enter new todo"
              onChange={(e) => onChangeInput(e)}
            />
          </div>
          <div className="mt-3 float-end">
            <Link to="/todos">
              <Button
                type="submit"
                variant="primary"
                className="me-2"
                onClick={() => handleCreateTodo()}
              >
                Create
              </Button>
            </Link>
            <Link to="/todos">
              <Button type="button" variant="outline-secondary">
                Cancel
              </Button>
            </Link>
          </div>
        </form>
      </div>
    </Container>
  );
};

export default AddTodo;
