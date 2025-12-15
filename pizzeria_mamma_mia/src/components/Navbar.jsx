import { useContext } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
import { CartContext } from '../CartContext';

function Navbar1({ isLoggedIn, onLogout}){
    const { total } = useContext(CartContext);
    return(
        <>
            <Navbar collapseOnSelect expand="lg" bg="dark" data-bs-theme="dark">
                <Container>
                    <Navbar.Brand as={Link} to="/">Pizzeria Mamma Mia</Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto">
                        <Nav className='boxMenu'>
                            <Nav.Link as={Link} to="/">🍕 Home</Nav.Link>
                        </Nav>                        
                        {isLoggedIn ? 
                        <Nav>
                            <Nav className='boxMenu'>
                                <Nav.Link as={Link} to="/profile">🔓 Profile</Nav.Link>
                            </Nav>
                            <Nav className='boxMenu'>
                                <Nav.Link as={Link} to="/" onClick={onLogout}>🔒 Logout</Nav.Link>
                            </Nav>
                        </Nav>
                        :
                        <Nav>
                            <Nav className='boxMenu'>
                                <Nav.Link as={Link} to="/login">🔐 Login</Nav.Link>
                            </Nav>                  
                            <Nav className='boxMenu'>
                                <Nav.Link as={Link} to="/register">🔐 Register</Nav.Link>                                
                            </Nav>  
                        </Nav> 
                        }    
                                                                     
                    </Nav>
                    <Nav className='boxTotal'>
                        <Nav.Link as={Link} to="/cart">{`🛒 Total: $${Number(total).toLocaleString('es-CL')}`}</Nav.Link>
                    </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    );
};

export default Navbar1;