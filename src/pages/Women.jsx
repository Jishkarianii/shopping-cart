import axios from 'axios'
import { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { setProducts } from '../redux/action/pageProductsAction'
import { setIsLoad } from '../redux/action/pageProductsAction'
import ProductsPage from '../components/ProductsPage'
import Spinner from '../components/Spinner'

function Women() {
    const isLoaded = useSelector(state => state.pageProducts.isLoaded)
    const dispatch = useDispatch()

    useEffect(() => {
        window.scrollTo(0, 0)
        getWomenProducts()
    }, [])
    
    const getWomenProducts = async () => {
        dispatch(setIsLoad(false))
        const res = await axios.get("./local-json/productsData.json")
        dispatch(setProducts(filterForWomen(res.data)))
        dispatch(setIsLoad(true))
    }

    const filterForWomen = data => {
        return data.filter(item => item.for === "women")
    }

    return (
        <>
            {isLoaded ? (
                <ProductsPage 
                  title="WOMEN'S SNEAKERS"
                />  
            ) : (
                <Spinner />
            )}
        </>
    )
}

export default Women
