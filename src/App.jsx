import React from 'react'
import Home from './compontes/Home'
import {Route,Routes} from 'react-router-dom'
import Details from './compontes/details'
const App = () => {
  return (
    <div>
<Routes>
  <Route path='/home' element={<Home/>}/>
  <Route path='/details/:id' element={<Details/>}/>
</Routes>
    </div>
  )
}

export default App
