import { BlogType } from "../blogType/blogType";

type BlogPostProps = {
  blog: BlogType;
};

const BlogPost = ({ blog }: BlogPostProps) => {
  return (
    <>
      <h3>Post</h3>
      <div>
        <p>{blog.id}</p>
        <p>{blog.title}</p>
        <p>{blog.body}</p>
      </div>
    </>
  );
};

export default BlogPost;
