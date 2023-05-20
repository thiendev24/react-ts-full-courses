import axios from "axios";
import { BLOG_API } from "./blogApi";

class BlogServices  {
    static getBlogs() {
        return axios.get(BLOG_API);
    }
}

export default BlogServices;