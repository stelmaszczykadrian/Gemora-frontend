export const formatPrice = (price: number) => {
    return `£${price.toFixed(2)}`;
};


export function groupBy<T>(arr: T[], fn: (item: T) => any) {
    return arr.reduce<Record<string, T[]>>((prev, curr) => {
        const groupKey = fn(curr);
        const group = prev[groupKey] || [];
        group.push(curr);
        return { ...prev, [groupKey]: group };
    }, {});
}

export const calculateTotal = (products: Array<{ price: number; quantity: number; }>) => {
    let total = 0;
    products.forEach((item) => {
        total += item.price * item.quantity;
    });
    return total;
};
