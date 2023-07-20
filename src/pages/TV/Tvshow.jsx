import {useState,useEffect} from 'react'
import './tv-show.css'
import MovieCard from '../../components/MovieCard/MovieCard'
import Custompagination from '../../pagination/custompagination'

function Tvshows() {
  const [tv,setTv]=useState([]) 
const [page,setPage] = useState(1)

    const getTv = async()=>{
        const api  = await fetch(`https://api.themoviedb.org/3/discover/tv?api_key=f663be3cf91abc6255b1a959e84563e8&page=${page}`)
        const data = await api.json()
        setTv(data.results)
        console.log(tv)

    }

    useEffect(()=>{
        getTv()
    },[])

 
  return (
   <>
    <h1 className="page-title">Top movies</h1>
    <div className="movies">
         {
         tv && tv.map(item=>(
          <MovieCard key={item.id} image={item.poster_path} name={item.original_title} vote={item.vote_average.toFixed(1)}/> 
         ))
        }

         <Custompagination  setPage={setPage}/>
         
         </div>
         </>
         )}

        


export default Tvshows