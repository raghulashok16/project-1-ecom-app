import CategoryItem from '../category-item/category-item.component';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';

const Directory = ({ categories }) => {
    return (
        <Container className='mt-5'>
            <Row className='justify-content-center'>

                {categories.map((category) => (
                    <CategoryItem key={category.id} category={category} />
                ))}

            </Row>
        </Container>

    )
}
export default Directory;
