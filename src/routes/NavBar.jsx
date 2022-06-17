import * as React from 'react'
import {useRef} from 'react'
import {BrowserRouter,Routes,Route,NavLink, Navigate} from 'react-router-dom'
import {FaBars, FaTimes} from 'react-icons/fa'
import {Home} from '../components/cHome/Home.jsx'
import {About} from '../components/cAbout/About.jsx'
import {Dashboard} from '../components/cDashboard/Dashboard.jsx'
import '../styles/NavBar.css'
function NavBar() {
    const navRef = useRef();
    const showNavBar = () =>{
        navRef.current.classList.toggle("responsive_nav");
    }
  return (

    <BrowserRouter>
    <header>
        <nav ref={navRef}>
            <ul>
                <li><NavLink to='/'>

                <li><NavLink to='/About'>
                    About
                    </NavLink></li>
                
                <li><NavLink to='/Dashboard'>
                    Dashboard
                    </NavLink></li>
            </ul> 

        </nav>
    </header>

    

        <Routes>
        

        </Routes>
    </BrowserRouter>
    
  )
}

export  {NavBar}