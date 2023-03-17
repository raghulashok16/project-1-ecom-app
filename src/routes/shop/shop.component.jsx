import ShopProductPreview from "../../components/shop-preview/shop-preview.component";
import Category from '../category/category.component';
import { Route, Routes } from "react-router-dom";

const Shop = () => {
    return (
        <>
            <Routes>
                <Route index element={<ShopProductPreview />} />
                <Route path=":category" element={<Category />} />
            </Routes>
        </>
    );
}

export default Shop;