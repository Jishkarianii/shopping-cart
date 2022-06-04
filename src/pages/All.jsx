import axios from 'axios'
import { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { setProducts } from '../redux/action/pageProductsAction'
import { setIsLoad } from '../redux/action/pageProductsAction'
import ProductsPage from '../components/ProductsPage'
import Spinner from '../components/Spinner'

function All() {
    const isLoaded = useSelector(state => state.pageProducts.isLoaded)
    const dispatch = useDispatch()

    useEffect(() => {
        getAllProducts()
    }, [])
    
    const getAllProducts = async () => {
        const res = await axios.get("./local-json/productsData.json")
        dispatch(setProducts(res.data))
        dispatch(setIsLoad())
    }

    return (
        <>
            {isLoaded ? (
                <ProductsPage 
                  title="ALL PRODUCTS"
                />  
            ) : (
                <Spinner />
            )}
        </>
    )
}

export default All
