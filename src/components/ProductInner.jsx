import "./ProductInner.scss"
import axios from "axios"
import { useEffect, useState } from "react"
import { useSearchParams } from "react-router-dom"
import Spinner from "./Spinner"
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import Button from "./Button"

function ProductInner() {    
    const [product, setProduct] = useState({})
    const [isLoaded, setIsLoaded] = useState(false)
    const [photo, setPhoto] = useState({})
    const [amount, setAmount] = useState(1)
    const [price, setPrice] = useState(0)
    const [oldPrice, setOldPrice] = useState(0)
    const [searchParams] = useSearchParams();

    useEffect(() => {
        window.scrollTo(0, 0)
        getProductById()
    }, [])
    
    const getProductById = async () => {
        const res = await axios.get("./local-json/productsData.json")
        const matchedProduct = res.data.filter(product => product.id == searchParams.get("id"))
        setPhoto({ url: matchedProduct[0].photo_1, id: 1 })
        setPrice(matchedProduct[0].currentPrice)
        setOldPrice(matchedProduct[0].oldPrice)
        setProduct(matchedProduct[0])
        setIsLoaded(true)
    }

    const addProduct = () => {
        setAmount(amount + 1)
        setPrice(price + product.currentPrice)
        setOldPrice(oldPrice + product.oldPrice)
    }
    
    const removeProduct = () => {
        if (amount === 1) return
        setAmount(amount - 1)
        setPrice(price - product.currentPrice)
        setOldPrice(oldPrice - product.oldPrice)
    }

    return (
        <section className="product-inner container">
            {isLoaded ? (
                <div className="product-wrapper">
                    <div className="product-photos">
                        <div className="chosen-photo">
                            <img src={photo.url} alt="shoes" />
                        </div>
                        <div className="all-photos">
                            <img 
                                className={photo.id === 1 ? "active" : ""}
                                src={product.photo_1} 
                                alt="shoes"
                                onClick={() => {
                                    setPhoto({ url: product.photo_1, id: 1 })
                                }} 
                            />
                            <img 
                                className={photo.id === 2 ? "active" : ""}
                                src={product.photo_2} 
                                alt="shoes"
                                onClick={() => {
                                    setPhoto({ url: product.photo_2, id: 2 })
                                }} 
                            />
                            <img 
                                className={photo.id === 3 ? "active" : ""}
                                src={product.photo_3} 
                                alt="shoes"
                                onClick={() => {
                                    setPhoto({ url: product.photo_3, id: 3 })
                                }} 
                            />
                            <img 
                                className={photo.id === 4 ? "active" : ""}
                                src={product.photo_4} 
                                alt="shoes"
                                onClick={() => {
                                    setPhoto({ url: product.photo_4, id: 4 })
                                }} 
                            />
                        </div>
                    </div>
                    <div className="product-info">
                        <h2>{product.title}</h2>
                        <h4>{product.subTitle}</h4>
                        <p>{product.description}</p>
                        {product.oldPrice === null ? (
                            <span className="current-price">${price}.00</span>
                        ) : (
                            <>
                                <span className="current-price active">${price}.00</span>
                                <span className="old-price">${oldPrice}.00</span>
                            </>
                        )}
                        <div className="product-buy-cont">
                            <div className="product-amount">
                                <RemoveIcon onClick={removeProduct} />
                                <span>{amount}</span>
                                <AddIcon onClick={addProduct} />
                            </div>
                            <Button text="ADD TO BAG" />
                        </div>
                    </div>
                </div>
            ) : (
                <Spinner />
            )}
        </section>
    )
}

export default ProductInner
