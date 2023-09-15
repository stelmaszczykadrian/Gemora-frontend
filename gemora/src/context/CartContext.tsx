import React, {createContext, useContext, useEffect, useState} from "react";
import {Product} from '../interfaces/ProductInterface';

import UserContext from "./UserContext";


export type CartContextType = {
    products: Product[];
    addProduct: (product: Product) => void;
    removeProduct: (product: Product) => void;
    increaseQuantity: (product: Product) => void;
    decreaseQuantity: (product: Product) => void;
    clearCart: () => void;
};

const defaultSettings: CartContextType = {
    products: [],
    addProduct: (product: Product) => {
    },
    removeProduct: (product: Product) => {
    },
    increaseQuantity: (product: Product) => {
    },
    decreaseQuantity: (product: Product) => {
    },
    clearCart: () => {
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
            const savedProduct = cartContents.find(p => p.id === product.id);

            if(savedProduct){
                savedProduct.quantity += product.quantity;
            }else{
                cartContents.push(product);
            }

            localStorage.setItem("cart", JSON.stringify(cartContents))

            setProducts([...cartContents]);

        } catch (error) {
            console.error("Error adding product to cart:", error);
        }
    };

    const removeProduct = (productToRemove: Product) => {
        try {
            const serializedCart = localStorage.getItem("cart");

            let cartContents: Product[] = [];
            if (serializedCart) {
                cartContents = JSON.parse(serializedCart);
            }

            const productIndex = cartContents.findIndex((product) => product.id === productToRemove.id);

            if (productIndex !== -1) {
                cartContents.splice(productIndex, 1);

                localStorage.setItem("cart", JSON.stringify(cartContents));

                setProducts(cartContents);

            } else {
                console.log("Product not found in cart");
            }
        } catch (error) {
            console.error("Error removing product from cart:", error);
        }
    };


    const changeQuantity = (productToIncrease: Product, amount: number) => {
        try {
            const serializedCart = localStorage.getItem("cart");

            let cartContents: Product[] = [];
            if (serializedCart) {
                cartContents = JSON.parse(serializedCart);
            }

            const productIndex = cartContents.findIndex((product) => product.id === productToIncrease.id);

            if (productIndex !== -1) {

                cartContents[productIndex].quantity += amount;

                localStorage.setItem("cart", JSON.stringify(cartContents));

                setProducts(cartContents);
            } else {
                console.log("Product not found in cart");
            }
        } catch (error) {
            console.error("Error increasing product quantity in cart:", error);
        }
    };

    const increaseQuantity = (productToIncrease: Product) => {
        changeQuantity(productToIncrease, 1)
    }

    const decreaseQuantity = (productToIncrease: Product) => {
        changeQuantity(productToIncrease, -1)
    }

    function clearCart() {
        try {
            localStorage.removeItem('cart');
            setProducts([]);
        } catch (error) {
            console.error("Error clearing cart:", error);
        }
    }


    return (
        <CartContext.Provider value={{products, addProduct, removeProduct, increaseQuantity, decreaseQuantity, clearCart }}>
            {children}
        </CartContext.Provider>
    );
};

export default CartContext;






