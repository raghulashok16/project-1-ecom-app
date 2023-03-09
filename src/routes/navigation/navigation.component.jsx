import { Outlet, Link } from "react-router-dom";
import { Fragment } from "react";
import { ReactComponent as Cyclogo } from '../../assets/cycle.svg';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import './navigation.styles.css';
const Navigation = () => {
    return (
        <Fragment>
            <Navbar expand="lg" className="nav-bg-color px-3 ">
                <Container fluid>
                    <Navbar.Brand href="#home">
                        <Link className="logo-container" to="/">
                            < Cyclogo className="logo black-logo" />
                        </Link>
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="ms-auto">
                            <Nav.Link href="#home">
                                <Link className="nav-link active" to="/shop">
                                    SHOP
                                </Link>
                            </Nav.Link>
                            <Nav.Link href="#link">
                                <Link className="nav-link active" to="/auth">
                                    SIGN IN
                                </Link>
                            </Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
            <Outlet />
        </Fragment>
    );
}
export default Navigation;