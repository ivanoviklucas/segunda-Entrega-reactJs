import "./NavBar.css";
import { Link } from "react-router-dom";
import { Navbar, Nav, Container, Dropdown } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
function NavBar() {
  return (
    <>
      <nav className="NavBar">
        <Link to="/Inicio">
          <button className="NavBar-button">Inicio</button>
        </Link>
        <div className="dropdown">
          <Link to="/productos">
            <button className="NavBar-button">Productos</button>
          </Link>
          <div className="dropdown-menu">
            <Link className="dropdown-item" to="/productos/remeras">
              Remeras
            </Link>
            <Link className="dropdown-item" to="/productos/pantalones">
              Pantalones
            </Link>
            <Link className="dropdown-item" to="/productos/buzos">
              Buzos
            </Link>
          </div>
        </div>

        <Link to="/contacto">
          <button className="NavBar-button">Contacto</button>
        </Link>
      </nav>
    </>
  );
}

export default NavBar;
