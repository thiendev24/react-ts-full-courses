import { useState } from "react";
import { Button, Form } from "react-bootstrap";

type Blog = {
  title: string;
  body: string;
};

const CreateNewBlog = () => {
  const [blog, setBlog] = useState<Blog>({
    title: "",
    body: "",
  });

  const handleInputValue = (e: React.ChangeEvent<HTMLInputElement>) => {
    setBlog({ ...blog, [e.target.name]: e.target.value });
    console.log(blog);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!blog.title) {
      alert("cant empty title");
      return;
    }

    if (!blog.body) {
      alert("cant empty body");
      return;
    }
    console.log(blog);
  };
  return (
    <>
      <h3>New Blog</h3>
      <Form onSubmit={(e) => handleSubmit(e)} method="post">
        <Form.Group>
          <label htmlFor="title">Title</label>
          <input
            type="text"
            placeholder="Enter blog's title"
            name="title"
            id="title"
            onChange={(e) => handleInputValue(e)}
          />
        </Form.Group>
        <Form.Group>
          <label htmlFor="body">Body</label>
          <input
            type="text"
            placeholder="Enter blog's body"
            name="body"
            id="body"
            onChange={(e) => handleInputValue(e)}
          />
        </Form.Group>
        <Button variant="primary" type="submit" className="mt-2">
          Submit
        </Button>
      </Form>
    </>
  );
};

export default CreateNewBlog;
