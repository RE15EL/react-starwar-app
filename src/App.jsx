import { Route, Routes } from 'react-router-dom'
import Layout from './components/layout/Layout'
import People from './pages/people/People'
import Films from './pages/films/Films'
import Species from './pages/species/Species'
import Planets from './pages/planets/Planets'
import Vehicles from './pages/vehicles/Vehicles'
import Starships from './pages/starships/Starships'
import NotFound from './pages/notfound/NotFound'

function App() { 

  return (
    <>     
      <Routes>
        <Route path='/' element={<Layout/>}>
          <Route index element={<People/>} />
          <Route path='films' element={<Films/>} />
          <Route path='people' element={<People/>} />
          <Route path='species' element={<Species/>} />
          <Route path='planets' element={<Planets/>} />
          <Route path='vehicles' element={<Vehicles/>} />
          <Route path='starships' element={<Starships/>} />
          <Route path='*' element={<NotFound/>} />
        </Route>
      </Routes>
    </>
  )
}

export default App
