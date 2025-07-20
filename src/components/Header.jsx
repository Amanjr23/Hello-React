
import {LOGO_URL} from "../utils/constants";
import { useState } from "react";
import { Link } from "react-router-dom";
import useOn9Status from "../utils/useOn9Status";

const Header = ()=>{

  const [btnNameReact, setbtnNameReact] = useState("Login");

  const onlineStatus = useOn9Status();
  

  return (
    
    <div className="flex">
      <div className="logo-container">
        <img 
        className="w-8" src={LOGO_URL}/>
        </div>
      <div className="nav">
        <ul>
          <li>
            Online Status: {onlineStatus? "✅" : "🔴"}
            <h1 className="text-4xl text-blue-600 font-bold underline">
  Tailwind is Working 🎉
</h1>
          </li>
          <li>
            <Link to="/">Home</Link>
          </li>

          <li>
            <Link to="/about">About us</Link>
          </li>
          
          <li>
            <Link to="/contact">Contact</Link>
          </li>
          
          <li>
            <Link to="/grocery">Grocery</Link>
          </li>
          <li>Cart</li>

          <button 
            className="login"
            onClick={()=> {
             btnNameReact === "Login" ?
             setbtnNameReact("Logout"):
             setbtnNameReact("Login");
            }}
          >
            {btnNameReact}
          </button> 
        </ul>

      </div>
    </div>
  )
};

export default Header;