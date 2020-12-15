

export const addItemToCart = (cartItems, ItemToAdd) => {

    const itemExists = cartItems.find(item => item.id === ItemToAdd.id);

    if(itemExists){

        return cartItems.map(item => { 
            if(item.id === ItemToAdd.id)
                return {
                    ...item,
                    quantity: item.quantity + 1
                }
            else
                return item;
        })

    }

    return [...cartItems, {...ItemToAdd, quantity: 1}];
}



export const removeItemFromCart = (cartItems, itemToRemove) => {

    return cartItems.filter((item) => item.id !== itemToRemove.id)
}



export const modifyItemQuantity = (cartItems, itemToModify, quantity) => {
    return cartItems.map((item) => {
        if(item.id === itemToModify.id){
            return {
                ...itemToModify,
                quantity: quantity
            }
        }
        return item
    })
}