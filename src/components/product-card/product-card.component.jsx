import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import BstButton from '../button/button.component';
import { useContext } from 'react';
import { CartContext } from '../../contexts/cart.context';

const ProductCard = ({ product }) => {
    const { addItemToCart } = useContext(CartContext);
    const { id, imageUrl, name, price, mrp } = product;
    const clickToAddToCart = () => {
        addItemToCart(product);
    }
    return (
        <>
            <Col className='mb-2 rounded-0' xs={6} sm={5} lg={4} xl={3}   >
                <Card className='rounded-0 shadow-sm' >
                    <Card.Img variant="top" className='rounded-0' src={imageUrl} />
                    <Card.Body className='text-start'>
                        <p className='mb-0'>Delter&#8482;</p>
                        <Card.Title className='my-0'>{name}</Card.Title>
                        <p className='my-0 p-0 text-secondary'><s>₹{mrp}</s></p>
                        {/* <Card.Text><p className='text-secondary my-0'></p></Card.Text> */}
                        <Card.Text className=' mt-0'>₹{price}</Card.Text>
                        <BstButton buttonType='darkInverted' onClick={clickToAddToCart} className='w-100' >Add to Cart</BstButton>
                    </Card.Body>
                </Card>
            </Col>
        </>
    )
}

export default ProductCard;