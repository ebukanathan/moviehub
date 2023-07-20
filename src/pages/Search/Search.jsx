import { TextField,Box } from "@mui/material"
import {Button,Tabs,Tab} from "@mui/material"
import SearchIcon from '@mui/icons-material/Search';
import { useState } from "react";
import './Search.css'

function Search() {

    const [type,setType] = useState(0)
  return (
    <div style={{alignSelf:'center'}}>
       <div  className="search-bar">
       <TextField id="filled-basic" label="Search" variant="filled" />
       <Button variant="contained"><SearchIcon/></Button>
       </div>
       <Tabs value={type} indicatorColor="primary"
        textColor="primary"
        style={{paddingBottom:'5px',alignItems:'center',width:10}}>
        <Tab  style={{width:'50%'}} label="Movies"/>
        <Tab  style={{width:'50%'}} label="TV Series"/>

       </Tabs>

        
    </div>
  )
}

export default Search
