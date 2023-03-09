import Directory from "../../components/directory/directory.component";
import { Outlet } from "react-router-dom";
const Home = () => {
    const categories = [
        {
            "id": 1,
            "title": "Hats",
            "imageUrl": "https://i.ibb.co/v1dSwtm/Untitled-design-2.jpg"
        },
        {
            "id": 2,
            "title": "Mens",
            "imageUrl": "https://i.ibb.co/TYFXzWQ/Untitled-design.jpg"
        },

        {
            "id": 3,
            "title": "Womens",
            "imageUrl": "https://i.ibb.co/g3STtSZ/Untitled-design-4.jpg"
        },
        {
            "id": 4,
            "title": "Sneakers",
            "imageUrl": "https://i.ibb.co/fYmRpDS/Untitled-design-3.jpg"
        },
        {
            "id": 5,
            "title": "Jackets",
            "imageUrl": "https://i.ibb.co/vwTtFXy/Untitled-design-5.jpg"
        },
        {
            "id": 6,
            "title": "Watches",
            "imageUrl": "https://i.ibb.co/41SPZcS/Untitled-design-6.jpg"
        },

    ]

    return (
        <div>
            {/* <Outlet /> */}
            <Directory categories={categories} />
        </div>
    );
}


export default Home;