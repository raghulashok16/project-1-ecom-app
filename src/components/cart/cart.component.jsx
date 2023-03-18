import { ReactComponent as Cartlogo } from '../../assets/cart-icon.svg';
import { Container, Dropdown, DropdownButton } from "react-bootstrap";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { CartContext } from "../../contexts/cart.context";
import CartItem from "../cart-item/cart-item.component";

const Cart = () => {
    const { cartItems, total, cartQuantity } = useContext(CartContext);
    const navigate = useNavigate();
    const goToCheckOutHandler = () => {
        navigate('/checkout');
    }
    return (
        <>
            <div className="position-relative pe-1">


                <DropdownButton
                    drop="start"
                    data-toggle="dropdown"
                    variant="link"
                    className='ms-3 mt-1'
                    title=< Cartlogo className="text-black position-absolute bottom-0 end-0 translate-middle-x" />
                >
                    <ul className="scrollable-menu text-center p-0">
                        {
                            (cartItems.length === 0) && (<p className="mt-4">No items in Cart</p>)

                        }
                        {cartItems.map((cartItem) => (
                            <Container key={cartItem.id}>
                                <CartItem cartItem={cartItem} />
                            </Container>
                        ))
                        }
                        {
                            (cartItems.length > 0) && (<><hr className="dropdown-divider" />
                                <div className="d-flex justify-content-between px-2">
                                    <small className="text-muted text-uppercase">Total</small>
                                    <small className="fw-bolder">₹{total}</small>
                                </div>
                                <hr className="dropdown-divider" />
                                <Dropdown.Item className="text-secondary ">
                                    <p className="text-secondary btn btn-link" onClick={goToCheckOutHandler}>
                                        Checkout
                                    </p>
                                </Dropdown.Item>
                            </>)

                        }
                        {/* <hr className="dropdown-divider" />
                    <div className="d-flex justify-content-between px-2">
                        <small className="text-muted text-uppercase">Total</small>
                        <small className="fw-bolder">₹{total}</small>
                    </div>
                    <hr className="dropdown-divider" />
                    <Link className="text-secondary " to="/shop">
                        Checkout
                    </Link> */}
                    </ul>
                </DropdownButton >
                {

                    cartItems.length !== 0 ?
                        (<>
                            <small className="px-2 mt-2 position-absolute top-0 end-0 translate-middle-y text-light bg-dark rounded-circle">{cartQuantity}</small>
                        </>)
                        : (<>


                        </>)
                }

            </div>
        </>
    );
}

export default Cart;