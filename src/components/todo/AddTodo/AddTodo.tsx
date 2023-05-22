import { useRef } from "react";
import { Button, Container, Form } from "react-bootstrap";
import { Link } from "react-router-dom";
import { todos } from "../../../database/todoList";
import { v4 as uuidv4 } from "uuid";

const AddTodo = () => {
  const todoRef = useRef<HTMLInputElement | null>(null);

  const handleCreateTodo = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(todoRef);

    if (todoRef.current?.value) {
      const newTodo = {
        id: uuidv4(),
        title: todoRef.current?.value,
        time: new Date().toISOString(),
      };
      console.log(newTodo);
    } else {
      alert(`Can't empty toto field!`);
    }
  };

  return (
    <Container fluid>
      <h3 className="text-center text-danger mt-2">Add Todo</h3>
      <div>
        <Form onSubmit={(e) => handleCreateTodo(e)}>
          <Form.Group controlId="title" className="mb-3">
            <Form.Label>Title</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter new todo"
              ref={todoRef}
            />
          </Form.Group>
          <div className="mt-3 float-end">
            {/* <Link to="/todos"> */}
            <Button type="submit" variant="primary" className="me-2">
              Create
            </Button>
            {/* </Link> */}
            <Link to="/todos">
              <Button type="button" variant="outline-secondary">
                Cancel
              </Button>
            </Link>
          </div>
        </Form>
      </div>
    </Container>
  );
};

export default AddTodo;
