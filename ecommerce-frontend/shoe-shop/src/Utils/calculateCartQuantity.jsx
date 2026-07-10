

export const calculateCartQuantity = (cart) => {
 
    return cart.reduce((total, item)=> total + item.quantity, 0)};