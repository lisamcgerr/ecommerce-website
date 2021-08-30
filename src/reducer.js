export const initialState = {
    basket: [],
}

//selector - add the item price to the total amount and the starting value is 0
//reduce() iterates through the basket and gets the total amount 
export const getBasketTotal = ( basket ) => 
    basket?.reduce((amount, item) => item.price + amount, 0)

const reducer = ( state, action ) => {
    console.log(action)
    //checking the action when clicked
    switch(action.type){
        case 'ADD_TO_BASKET':
            return {
                ...state, 
                basket: [...state.basket, action.item]
            }
        case 'REMOVE_FROM_BASKET':
            const index = state.basket.findIndex(
                (basketItem) => basketItem.id === action.id
            )
            let newBasket = [...state.basket]
            if ( index >= 0 ) {
                newBasket.splice(index, 1)
            } else {
                console.warn(`Cant remove product(id: ${action.id}) as its not in basket`)
            }
            return {
                ...state,
                basket: newBasket
            }
        default:
            return state;
    }

}

export default reducer 