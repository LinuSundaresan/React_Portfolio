import './App.css';
import 'materialize-css/dist/css/materialize.css';
import 'materialize-css/dist/js/materialize.js';


import { BrowserRouter as Router, Route,  Routes } from 'react-router-dom';

import Home from './pages/Home';
import Education from './pages/Educations';
import Experience from './pages/Experiences';
import Portfolio from './pages/Portfolios';
import Skills from './pages/Skills';

function App() {

  return (
    <>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/education' element={<Education/>} />
        <Route path='/experience' element={<Experience/>} />
        <Route path='/skills' element={<Skills/>} />
        <Route path='/portfolio' element={<Portfolio/>} />
      </Routes>
    </>
  )
}

export default App
