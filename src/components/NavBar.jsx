import "./NavBar.css"
import { Link } from "react-router-dom"
function NavBar (){
 
    return(
    <>
    <nav className="NavBar">
        <Link to ="/Inicio">
        <button className="NavBar-button">Inicio</button>
        </Link>
      <Link to="/productos">
        <button className="NavBar-button">Productos</button>
      </Link>

      <Link to="/contacto">
        <button className="NavBar-button">Contacto</button>
      </Link>
    </nav>
    </>
 )   
}


export default NavBar