import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import useResMenu from "../utils/useResMenu";

const ResMenu = () => {
    const {resId} = useParams(); 

    const resInfo = useResMenu(resId);
  
  

  // 🛠 Proper Shimmer rendering
  if (resInfo === null) return <Shimmer />;

  // ✅ Destructure safely
  const { name, city, cuisines = [], costForTwoMessage } =
    resInfo?.cards[2]?.card?.card?.info || {};

  const itemCards =
    resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card
      ?.itemCards || [];

  console.log(itemCards);

  return (
    <div className="menu">
      <h1>{name}</h1>
      <h3>{city}</h3>
      <h3>{cuisines.join(", ")}</h3>
      <h3>{costForTwoMessage}</h3>

      <ul>
        {itemCards.map((item) => (
          <li key={item.card.info.id}>{item.card.info.name}
          <br/>
          {"Rs. "}{item.card.info.price/100}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ResMenu;
