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
        window.scrollTo(0, 0)
        getAllProducts()
    }, [])
    
    const getAllProducts = async () => {
        dispatch(setIsLoad(false))
        const res = await axios.get("./local-json/productsData.json")
        dispatch(setProducts(res.data))
        dispatch(setIsLoad(true))
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
