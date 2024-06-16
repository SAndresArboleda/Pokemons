import { Route, Routes } from 'react-router-dom';
import LandingPage from './views/landing/landing.Comp'
import Home from './views/home/home.Comp';
import Detail from './views/detail/detail.comp'
import Create from './views/create/create.comp';

// import './app.css'

export const App = () => {

  


  return (
    <div>
      <Routes>

        <Route exact path='/' element={<LandingPage />} />
        <Route exact path='/home' element={<Home />} />
        <Route exact path='/detail/:id' element={<Detail />} />
        <Route exact path='/create' element={<Create />} />

      </Routes>
    </div>
  )
}
