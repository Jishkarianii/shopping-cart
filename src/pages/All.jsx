import axios from 'axios'
import { useEffect, useState } from 'react'
import ProductsPage from '../components/ProductsPage'
import Spinner from '../components/Spinner'

function All() {
    const [allProducts, setAllProducts] = useState([])
    const [isLoaded, setIsLoaded] = useState(false)

    useEffect(() => {
        getAllProducts()
    }, [])

    const getAllProducts = async () => {
        const res = await axios.get("./local-json/productsData.json")
        setAllProducts(res.data)
        setIsLoaded(true)
    }

    return (
        <>
            {isLoaded ? (
                <ProductsPage 
                    title="ALL PRODUCTS"
                    products={allProducts}
                />
            ) : (
                <Spinner />
            )}
        </>
    )
}

export default All
