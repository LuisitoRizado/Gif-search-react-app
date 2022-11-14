export function GifItem({title,url,id}){
    return(
        <div className="card">
            {/*Destructuracion del objeto que nos manda desde el gifGrid, */}
           <img src={url} alt="" />
           <p>{title}</p>
        </div>
    )
}