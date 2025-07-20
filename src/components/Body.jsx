import ResCard from "./ResCard";
// import resList  from "../utils/Mockdata";
import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import { BrowserRouter } from "react-router-dom";
import useOn9Status from "../utils/useOn9Status";


const Body =() => {

  //Local State Variable- Super powerful variable(array destructuring)
  const[listOfRestraunt , setListOfRestraunt] = useState([]);
  const[filteredRestaurants , setFilteredRestaurants] = useState([]);

  const[searchText , setSearchText] = useState("");

  console.log("Body rendered"); 
  // Whenever state variable update, react triggers a reconciliation cycle(re-render the component)

  useEffect(()=>{ 
    // console.log("useEffect is called");
    // fetch data from API
    fetchData();
  }, [])
 
  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=25.5940947&lng=85.1375645&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );      
      const json = await data.json();

      // console.log(json);

      setListOfRestraunt(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle.restaurants);
      setFilteredRestaurants(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle.restaurants);
    };

  const onlineStatus = useOn9Status();
  
  if(onlineStatus === false)
    return(
      <h1>
        Look's like you are offline!! Please check your internet
      </h1>
    )

  return listOfRestraunt.length === 0 ? (<Shimmer/>): /*Conditional Rendering(Api has not responded yet )*/ 
  (
    <div className="body">
      <div className="filter">
        <div className="search">
          <input type="text" className="search-box" 
            value={searchText} 
            onChange={(e) =>{
              setSearchText(e.target.value);
            }}  
          />
          <button className="btn"
            onClick={()=>{
              console.log(searchText);
              
              const filteredRestaurants = listOfRestraunt.filter((res) => 
                res.info.name.toLowerCase().includes(searchText.toLowerCase()) 
              ); 
              
              setFilteredRestaurants(filteredRestaurants);

            }}
          >
            Search
          </button>
        </div>
        <button className="btn" 
        onClick={()=>{
          const filterlist = listOfRestraunt.filter(
            (res)=>parseFloat(res.info.avgRatingString) > 4.5
          );
          setListOfRestraunt(filterlist); 
        }}
        >
          Top Rated Restraunts
        </button>
      </div>

      <div className="res-contain">
        {filteredRestaurants.map((restaurant)=>(
          <Link
            key={restaurant.info.id}
            to={"/restaurant/"+ restaurant.info.id}
          >
            <ResCard resData = {restaurant}/>
          </Link>
          
        ))}
      </div>    
    </div>
  ) 
};

export default Body;