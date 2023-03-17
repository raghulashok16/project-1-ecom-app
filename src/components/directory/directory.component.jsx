import CategoryItem from '../category-item/category-item.component';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';

const categories = [
    {
        "id": 1,
        "title": "Hat",
        "imageUrl": "https://images.bewakoof.com/t1080/panda-camo-baseball-cap-548242-1672908087-1.jpg",
        "route": 'shop/hats'
    },
    {
        "id": 2,
        "title": "Men",
        "imageUrl": "https://images.bewakoof.com/t1080/create-good-stories-half-sleeve-t-shirt-black-283013-1655749405-1.jpg",
        "route": 'shop/men'
    },

    {
        "id": 3,
        "title": "Women",
        "imageUrl": "https://images.bewakoof.com/t1080/women-s-black-one-with-the-universe-graphic-printed-boyfriend-t-shirt-483055-1655748960-1.jpg",
        "route": 'shop/women'
    },
    {
        "id": 4,
        "title": "Sneaker",
        "imageUrl": "https://images.bewakoof.com/t1080/men-s-seagreen-color-block-casual-shoes-582195-1677831324-1.JPG",
        "route": 'shop/sneaker'
    },
    {
        "id": 5,
        "title": "Jacket",
        "imageUrl": "https://images.bewakoof.com/t1080/men-s-white-color-block-windcheater-491990-1664882378-2.jpg",
        "route": 'shop/jacket'
    },
    {
        "id": 6,
        "title": "Mug",
        "imageUrl": "https://images.bewakoof.com/t1080/aot-emblems-coffee-mug-320-ml-554204-1668595701-1.jpg",
        "route": 'shop/hats'
    },
    {
        "id": 7,
        "title": "Mobile Cover",
        "imageUrl": "https://images.bewakoof.com/t1080/japanese-animated-premium-glass-case-for-apple-iphone-14-pro-max-shock-proof-scratch-resistant-560357-1670852932-1.jpg",
        "route": 'shop/hats'
    },

]

const Directory = () => {
    return (
        <Container className='mt-4'>
            <Row className='justify-content-center'>

                {categories.map((category) => (
                    <CategoryItem key={category.id} category={category} />
                ))}

            </Row>
        </Container>

    )
}
export default Directory;
