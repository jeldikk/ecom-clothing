

export const addItemToCart = (cartItems, ItemToAdd) => {

    const itemExists = cartItems.find(item => item.id === ItemToAdd.id);

    if(itemExists){

        return cartItems.map(item => {
            return {
                ...item,
                quantity: item.quantity + 1
            }
        })

    }

    return [...cartItems, {...ItemToAdd, quantity: 1}];
}