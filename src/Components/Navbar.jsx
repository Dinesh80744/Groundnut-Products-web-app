import React from 'react'
import './Navbar.css'
import { Link } from 'react-router-dom';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from '../Pages/Home';
import Admin from '../Pages/Admin';
import Products from '../Pages/Products';

function Navbar() {
  return (
    <Router>
    <div className='Nav'>
       <Link to= '/' className='site-title'>Peanuts</Link>
       <ul>
        <li className='pricing'>
            <Link to='Products.jsx'>Products</Link>
        </li>
        <li className='admin'>
            <Link to='Admin.jsx'>Admin</Link>
        </li>
       </ul>
        
    </div>
    <Routes>
    <Route path='/' element={<Home/>}> </Route>
    <Route path = 'Products.jsx' element = {<Products/>}></Route>
    <Route path = 'Admin.jsx' element = {<Admin/>}></Route>
    </Routes>
    </Router>
  )
}

export default Navbar