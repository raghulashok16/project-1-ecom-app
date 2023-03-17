import { useContext } from 'react';
import { ProductsContext } from '../../contexts/products.context';
import ProductPreview from '../../components/product-preview/product-preview.component';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';

const ShopProductPreview = () => {
    const { products } = useContext(ProductsContext);
    return (
        <>
            <Container >
                <Row className='text-center justify-content-center '>
                    {
                        Object.keys(products).map((title) => {
                            const filteredProducts = products[title];
                            return <ProductPreview key={title} title={title} products={filteredProducts} />
                        })
                    }
                </Row>
            </Container>
        </>
    );
}

export default ShopProductPreview;