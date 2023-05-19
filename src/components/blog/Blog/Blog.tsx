import { Button, Modal } from "react-bootstrap";
import useFetch from "../../../utils/custom-hook/useFetch";
import BlogPost from "../BlogPost/BlogPost";
import { BlogType } from "../blogType/blogType";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBackward, faPlus } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import CreateNewBlog from "../CreateNewBlog/CreateNewBlog";

const Blog = () => {
  const [show, setShow] = useState<boolean>(false);
  const { res, isLoading, isError } = useFetch(
    "https://jsonplaceholder.typicode.com/posts"
  );
  console.log(res);

  const blogs: BlogType[] = [];

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <h3>Blog</h3>
      <div>
        <Link to="/blog/create-new-blog">
          <Button>
            <span>
              <FontAwesomeIcon icon={faPlus}></FontAwesomeIcon>
            </span>
            Create new Blog
          </Button>
        </Link>

        <Button variant="secondary" onClick={() => handleShow()}>
          <span>
            <FontAwesomeIcon icon={faBackward} />
          </span>{" "}
          Show Modal
        </Button>
      </div>
      <div>
        {blogs &&
          blogs.length > 0 &&
          blogs.map((blog) => {
            return <BlogPost key={blog.id} blog={blog} />;
          })}
      </div>
      <div>{isLoading && <div>Loading...</div>}</div>
      <div>{isError && <div>Error...</div>}</div>

      <Modal show={show} onHide={handleClose} backdrop="static">
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <CreateNewBlog />
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default Blog;
