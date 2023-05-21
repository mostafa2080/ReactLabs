import {Container , Nav , Navbar} from "react-bootstrap";
import {NavLink} from "react-router-dom";


const NavbarComponent = () => {
    return (
        <>
            <Navbar bg="dark" variant="dark">
                <Container>
                    <Navbar.Brand href="/">Links</Navbar.Brand>
                    <Nav className="me-auto">
                        <NavLink className="nav-link" to="/">Home</NavLink>
                        <NavLink className="nav-link" to="/products">Products</NavLink>
                    </Nav>
                </Container>
            </Navbar>
        </>
    );
}

export default NavbarComponent;