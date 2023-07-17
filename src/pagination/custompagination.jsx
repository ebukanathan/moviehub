import React from 'react'
import { Pagination } from '@mui/material'
import './custompagination.css'

function Custompagination({setPage,numberOfPages = 10}) {


   const  handlePageChange=(page)=>{
        setPage(page)
        window.scrollY(0,0)
    }
  return (
    <div className='pagination'>
         <Pagination variant="outlined" color="primary" onChange={(e)=>handlePageChange(e.target.textContent)} count={numberOfPages} />
       <h5>okok</h5>


    </div>
  )
}
 
export default Custompagination