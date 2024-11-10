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
    element: <><Navbar /><Home />  </>,
    children: [
      {
        path: "mapfunction",
        element: <><MapFunction /></>
      }
    ]
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

// Or Other Approach

const routerfromElement = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Layout />}>
      <Route path='about' element={<h1>Child Layout 1</h1>} />
      <Route path='contact' element={<h1>Child Layout 2</h1>} />
    </Route>
  )
)

function App() {

  return (

    // This is Old Approach 
    // <Router>
    //   <Navbar />
    //   <Routes>
    //     <Route path="/" element={<Home />} />
    //     <Route path="/card" element={<CardList />} />
    //     <Route path="/usestatehook" element={<UseStateHook />} />
    //     <Route path="/statelifting" element={<StateLifting />} />
    //     <Route path="/dynamiccolor" element={<DynamicStyleColor />} />
    //     <Route path="/conditionalrendering" element={<ConditionalRendering />} />
    //     <Route path="/eventhandling" element={<EventHandling />} />
    //     <Route path="/gallery" element={<Gallery />} />
    //     <Route path="/useeffecthook" element={<UseEffectHook />} />
    //     <Route path="/useeffecttimer" element={<UseEffectHookTimer />} />
    //     <Route path="/useeffectdatafetch" element={<UseEffectDataFetch />} />
    //     <Route path="/usecontexthook" element={<UseContextHook />} />
    //     <Route path="*" element={<NotFound />} />
    //   </Routes>
    // </Router>
    <RouterProvider router={router} >
    </RouterProvider>
  )
}

export default App

