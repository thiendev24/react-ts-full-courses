import { Routes, Route, Navigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.css";
import "./app.scss";
import Nav from "./components/Nav/Nav";
import TodoList from "./components/todo/TodoList/TodoList";
import AddTodo from "./components/todo/AddTodo/AddTodo";
import HomePage from "./components/HomePage/HomePage";
import UserTable from "./components/user/UserTable/UserTable";
import Countdown from "./components/countdown/Countdown/Countdown";
import Blog from "./components/blog/Blog/Blog";
import BlogDetail from "./components/blog/BlogDetail/BlogDetail";
import CreateNewBlog from "./components/blog/CreateNewBlog/CreateNewBlog";

function App() {
  return (
    <>
      <Nav />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="todos" element={<TodoList />} />
        <Route path="todos/add-todo" element={<AddTodo />} />
        <Route path="user" element={<UserTable />} />
        <Route path="countdown" element={<Countdown />} />
        <Route path="blog" element={<Blog />} />
        <Route path="blog/:id" element={<BlogDetail />} />
        <Route path="blog/create-new-blog" element={<CreateNewBlog />} />
        <Route path="*" element={<Navigate to="/" />}></Route>
      </Routes>
    </>
  );
}

export default App;
