

export const calculateOrdersQuantity = (orders) => {
    return orders.reduce((total, order) =>{
        const orderQuantity = order.products.reduce((sum, product) =>
            sum + product.quantity,0)
        return total + orderQuantity;
    },0)
}