const initialState = {
    isLoaded: false,
    products: [],
    filtered: []
}

const pageProductsReducer = (state = initialState, action) => {
    switch(action.type) {
        case "SET_IS_LOAD": 
            return {
                ...state, 
                isLoaded: action.payload
            }
        case "SET_PRODUCTS":
            return {
                ...state,
                products: action.payload
            }
        case "SET_FILTERED":
            return {
                ...state,
                filtered: action.payload
            }
        default:
            return state;
    }
}

export default pageProductsReducer
