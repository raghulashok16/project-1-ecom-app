import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import { Button } from 'react-bootstrap';
import Badge from 'react-bootstrap/Badge';
import './category-item.styles.css';
const CategoryItem = ({ category }) => {
    // const { imageUrl, title } = category;
    return (
        <Col xs={8} sm={6} md={5} lg={4} xl={3} className='mb-3 px-1 '>
            <div className="position-relative hover-border-black">
                <Card className='rounded-0'>
                    <img src={category.imageUrl} className='img-fluid' alt="BigCo Inc. logo" />
                    <Card.ImgOverlay>
                        <Card.Title className='text-dark display-3 text-start align-middle'>
                            {category.title}
                        </Card.Title>

                        <div className="position-absolute bottom-0 start-0 ps-3 pb-3"><Button className=" rounded-2 opacity-75 " variant="outline-dark">Shop Now</Button>
                        </div>
                    </Card.ImgOverlay>
                </Card>
            </div>
        </Col >
    )
}

export default CategoryItem;