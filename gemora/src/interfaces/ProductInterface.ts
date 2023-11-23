export interface Product {
    id: number;
    name: string;
    description: string;
    manufacturer: string;
    category: string;
    price: number;
    image: string;
    quantity: number;

}

export interface SimplifiedProduct {
    id: number;
    name: string;
    quantity: number;
    price: number;
}