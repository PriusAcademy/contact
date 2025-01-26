import React  from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { Helmet } from 'react-helmet';

import './App.css';

import Home from './components/pages/Homepage';
import Contact from './components/pages/Contactpage';

function App() {

  return (
    
    <>
     <Helmet>
        <title>Prius IT Services Pvt Ltd</title>
        <link rel="icon" type="image/png" href="/logo.png" />
      </Helmet> 
    <div  className=' w-full min-h-screen overflow-hidden p-0 m-0  sm:w-full md:w-full lg:w-full font-DM'>
    <Router>
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/contact-us' element={<Contact />}></Route>
      </Routes>

    </Router>

    </div>
    
    </>
  )
}

export default App ;
