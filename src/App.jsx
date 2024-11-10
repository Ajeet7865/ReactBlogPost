import './App.css'
import Navbar from './Components/Navbar.jsx'
import CardList from './Components/CardList.jsx'
import UseStateHook from './Components/UseStateHook.jsx'
import StateLifting from './Components/StateLifting.jsx'
import DynamicStyleColor from './Components/DynamicStyleColor.jsx'
import ConditionalRendering from './Components/ConditionalRendering.jsx'
import EventHandling from './Components/EventHandling.jsx'
import { BrowserRouter as Router, createBrowserRouter, RouterProvider, createRoutesFromElements, Route } from 'react-router-dom'
import NotFound from './Components/NotFound.jsx'
import Gallery from './Components/Gallery.jsx'
import UseEffectHook from './Components/UseEffectHook.jsx'
import UseEffectHookTimer from './Components/UseEffectHookTimer.jsx'
import UseEffectDataFetch from './Components/UseEffectDataFetch.jsx'
import UseContextHook from './Components/UseContext/UseContextHook.jsx'
import Home from './Components/Home.jsx'
import UseParams from './Components/Routing/UseParams.jsx'
import { UseNavigateHook } from './Components/Routing/UseNavigateHook.jsx'
import ReactHookForm from './Components/Forms/ReactHookForm.jsx'
import SimpleReactForm from './Components/Forms/SimpleReactForm.jsx'
import MapFunction from './Components/MapFunction.jsx'
import UseRef from './Components/UseRef.jsx'
import ReduxExample from './redux/ReduxExample.jsx'
import UsersList from './features/users/userList.jsx'
import ReduxTodo from './features/todos/ReduxTodo.jsx'
import UseMemoHook from './Components/UseMemoHook.jsx'
import UseCallbackHook from './Components/UseCallbackHook.jsx'
import PasteApp from './Components/PasteApp/PasteApp.jsx'
import ViewPaste from './Components/PasteApp/ViewPaste.jsx'
import AddPaste from './Components/PasteApp/AddPaste.jsx'
import ColorChange from './Components/Projects/ColorChange.jsx'
import PasswordGenerator from './Components/Projects/PasswordGenerator.jsx'
import CurrencyConverter from './Components/Projects/CurrencyConverter.jsx'
import TailwindNavbar from './Components/Projects/TailwindNavbar.jsx'
import Layout from './Components/Layout.jsx'
import UseProvider from './Components/UseContext/UseProvider.jsx'
import UseThemeContext from './Components/UseContext/UseThemeContext.jsx'
import Todo from './Components/Projects/ContextAPITodo/Todo.jsx'
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
    path: "/card",
    element: <><Navbar /><CardList /></>,
    children: [  // Iska Use Nested Route Dene Ke Liye Krte Hain
      {
        path: 'one',
        element: <><h1>Card One From Sub Route</h1> </>
      },
      {
        path: 'two',
        element: <> <h1>Card Two From Sub Route</h1> </>
      }
    ]
  },
  {
    path: "/usestatehook",
    element: <><Navbar /><UseStateHook /></>,
  },
  {
    path: "/layout",
    element: <><Layout /></>,
    children: [
      {
        path: 'about',
        element: <><h1>About Section From Layout Children</h1></>
      }
    ]
  },
  {
    path: "/statelifting",
    element: <><Navbar /><StateLifting /></>,
  },
  {
    path: "/dynamiccolor",
    element: <><Navbar /><DynamicStyleColor /></>,
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
    path: "/conditionalrendering",
    element: <><Navbar /><ConditionalRendering /></>,
  },
  {
    path: "/eventhandling",
    element: <><Navbar /><EventHandling /></>,
  },
  {
    path: "/gallery",
    element: <><Navbar /><Gallery /></>,
  },
  {
    path: "/useeffecthook",
    element: <><Navbar /><UseEffectHook /></>,
  },
  {
    path: "/useeffecttimer",
    element: <><Navbar /><UseEffectHookTimer /></>,
  },
  {
    path: "/useeffectdatafetch",
    element: <><Navbar /><UseEffectDataFetch /></>,
  },
  {
    path: "/usecontexthook",
    element: <><Navbar /><UseContextHook /></>,
  },
  {
    path: "/useparams/:id",  // UseParams Hook 
    element: <><Navbar /><UseParams /></>,
  },
  {
    path: "/usenavigate",
    element: <><Navbar /><UseNavigateHook /></>,
  },
  {
    path: "/reacthookfrom",
    element: <><Navbar /><ReactHookForm /></>,
  },
  {
    path: "/simplereactform",
    element: <><Navbar /><SimpleReactForm /></>,
  },
  {
    path: "/userefhook",
    element: <><Navbar /><UseRef /></>,
  },
  {
    path: "/redux",
    element: <><Navbar /><ReduxExample /></>,
  },
  {
    path: "/redux-users",
    element: <><Navbar /><UsersList /></>,
  },
  {
    path: "/redux-todo",
    element: <><Navbar /><ReduxTodo /></>,
  },
  {
    path: "/usememohook",
    element: <><Navbar /><UseMemoHook /></>,
  },
  {
    path: "/usecallback",
    element: <><Navbar /><UseCallbackHook /></>,
  },
  {
    path: "/addpastes",
    element: <><Navbar /><AddPaste /></>,
  },
  {
    path: "/pastes",
    element: <><Navbar /><PasteApp /></>,
  },
  {
    path: "/pastes/:id",
    element: <><Navbar /><ViewPaste /></>,
  },
  {
    path: "colorchange",
    element: <><Navbar /><ColorChange /></>,
  },
  {
    path: "passwordgenerate",
    element: <><Navbar /><PasswordGenerator /></>,
  },
  {
    path: "currencyconverter",
    element: <><Navbar /><CurrencyConverter /></>,
  },
  {
    path: "tailwindnavbar",
    element: <><Navbar /><TailwindNavbar /></>,
  },
  {
    path: "usecontextapichaicode",
    element: <><Navbar /><UseProvider /></>,
  },
  {
    path: "contextapitodo",
    element: <><Navbar /><Todo /></>,
  },
  {
    path: "usethemecontext",
    element: <><Navbar /><UseThemeContext /></>,
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

