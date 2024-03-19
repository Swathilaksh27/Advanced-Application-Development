import { useState } from 'react'

import Bookevent from './Components/Bookevent'
import EventDetails from './Components/EventDetails';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import BookDetails from './Components/BookDetails';
import FoodDetails from './Components/FoodDetails';
import Register from './Components/Register';
import Home from './Components/Home'
import ViewBookedevent from './Components/ViewBookedevent';
import Home2 from './Components/Home2'

function App() {
  // const [count, setCount] = useState(0)
  return (
    <BrowserRouter>
    <Routes>
    <Route path='/' element={<Register/>}/>
    <Route path='/home' element={<Home/>}/>
    <Route path='/book' element={<Bookevent/>}/>
    <Route path='/eventdetails/:id' element={<EventDetails/>}/>
    <Route path='/bookdetails' element={<BookDetails/>}/>
    <Route path='/fooddetails' element={<FoodDetails/>}/>
    <Route path='/view' element={<ViewBookedevent/>}/>
    <Route path='/admin-home' element={<Home2/>}/>
    </Routes>
    </BrowserRouter>
      
    
    )
  }
  
  export default App;
  