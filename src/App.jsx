import './App.css'
import Navbar from './Components/Navbar.jsx'
import { BrowserRouter as Router, createBrowserRouter, RouterProvider, createRoutesFromElements, Route } from 'react-router-dom'
import NotFound from './Components/NotFound.jsx'
import Blog from './Components/Projects/MegaBlog/Blog.jsx'
import Login from './Components/Projects/MegaBlog/Login.jsx'
import Signup from './Components/Projects/MegaBlog/Signup.jsx'
import AddPost from './Components/Projects/MegaBlog/AddPost.jsx'
import AllPosts from './Components/Projects/MegaBlog/AllPost.jsx'
import Protected from './Components/Projects/MegaBlog/AuthLayout.jsx'
import EditPost from './Components/Projects/MegaBlog/EditPost.jsx'
import Post from './Components/Projects/MegaBlog/Post.jsx'
import BlogHome from './Components/Projects/MegaBlog/Home.jsx'


// This is New Approch
const router = createBrowserRouter([
  {
    path: "/",
    element: <><Blog /> </>,
  },
  {
    path: "/blog",
    element: <><Blog /></>,
    children: [
      {
        path: 'blog',
        element: <BlogHome />
      },
      {
        path: 'login',
        element: <Login />
      },
      {
        path: 'signup',
        element: <Signup />
      },
      {
        path: 'allposts',
        element: <Protected> <AllPosts /></Protected>
      },
      {
        path: 'post/:slug',
        element: <Protected> <Post /></Protected>
      },
      {
        path: 'addpost',
        element: <Protected> <AddPost /></Protected>
      },
      {
        path: 'edit-post/:slug',
        element: <Protected> <EditPost /></Protected>
      },
    ]
  },
  {
    path: "*",
    element: <><Navbar /><NotFound /></>,
  },
]);

function App() {

  return (

    <RouterProvider router={router} >
    </RouterProvider>
  )
}

export default App

