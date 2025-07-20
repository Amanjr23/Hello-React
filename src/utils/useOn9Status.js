import { useEffect, useState } from "react";

const useOn9Status = ()=>{

    const [onlineStatus,setOnlineStatus] = useState(true);

    useEffect(() => {
        window.addEventListener("offfline", () =>{
            setOnlineStatus(false);
        });

        window.addEventListener("online",() =>{
            setOnlineStatus(true);
        });
    }, []);
    

    return onlineStatus;
};

export default useOn9Status;