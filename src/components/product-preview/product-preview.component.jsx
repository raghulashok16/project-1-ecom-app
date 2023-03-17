import { Fragment } from 'react';
import { useNavigate } from 'react-router-dom';
import ProductCard from '../../components/product-card/product-card.component';
import './product-preview.styles.css';
const ProductPreview = ({ title, products }) => {
    const navigate = useNavigate();
    const onNavigationHandler = () => {
        navigate(title);
    }
    return (
        <Fragment>
            <p className='mt-3 align-items-middle' >
                <span className='fs-1 me-5 mt-5'>{title.toUpperCase()}</span> <span className=' link-secondary' onClick={onNavigationHandler}><u className='snhand'>Shop Now..</u></span>
            </p>
            <>
                {
                    products
                        .filter((_, index) => index < 4)
                        .map((product) =>
                            <ProductCard key={product.id} product={product} />
                        )
                }
            </>
        </Fragment>
    );

}

export default ProductPreview;