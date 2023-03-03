import React from 'react'
import Navbar from './Components/Navbar';
import Home from './Components/Home';
import Catagories from './Components/Catagories';
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';
import Footer from './Components/Footer';


const App = () => {
  return (
    <>
    <Router>
    <Navbar/>
      <Routes>
          <Route exact path="/" element={<Home/>} />
          <Route path="/general" element={<Catagories cat="general" />} />
          <Route path="/business" element={<Catagories cat="business" />} />
          <Route path="/entertainment" element={<Catagories cat="entertainment"/>} />
          <Route path="/health" element={<Catagories cat="health" />} />
          <Route path="/science" element={<Catagories cat="science" />} />
          <Route path="/sports" element={<Catagories cat="sports" />} />
          <Route path="/technology" element={<Catagories cat="technology" />} />
          <Route path="/German" element={<Catagories cat="business" />} />
          < Route path="/England" element={<Catagories cat="business" />} />
          <Route path="/us" element={<Catagories cat="business" />} />
        </Routes>
      </Router>
      <Footer/>
    </>
  )
}
export default App;
