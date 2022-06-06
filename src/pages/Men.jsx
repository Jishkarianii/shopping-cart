import axios from 'axios'
import { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { setProducts } from '../redux/action/pageProductsAction'
import { setIsLoad } from '../redux/action/pageProductsAction'
import ProductsPage from '../components/ProductsPage'
import Spinner from '../components/Spinner'

function Men() {
    const isLoaded = useSelector(state => state.pageProducts.isLoaded)
    const dispatch = useDispatch()

    useEffect(() => {
        window.scrollTo(0, 0)
        getMenProducts()
    }, [])
    
    const getMenProducts = async () => {
        dispatch(setIsLoad(false))
        const res = await axios.get("./local-json/productsData.json")
        dispatch(setProducts(filterForMen(res.data)))
        dispatch(setIsLoad(true))
    }

    const filterForMen = data => {
        return data.filter(item => item.for === "men")
    }

    return (
        <>
            {isLoaded ? (
                <ProductsPage 
                  title="MEN'S SNEAKERS"
                />  
            ) : (
                <Spinner />
            )}
        </>
    )
}

export default Men
