
import './Header.css'
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';


const Header = () => {
    return (
        <Navbar expand="lg" className="nav" id='header'>
                <Navbar.Brand href="#">Kornifa</Navbar.Brand>
                <Navbar.Toggle aria-controls="navbarScroll" />
                <Navbar.Collapse id="navbarScroll">
                    <Nav
                        className="ms-auto my-2 my-lg-0"
                        style={{ maxHeight: '90px' }}
                        navbarScroll
                    >
                        <Nav.Link href="#home" className=' nav__link active_link'>Home</Nav.Link>
                        <Nav.Link href="#about" className=' nav__link'>About</Nav.Link>
                        <Nav.Link href="#portfolio" className=' nav__link'>Portfolio</Nav.Link>
                        <Nav.Link href="#" className=' nav__link'>Resume</Nav.Link>
                        <Nav.Link href="#"  className=' nav__link'>Blog</Nav.Link>
                        <Nav.Link href="#contact" className=' nav__link'>Contact</Nav.Link>
                    
                    </Nav>
                    {/* <Form className="d-flex">
                        <Form.Control
                            type="search"
                            placeholder="Search"
                            className="me-2"
                            aria-label="Search"
                        />
                        <Button variant="outline-success">Search</Button>
                    </Form> */}
                </Navbar.Collapse>
        </Navbar>
    )
}

export default Header