import { useContext } from "react";
import { Render } from "../context/Render";
function useRender(){
    const {Videos,setVideos} = useContext(Render)
    return(
        [Videos,setVideos]

    )
}
export default useRender