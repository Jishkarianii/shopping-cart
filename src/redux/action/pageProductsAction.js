export const setIsLoad = () => {
    return {
        type: "SET_IS_LOAD"
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
