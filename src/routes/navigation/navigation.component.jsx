import { Outlet, Link } from "react-router-dom";
import { Fragment, useContext } from "react";
import { ReactComponent as Cyclogo } from '../../assets/cycle.svg';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Cart from "../../components/cart/cart.component";
import './navigation.styles.css';
import { UserContext } from "../../contexts/user.context";
import { signOutUser } from "../../utils/firebase/firebase.utils";


const Navigation = () => {
    const { currentUser } = useContext(UserContext);
    // console.log(currentUser);

    return (
        <Fragment>

            <Navbar expand="sm" className="nav-bg-color px-3 ">
                <Container fluid>
                    <Navbar.Brand>
                        <Link className="logo-container" to="/">
                            < Cyclogo className="text-black" />
                        </Link>
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="ms-auto">
                            <Link className="nav-link active" to="/shop">
                                SHOP
                            </Link>
                            {
                                currentUser ?
                                    (<Link className="nav-link active" onClick={signOutUser}>
                                        SIGN OUT
                                    </Link>) :
                                    (<Link className="nav-link active" to="/auth">
                                        SIGN IN
                                    </Link>)
                            }

                            <Cart />


                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
            {
                currentUser ?
                    (<p className="ms-2 mt-2">Logged in with email : {currentUser.email}</p>) :
                    (<></>)
            }

            <Outlet />
        </Fragment >
    );
}
export default Navigation;