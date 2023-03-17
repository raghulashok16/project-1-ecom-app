import { useContext } from "react";
import { CartContext } from "../../contexts/cart.context";
import './checkout-item.styles.css';
import { ReactComponent as Bin } from '../../assets/bin.svg';

const CheckOutItem = ({ cartItem }) => {
    const { addItemToCart, decreaseItemfromCart, deleteItemfromCart } = useContext(CartContext);
    const incrementHandler = () => {
        addItemToCart(cartItem);
    }
    const decrementHandler = () => {
        decreaseItemfromCart(cartItem);
    }
    const removeHandler = () => {
        deleteItemfromCart(cartItem);
    }
    return (
        <>
            <tr>
                <td style={{ height: "10vw", width: "10vw" }}><img src={cartItem.imageUrl} className="img-fluid" alt={" "} /></td>
                <td className='fs-4 p-0'>{cartItem.name}</td>
                <td className='fs-5 p-0'>
                    <small className='me-3 fs-2 fw-bolder handSymbol' onClick={decrementHandler} >&lsaquo;</small>{cartItem.quantity}<small className='ms-3 fs-2 fw-bolder handSymbol' onClick={incrementHandler} >&rsaquo;</small>
                </td>
                <td className='fs-5 p-0'>₹{cartItem.price}</td>
                <td className='fs-5 p-0 '><span className='handSymbol' onClick={removeHandler}><Bin />
                </span></td>
            </tr>
        </>
    );
}

export default CheckOutItem;
