import { useParams, } from "react-router-dom";
import { useContext, useState, useEffect } from "react";
import { ProductsContext } from "../../contexts/products.context";
import ProductCard from '../../components/product-card/product-card.component';
import { Container, Row } from "react-bootstrap";
const Category = () => {
    const { category } = useParams();
    const { products } = useContext(ProductsContext);
    const [filProducts, setFilProducts] = useState(products[category]);


    useEffect(() => {
        setFilProducts(products[category]);
    }, [category, products]);

    return (
        <>
            <Container className="mt-3">
                <Row className="justify-content-evenly">
                    {filProducts &&
                        filProducts.map((product) => (
                            <ProductCard key={product.id} product={product} />
                        ))
                    }
                </Row>
            </Container>

        </>
    );
}

export default Category;