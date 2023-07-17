import "./Trending.css"
//import axios from "axios"
import { useState,useEffect } from "react";
import MovieCard from "../../components/MovieCard/MovieCard";
import Custompagination from "../../pagination/custompagination";

function Trending() {

  const [trending,setTrending] = useState([])
  const [page,setPage]=useState(2)

  
 
 const getAPI = async()=>{
  const api = await fetch(`https://api.themoviedb.org/3/trending/movie/day?api_key=f663be3cf91abc6255b1a959e84563e8&page=${page}`)
  const data = await api.json()
  setTrending(data.results)
  console.log(trending)
}
  
useEffect(()=>{
  getAPI()
},[page])


  return (
    <>
    <h1 className="page-title">TRENDING</h1>
    <div className="trending">
        

        {
         trending && trending.map(item=>(
          <MovieCard key={item.id} image={item.poster_path} name={item.original_title} vote={item.vote_average.toFixed(1)}/> 
         ))
        }
        
        <Custompagination setPage={setPage}/>
        
    </div>
    </>
   
  )
}

export default Trending