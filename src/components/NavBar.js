import {Container, Navbar,Nav} from "react-bootstrap";
import { Link } from 'react-router-dom';
const Header=()=>{
    return(
        <>
    <Navbar collapseOnSelect expand="lg" className="bg-body-transparent">
      <Container>
         <Navbar.Brand className="text-white" as={Link} to="/">Portfolio</Navbar.Brand>
       <Navbar.Toggle aria-controls="responsive-navbar-nav">
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
        <Navbar.Collapse  id="responsive-navbar-nav">
          <Nav className="ms-auto">
          
<Nav className="ms-auto">
  <Nav.Link as={Link} to="/about" className="text-white">About</Nav.Link>
  <Nav.Link as={Link} to="/skills" className="text-white">Skills</Nav.Link>
  <Nav.Link as={Link} to="/projects" className="text-white">Projects</Nav.Link>
  <Nav.Link as={Link} to="/contact" className="text-white">Contact</Nav.Link>
</Nav>
  </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
        </>
    );
}
export default Header;