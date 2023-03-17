import { Col, Row } from "react-bootstrap";
const CartItem = ({ cartItem }) => {
    // const { imageUrl, id, name, mrp, price } = cartItem;

    return (
        <>
            <Row className="shadow-sm justify-content-evenly align-items-center p-2">
                <Col xs={4}>
                    <img src={cartItem.imageUrl} className="img-fluid" alt={" "} />
                </Col>
                <Col className='text-start ' xs={5}>
                    <h3 className="fs-4 fw-bolder">{cartItem.name}</h3>
                    <small className="text-muted">Quantity : {cartItem.quantity}</small>
                    <div className="w-100"></div>
                    <small className="fw-bolder">₹{cartItem.price}</small>
                </Col>
            </Row>
        </>
    );

}

export default CartItem;