export const setIsLoad = value => {
    return {
        type: "SET_IS_LOAD",
        payload: value
    }
}

export const setProducts = products => {
    return {
        type: "SET_PRODUCTS",
        payload: products
    }
}

export const setFiltered = products => {
    return {
        type: "SET_FILTERED",
        payload: products
    }
}
