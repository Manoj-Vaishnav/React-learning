
import Home from './component/Home.jsx'
import About from './component/About.jsx'
import Contact from './component/Contact.jsx'
import Login from './component/Login.jsx'
import Services from './component/Services.jsx'
import Signup from './component/Signup.jsx'
import Navbar from './component/Navbar.jsx'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <div><Navbar/><Home/></div>,
  },
  {
    path: "/about",
    element: <div><Navbar/><About/></div>,
  },
  {
    path: "/services",
    element: <div><Navbar/><Services/></div>,
  },
  {
    path: "/login",
    element: <div><Navbar/><Login/></div>,
  },
  {
    path: "/signup",
    element: <div><Navbar/><Signup/></div>,
  },
  {
    path: "/contact",
    element: <div><Navbar/><Contact/></div>,
  }
]);
function App() {

  return (
    <>
        <RouterProvider router={router} />
    </>
  )
}

export default App
