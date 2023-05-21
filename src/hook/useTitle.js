import { useEffect } from "react";

const useTitle=(title)=>{

    useEffect(()=>{
        document.title=`ToySpeedy | ${title}`
    },[title])
       
}
export default useTitle;