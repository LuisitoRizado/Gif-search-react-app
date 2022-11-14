
import { useState,useEffect } from "react";
import { getGif } from "../helpers/getGif.js";
import { GifItem } from "./GifItem.jsx";
export const GifGrid = ({category}) => {

    //Hook de useState para las imagenes
    const[images,setImages] = useState([]);
   //Solo deberia ejecutarse una sola vez la 
   //Llamada al metodo

   const [counter,setCounter] = useState(10);
   //Son efectos secundarios, por ejemplo
   //cuando el counter cambie ebntonces se genera un cambio
   //Cuando se carga por primera vez
   //Hook de useEffect
   useEffect(()=> {
    
    getGif(category).then(
     newImages => setImages (newImages)
    )
   },[]
   )
   
    return(
        <>
            <h3>{category}</h3>
            <div className="card-grid">
                {
                   images.map((image) =>(
                    <GifItem 
                    key={image.id}
                    {...image}
                    
                    />
                    //<img src={require(image.src)} alt="Gif" />
                   ))
                }
                
                
            </div>
        </>
    )
}