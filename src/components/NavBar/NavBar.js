import {Navbar,Nav,Container} from 'react-bootstrap';
import './NavBar.css';


const Header = () => {
  return (
    <Container>
      <Navbar collapseOnSelect expand="lg" className='bg-body-transparent'>
          <Navbar.Brand className="text-white brandn" >
            Portfolio
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 30 30"
              width="30"
              height="30"
              fill="white"
            >
              <path
                stroke="white"
                strokeWidth="2"
                strokeLinecap="round"
                d="M4 7h22M4 15h22M4 23h22"
              />
            </svg>
          </Navbar.Toggle>
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="ms-auto">
              <nav id="navbar-example2" className="navbar bg-body-transparent ">
      <ul className="nav nav-pills">
        <li className="nav-item">
          <a className="nav-link text-white" href="#About" >About</a>
        </li>
        <li className="nav-item">
          <a className="nav-link text-white" href="#Skills">Skills</a>
        </li>
        <li className="nav-item">
          <a className="nav-link text-white" href="#Project">Projects</a>
        </li>
        <li className="nav-item">
          <a className="nav-link text-white" href="#Contact">Contact</a>
        </li>
      </ul>
    </nav>
            </Nav>
          </Navbar.Collapse>
      </Navbar>
        </Container> 

  );
};

export default Header;

