import { useState } from "react"
import "./ProductsPageItem.scss"

function ProductsPageItem({ defaultPhoto, hoverPhoto, currentPrice, oldPrice, title }) {
    const [photo, setPhoto] = useState(defaultPhoto)

    return (
        <div 
            className="product-item" 
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
