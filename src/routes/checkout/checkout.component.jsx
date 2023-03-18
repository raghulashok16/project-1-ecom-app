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
        <Container className='my-4 '>
            <Row className='justify-content-center'>
                <Col sm={12} md={10} xl={8}>

                    <Table className='bg-light shadow-sm text-center align-middle mb-0 '>
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

                            {
                                cartItems.length !== 0 ?
                                    (<tr >
                                        <td className="text-muted text-uppercase">Total</td>
                                        <td className="fw-bolder"></td>
                                        <td className="fw-bolder"></td>
                                        <td className="fw-bolder"></td>
                                        <td className="fw-bolder py-4 fs-5">₹ {total}</td>
                                    </tr>)
                                    : (<tr>
                                        <td colSpan={5} className='text-center text-muted text-uppercase '>Your Cart is Empty</td>
                                    </tr>)
                            }

                        </tbody>
                    </Table>

                </Col>
            </Row>
        </Container>
    );
}

export default CheckOut;