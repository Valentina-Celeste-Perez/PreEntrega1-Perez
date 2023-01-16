import { NavLink } from 'react-router-dom'
import CartWidget from '../CartWidget/CartWidget'
import './Navbar.css'

import { useNavigate } from 'react-router-dom'

const NavBar = () => { 

  const navigate = useNavigate()

  return (
   <nav className="NavBar" >
     
         <h3 onClick={() => navigate('/')} class="navbar-brand fst-italic" href="#">
            GALACTIC
          <img src="./images/icons8-galaxia-96.png" alt="logo" width="60" height="54"/>   
        </h3> 
        <div className="Categories">
          <NavLink to={`/`} className={({ isActive }) => isActive ? 'ActiveOption' : 'Option'}>Inicio</NavLink>
          <NavLink to={`/category/celular`} className={({ isActive }) => isActive ? 'ActiveOption' : 'Option'}>Celulares</NavLink>
          <NavLink to={`/category/tablet`} className={({ isActive }) => isActive ? 'ActiveOption' : 'Option'}>Tablets</NavLink>
          <NavLink to={`/category/laptop`} className={({ isActive }) => isActive ? 'ActiveOption' : 'Option'}>Notebooks</NavLink>
        </div>
        <CartWidget />
  </nav>


  
  )
}

export default NavBar

