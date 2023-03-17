import Container from 'react-bootstrap/Container';
import Table from 'react-bootstrap/Table';
import { useContext } from "react";
import { CartContext } from "../../contexts/cart.context";

import './checkout.styles.css';
import CheckOutItem from '../../components/checkout-item/checkout-item.component';
import { Col, Row } from 'react-bootstrap';


const CheckOut = () => {
    const { cartItems, total } = useContext(CartContext);
    console.log(cartItems.length)
    return (
        <Container className='my-4 px-5'>
            <Row className='justify-content-center'>
                <Col sm={12} md={10} xl={8}>

                    <Table className='bg-light shadow-sm text-center align-middle mb-0'>
                        <thead>
                            <tr>
                                <th>Product</th>
                                <th>Name</th>
                                <th>Quantity</th>
                                <th>Price</th>
                                <th>Remove</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                cartItems.map((cartItem) => (
                                    <CheckOutItem key={cartItem.id} cartItem={cartItem} />
                                ))
                            }
                        </tbody>
                    </Table>
                    <div className="d-flex justify-content-between p-5 bg-light mt-0 fs-4">
                        {

                            cartItems.length !== 0 ?
                                (<>
                                    <small className="text-muted text-uppercase">Total</small>
                                    <small className="fw-bolder">₹ {total}</small>
                                </>)
                                : (<>
                                    <small className="text-muted text-uppercase">Your Cart is Empty</small>

                                </>)
                        }

                    </div>
                </Col>
            </Row>
        </Container>
    );
}

export default CheckOut;