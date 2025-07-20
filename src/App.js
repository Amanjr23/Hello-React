import React, {lazy,Suspense} from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import About from "./components/About";
import Error from "./components/Error";
import ResMenu from "./components/ResMenu";
import Contact from "./components/Contact";
// /////////////////////// REACT /////////////////////////
// import '../index.css';



const Grocery = lazy(() => import("./components/Grocery"));

const AppLayout =()=>{
  return(
    
    <div className="app">
      <Header/>
      <Outlet/>
    </div>
  )
};

const appRouter = createBrowserRouter([
  {
    path: "/",
    element:<AppLayout/>,
    children:[
    {
      path:"/",
      element:<Body/>,
    },
    {
      path: "/about",
      element:<About/>
    },
    {
      path: "/contact",
      element:<Contact/>
    },
    
    /* lazy loading*/
    {
      path: "/grocery",
      element :(
        <Suspense fallback={<h1>Loading...</h1>}>
          <Grocery/>     
        </Suspense>
      ),
    },  
    {
      path: "/restaurant/:resId",
      element:<ResMenu/>,
    },
    ],
    errorElement:<Error/>,
  },
  
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<RouterProvider router={appRouter}/>);