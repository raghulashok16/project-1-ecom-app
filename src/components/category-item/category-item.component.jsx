import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import { Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import './category-item.styles.css';

const CategoryItem = ({ category }) => {
    const navigate = useNavigate();
    const onNavigationHandler = () => {
        navigate(category.route);
    }
    // const { imageUrl, title } = category;
    return (
        <Col xs={8} sm={6} md={5} lg={4} xl={3} className='mb-3 px-1'>
            <div className="hover-border-black ">

                <Card className='rounded-0 shadow-lg'>
                    <img src={category.imageUrl} className='img-fluid img-hover-zoom' alt="BigCo Inc. logo" />
                    {/* <Card.ImgOverlay> */}
                    {/* <Card.Title className='text-dark display-3 text-start align-middle'>
                            {category.title}
                        </Card.Title> */}
                    <p className='text-center fs-1 mb-0'>{category.title}</p>
                    <div className=" text-center"><Button className=" rounded-2 w-75 mb-3 opacity-75 " variant="outline-dark" onClick={onNavigationHandler}>Shop Now</Button>
                    </div>
                    {/* </Card.ImgOverlay> */}
                </Card>
            </div>
        </Col >
    )
}

export default CategoryItem;