import React, {createContext, useContext, useEffect, useState} from "react";
import {Product} from '../components/product/ProductInterface';

import UserContext from "./UserContext";


export type CartContextType = {
    products: Product[];
    addProduct: (product: Product) => void;
    removeProduct: (product: Product) => void;
};

const defaultSettings: CartContextType = {
    products: [],
    addProduct: (product: Product) => {
    },
    removeProduct: (product: Product) => {
    },
};

export const CartContext = createContext<CartContextType>(defaultSettings);

export const CartContextProvider = ({children}: React.PropsWithChildren) => {
    const [products, setProducts] = useState<Product[]>([]);
    const {currentUser} = useContext(UserContext);

    useEffect(() => {
        const fetchCartContents = () => {
            try {

                const serializedCart = localStorage.getItem("cart")

                if (!serializedCart) {
                    return;
                }

                const cartContents = JSON.parse(serializedCart)

                console.log(cartContents)
                setProducts(cartContents);
            } catch (error) {
                console.error("Error fetching cart contents:", error);
            }
        };

        fetchCartContents();
        return () => {
        };
    }, [currentUser]);


    const addProduct = (product: Product) => {
        try {
            const serializedCart = localStorage.getItem("cart")


            let cartContents: Product[]
            if (serializedCart) {
                cartContents = JSON.parse(serializedCart)
            } else {
                cartContents = [];
            }

            cartContents.push(product)
            localStorage.setItem("cart", JSON.stringify(cartContents))

            setProducts([...products, product]);
            console.log(products)

        } catch (error) {
            console.error("Error adding product to cart:", error);
        }
    };


    const removeProduct = async (product: Product) => {
        // try {
        //     await removeFromCart(product); // Implementacja funkcji removeFromCart z Twojego API
        //     const updatedProducts = products.filter((item) => item.id !== product.id);
        //     setProducts(updatedProducts);
        // } catch (error) {
        //     console.error("Error removing product from cart:", error);
        // }
    };

    return (
        <CartContext.Provider value={{products, addProduct, removeProduct}}>
            {children}
        </CartContext.Provider>
    );
};

export default CartContext;






