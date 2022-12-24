import CartWidget from "../CartWidget/CartWidget"

const Navbar = () => {  
return (

<ul class="nav nav-tabs bg-transparent position-absolute top-0 start-50 translate-middle-x">
  <div class="container">
    <a class="navbar-brand fst-italic" href="#">
      GALACTIC
      <img src="./images/icons8-galaxia-96.png" alt="logo" width="60" height="54"/>   
    </a>
  </div>
 
  <li class="nav-item" >
    <a class="nav-link text-light" aria-current="page" href="#">Home</a>
  </li>
  <li class="nav-item">
    <a class="nav-link text-light" href="#">Productos</a>
  </li>
  <li class="nav-item">
    <a class="nav-link text-light" href="#">Nosotros</a>
  </li>
  <CartWidget />
</ul>
 )
} 

export default Navbar
