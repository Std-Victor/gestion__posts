import "./App.css";
import {createBrowserRouter, Navigate} from "react-router-dom";
import Login from "./pages/Login/Login.jsx";
import DefaultLayout from "./components/Layout/DefaultLayout";
import GuestLayout from "./components/Layout/GuestLayout";
import Posts from "./pages/Posts/Posts";
import AddPost from "./pages/AddPost/AddPost";
import NotFound from "./pages/NotFound/NotFound";
import SignUp from "./pages/SignUp/SignUp";
import Post from "./pages/Post/Post";
import EditPost from "./pages/EditPost/EditPost";

const router = createBrowserRouter([
  {
    path: "/",
    element: <DefaultLayout />,
    children: [
      {
        path: "/",
        element: <Navigate to="/posts" />,
      },
      {
        path: "/posts",
        element: <Posts />,
      },
      {
        path: "/posts/add",
        element: <AddPost />,
      },
      {
        path: "/posts/:id",
        element: <Post />,
      },
      {
        path: "/posts/:id/edit",
        element: <EditPost />,
      },
    ],
  },
  {
    path: "/",
    element: <GuestLayout />,
    children: [
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/signup",
        element: <SignUp />,
      },
    ],
  },
  {
    path: "*",
    element: <NotFound />,
  },
]);

export default router;

// <Route path="/login" element={<Login />} />
// <Route path="/signup" />
//
// <Route path="/" element={handlePath(<Login />)} />
// <Route path="/posts" />
// <Route path="/posts/add" />
// <Route path="/posts/:id" />
// <Route path="/posts/:id/edit" />
