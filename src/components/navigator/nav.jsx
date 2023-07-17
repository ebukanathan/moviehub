
import{ useState } from 'react'
import Box from '@mui/material/Box';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import WhatshotIcon from '@mui/icons-material/Whatshot';
import TvIcon from '@mui/icons-material/Tv';
import MovieIcon from '@mui/icons-material/Movie';
import SearchIcon from '@mui/icons-material/Search';
import { Link} from 'react-router-dom';
import './nav.css'

export default function Nav() {
  const [value, setValue] = useState(0);

  return (
    <Box sx={{ width: 1300 }}
    className='nav'>  
        
      <BottomNavigation
        showLabels
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
      >
        <Link to ={'/'}><BottomNavigationAction label="TV Shows" icon={<WhatshotIcon/>} /></Link>
        <Link to={'/tv-shows'}><BottomNavigationAction label="TV Shows" icon={<TvIcon/>} /></Link>
        <Link to={'/movies'}><BottomNavigationAction label="Movie" icon={<MovieIcon />} /></Link>
        <Link to={'/search'}><BottomNavigationAction label="Search" icon={<SearchIcon />} /></Link>
      </BottomNavigation>
      
    </Box>
  );
}