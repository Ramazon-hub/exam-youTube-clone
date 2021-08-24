import { useState,createContext, useEffect } from "react";
 
const Render = createContext();
function Provider( { children } ){
    const [Videos,setVideos] = useState([]);
    useEffect(()=>{
        fetch(`https://jsonplaceholder.typicode.com/photos`)
        .then(res=>res.json())
        .then(data=>setVideos(data))
    },[])
        
    console.log(Videos)
    return(
        <>
            <Render.Provider value={ { Videos,setVideos } }>
                { children }
            </Render.Provider>
            
        </>

    )
}
export {
    Render,Provider
}