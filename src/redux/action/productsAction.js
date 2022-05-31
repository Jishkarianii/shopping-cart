export const fetchProductsRequest = () => {
    return {
        type: "FETCH_PRODUCTS_REQUEST"
    }
}

export const fetchProductsSuccsess = products => {
    return {
        type: "FETCH_PRODUCTS_SUCCESS",
        payload: products
    }
}

export const fetchProductsFailure = error => {
    return {
        type: "FETCH_PRODUCTS_FAILURE",
        payload: error
    }
}
