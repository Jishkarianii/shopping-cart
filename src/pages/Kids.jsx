import axios from 'axios'
import { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { setProducts } from '../redux/action/pageProductsAction'
import { setIsLoad } from '../redux/action/pageProductsAction'
import ProductsPage from '../components/ProductsPage'
import Spinner from '../components/Spinner'

function Kids() {
    const isLoaded = useSelector(state => state.pageProducts.isLoaded)
    const dispatch = useDispatch()

    useEffect(() => {
        window.scrollTo(0, 0)
        getKidsProducts()
    }, [])
    
    const getKidsProducts = async () => {
        dispatch(setIsLoad(false))
        const res = await axios.get("./local-json/productsData.json")
        dispatch(setProducts(filterForKids(res.data)))
        dispatch(setIsLoad(true))
    }

    const filterForKids = data => {
        return data.filter(item => item.for === "kids")
    }

    return (
        <>
            {isLoaded ? (
                <ProductsPage 
                  title="KID'S SNEAKERS"
                />  
            ) : (
                <Spinner />
            )}
        </>
    )
}

export default Kids
