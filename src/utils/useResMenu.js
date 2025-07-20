import { Res_API } from "../utils/constants";
import { useEffect, useState } from "react";

const useResMenu =  (resId)=>{
    const [resInfo, setResInfo] = useState(null);

    useEffect(() => {
    fetchMenu();
  }, []);

  const fetchMenu = async () => {
    const data = await fetch(Res_API + resId);

    const json = await data.json();
    
    setResInfo(json.data);
  };
  return resInfo;
}

export default useResMenu;