
import "./MovieCard.css"
import { Badge } from "@mui/material"
function MovieCard({image,name,vote}) {


  return (
    <div className="card">
      <Badge badgeContent={vote} color={vote>6?'primary':'secondary'}/>
        <img src={`https://image.tmdb.org/t/p/w300/${image}`}/>
        <div className="card-info">
            <h4 >{name}</h4>


        </div>

    </div>
  )
}


export default MovieCard