import Header from './components/header/header'
import Nav from './components/navigator/nav'
import { BrowserRouter } from 'react-router-dom'
import Page from './pages/Page'

import './App.css'
import { Container } from '@mui/material'

function App() {


  return (
    
   <div className="App">
     <BrowserRouter>
      
      <Header/>
      <Container>
      <Page/>
      </Container>
      <Nav/>
    
  
    
  </BrowserRouter>
   </div>
  )
}

export default App
