import { useState,useEffect } from "react"
import MovieCard from "../../components/MovieCard/MovieCard"
import './Movies.css'
import Custompagination from "../../pagination/custompagination"

function Movies() {

const [movies,setMovies]=useState([]) 
const [page,setPage] = useState(1)

    const getMovies = async()=>{
        const api  = await fetch(`https://api.themoviedb.org/3/discover/movie?api_key=f663be3cf91abc6255b1a959e84563e8&page=${page}`)
        const data = await api.json()
        setMovies(data.results)
        console.log(movies)

    }

    useEffect(()=>{
        getMovies()
    },[])

 
  return (
   <>
    <h1 className="page-title">Top movies</h1>
    <div className="movies">
         {
         movies && movies.map(item=>(
          <MovieCard key={item.id} image={item.poster_path} name={item.original_title} vote={item.vote_average.toFixed(1)}/> 
         ))
        }

         <Custompagination  setPage={setPage}/>

        

    

    </div>
   </>
  )
}

export default Movies