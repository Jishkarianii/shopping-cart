const initialState = {
    amount: 0,
    products: [],
    original: 0,
    total: 0
}

const checkoutReducer = (state = initialState, action) => {
    let amount, original, total;

    switch (action.type) {
        case "ADD_TO_BAG":
            let newProducts;
            let productCheck = false;

            // Check this product is existing in products array
            state.products.forEach(item => {
                if (item.id === action.payload.id) {
                    productCheck = true;
                }
            })

            // If yes update it or not just add it 
            if (productCheck) {
                newProducts = state.products.map(product => {
                    if (product.id === action.payload.id) {
                        return {
                            id: product.id,
                            title: product.title,
                            subTitle: product.subTitle,
                            photo: product.photo,
                            currentPrice: product.currentPrice + action.payload.currentPrice,
                            oldPrice: product.oldPrice + action.payload.oldPrice,
                            amount: product.amount + action.payload.amount
                        }
                    }

                    return product
                })
            } else {
                newProducts = [...state.products, action.payload]
            }

            // Save on localStorage
            localStorage.setItem("bag", JSON.stringify({
                amount: state.amount + action.payload.amount,
                products: newProducts,
                original: action.payload.oldPrice ? state.original + action.payload.oldPrice : state.original + action.payload.currentPrice,
                total: state.total + action.payload.currentPrice
            }))

            return {
                amount: state.amount + action.payload.amount,
                products: newProducts,
                original: action.payload.oldPrice ? state.original + action.payload.oldPrice : state.original + action.payload.currentPrice,
                total: state.total + action.payload.currentPrice
            }
            
        case "REMOVE_FROM_BAG": 

            // Searching for product in order to get its amount and price
            state.products.forEach(item => {
                if (item.id === action.payload) {
                    amount = item.amount;
                    original = item.oldPrice ? item.oldPrice : item.currentPrice;
                    total = item.currentPrice;
                }
            })

            // Save on localStorage
            localStorage.setItem("bag", JSON.stringify({
                amount: state.amount - amount,
                products: state.products.filter(product => product.id !== action.payload),
                original: state.original - original,
                total: state.total - total
            }))

            return {
                amount: state.amount - amount,
                products: state.products.filter(product => product.id !== action.payload),
                original: state.original - original,
                total: state.total - total
            }
        
        case "INCREMEN_ITEM":
            // Searching for product in order to increment it by one
            const incrementedProducts = state.products.map(product => {
                if (product.id === action.payload) {
                    original = product.oldPrice / product.amount;
                    total = product.currentPrice / product.amount;

                    return {
                        id: product.id,
                        title: product.title,
                        subTitle: product.subTitle,
                        photo: product.photo,
                        currentPrice: product.currentPrice + (product.currentPrice / product.amount),
                        oldPrice: product.oldPrice + (product.oldPrice / product.amount),
                        amount: product.amount + 1
                    }
                }

                return product
            })
            
            // Save on localStorage
            localStorage.setItem("bag", JSON.stringify({
                amount: state.amount + 1,
                products: incrementedProducts,
                original: original ? state.original + original : state.original + total,
                total: state.total + total
            }))

            return {
                amount: state.amount + 1,
                products: incrementedProducts,
                original: original ? state.original + original : state.original + total,
                total: state.total + total
            }
        
        case "DECREMEN_ITEM":
            // Searching for product in order to decrement it by one
            const decrementedProducts = state.products.map(product => {
                if (product.id === action.payload) {
                    original = product.oldPrice / product.amount;
                    total = product.currentPrice / product.amount;

                    return {
                        id: product.id,
                        title: product.title,
                        subTitle: product.subTitle,
                        photo: product.photo,
                        currentPrice: product.currentPrice - (product.currentPrice / product.amount),
                        oldPrice: product.oldPrice - (product.oldPrice / product.amount),
                        amount: product.amount - 1
                    }
                }

                return product
            })

            // Save on localStorage
            localStorage.setItem("bag", JSON.stringify({
                amount: state.amount - 1,
                products: decrementedProducts,
                original: original ? state.original - original : state.original - total,
                total: state.total - total
            }))

            return {
                amount: state.amount - 1,
                products: decrementedProducts,
                original: original ? state.original - original : state.original - total,
                total: state.total - total
            }

        case "SET_DATA_FROM_LOCALSTORAGE":
            return {
                amount: action.payload.amount,
                products: action.payload.products,
                original: action.payload.original,
                total: action.payload.total
            }

        default:
            return state;
    }
}

export default checkoutReducer