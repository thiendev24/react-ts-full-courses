import { Button, Modal } from "react-bootstrap";
import BlogPost from "../BlogPost/BlogPost";
import { BlogType } from "../blogType/blogType";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBackward, faPlus } from "@fortawesome/free-solid-svg-icons";
import { useEffect, useState } from "react";
import CreateNewBlog from "../CreateNewBlog/CreateNewBlog";
import BlogServices from "../../../utils/APIs/blog_API/blogServices";

type ResType = {
  data: BlogType[];
};

const Blog = () => {
  const [show, setShow] = useState<boolean>(false);
  const [blogs, setBlogs] = useState<BlogType[]>([]);

  useEffect(() => {
    async function getBlogs() {
      try {
        const res: ResType = await BlogServices.getBlogs();
        const data = res && res.data ? res.data : [];
        setBlogs(data);
      } catch (error) {
        if (error instanceof Error) {
          console.log(error.message);
        } else {
          console.log(error);
        }
      }
    }
    getBlogs();
  }, []);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <h3>Blog</h3>
      <div className="d-flex justify-content-end">
        <Link to="/blog/create-new-blog">
          <Button>
            <span>
              <FontAwesomeIcon icon={faPlus}></FontAwesomeIcon>
            </span>
            Create new Blog
          </Button>
        </Link>

        <Button
          variant="secondary"
          onClick={() => handleShow()}
          className="ms-2"
        >
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
