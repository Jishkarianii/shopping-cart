export const addToBag = product => {
    return {
        type: "ADD_TO_BAG",
        payload: product
    }
}

export const removeFromBag = id => {
    return {
        type: "REMOVE_FROM_BAG",
        payload: id
    }
}

export const incrementItem = id => {
    return {
        type: "INCREMEN_ITEM",
        payload: id
    }
}

export const decrementItem = id => {
    return {
        type: "DECREMEN_ITEM",
        payload: id
    }
}
