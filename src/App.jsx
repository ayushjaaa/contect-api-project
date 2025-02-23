import React from 'react'
import Home from './compontes/Home'
import {Route,Routes} from 'react-router-dom'
import Details from './compontes/details'
import { Link } from 'react-router-dom'
const App = () => {
  return (
    <div className='h-screen w-screen flex'>
<Link to="/home" >Home</Link>
<Routes>
  <Route path='/home' element={<Home/>}/>
  <Route path='/category/:id' element={<Details/>}/>
</Routes>
    </div>
  )
}

export default App
