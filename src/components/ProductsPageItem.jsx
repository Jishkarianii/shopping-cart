import { useState } from "react"
import { useNavigate } from "react-router-dom"
import "./ProductsPageItem.scss"

function ProductsPageItem({ id, defaultPhoto, hoverPhoto, currentPrice, oldPrice, title }) {
    const [photo, setPhoto] = useState(defaultPhoto)
    const navigate = useNavigate()

    const navigateHendler = () => {
        navigate(`/product?id=${id}`)
    }

    return (
        <div 
            className="product-item" 
            onClick={navigateHendler}
            onMouseEnter={() => setPhoto(hoverPhoto)}
            onMouseOut={() => setPhoto(defaultPhoto)}
        >
            <div className="product-photo">
                <img src={photo} alt="shoes" />
                <div className="product-price">
                    {oldPrice !== null ? (
                    <>
                        <span className="old-price active">${oldPrice}</span>
                        <span className="current-price active">${currentPrice}</span>
                    </>
                    ) : (
                        <span className="current-price">${currentPrice}</span>
                    )}
                </div>
            </div>
            <div className="product-info">
                <h5>{title}</h5>
                <p>Orginals</p>
                <span>best seller</span>
            </div>
        </div>
    )
}

export default ProductsPageItem
