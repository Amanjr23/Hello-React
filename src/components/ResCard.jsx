import { IMG_CDN_URL } from "../utils/constants";
const ResCard =(props) =>{
  const {resData} =props;

  const{

    cloudinaryImageId,
    name,
    avgRatingString,
    cuisines,
    costForTwo,
    Delivery,
  }= resData?.info;
  return(
  <div className="res-card">
    <img className="pic1"src={IMG_CDN_URL + cloudinaryImageId}/>

    <h2 className="name">{name}</h2>
    <h4>{cuisines.join(", ")}</h4>
    <h4>{avgRatingString}</h4>
    <h4>{Delivery}</h4>
    <h4> ${costForTwo}</h4>
  </div>

 );
};

export default ResCard;