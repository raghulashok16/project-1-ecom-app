import { createContext, useState, useEffect } from "react";
import SHOP_DATA from '../shop-data.js';
import { addCollectionAndDocument, getCategoriesAndDocuments } from '../utils/firebase/firebase.utils';
export const ProductsContext = createContext({
    products: {},
});

export const ProductsProvider = ({ children }) => {
    const [products, setProducts] = useState({});
    // push our product array into fire store database........

    useEffect(() => {
        addCollectionAndDocument('categories', SHOP_DATA);
    }, [])

    // pull our products array from fire store database........
    useEffect(() => {
        const getCategoriesMap = async () => {
            const categoryMap = await getCategoriesAndDocuments();
            setProducts(categoryMap);
        }
        getCategoriesMap();
    }, [])

    const value = { products, setProducts }
    return (
        <ProductsContext.Provider value={value}>{children}</ProductsContext.Provider>
    )
};