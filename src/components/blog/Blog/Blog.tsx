import useFetch from "../../../utils/custom-hook/useFetch";
import BlogPost from "../BlogPost/BlogPost";
import { BlogType } from "../blogType/blogType";
import { UseFetchType } from "../../../utils/type/useFetchType";

const Blog = () => {
  const { res, isLoading, isError } = useFetch(
    "https://jsonplaceholder.typicode.com/posts"
  );
  console.log(res);

  const blogs: BlogType[] = [];

  return (
    <>
      <h3>Blog</h3>
      <div>
        {blogs &&
          blogs.length > 0 &&
          blogs.map((blog) => {
            return <BlogPost key={blog.id} blog={blog} />;
          })}
      </div>
      <div>{isLoading && <div>Loading...</div>}</div>
      <div>{isError && <div>Error...</div>}</div>
    </>
  );
};

export default Blog;
