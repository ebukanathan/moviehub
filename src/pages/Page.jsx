
import { Routes,Route } from 'react-router'
import Trending from './Trending/Trending'
import Tvshows from './TV/Tvshow'
import Movies from './Movies/Movies'
import Search from './Search/Search'
import './Page.css'

function Page() {
  return (
    <>
    
    <Routes>
        
        <Route path='/' element={<Trending/>}/>
        <Route  path='/movies' element={<Movies/>}/>
        <Route path='/tv-shows' element={<Tvshows/>}/>
        <Route path='/movies' element={<Movies/>}/>
        <Route path='/search' element={<Search/>}/>
    </Routes>
    </>
    
  )
}

export default Page