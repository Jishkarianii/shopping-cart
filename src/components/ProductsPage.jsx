import "./ProductsPage.scss"
import { useState } from "react";
import { motion } from "framer-motion"
import TuneIcon from '@mui/icons-material/Tune';
import ProductsPageItem from "./ProductsPageItem";

function ProductsPage({ title, products }) {
    const [showSort, setShowSort] = useState(false)
    const [choosedOption, setChoosedOption] = useState("Filter & Sort")

    // Responsive for grid container

    return (
        <section className='products-page container'>
         <div className="products-page-head">
                <h2>{title}</h2>
                <div 
                    className="sort-products" 
                    onClick={() => {
                        setShowSort(!showSort)
                    }}
                >
                    {choosedOption} <TuneIcon />
                    {showSort && (
                        <motion.div
                            className="sort-options"
                            initial={{ 
                                scale: 0.7,
                                top: "25px"
                            }}
                            animate={{ 
                                scale: 1,
                                top: "50px"
                            }}
                            transition={{ duration: 0.1 }}
                        >
                            <span
                                className={choosedOption === "Newest" ? "active" : ""}
                                onClick={() => setChoosedOption("Newest")}
                            >
                                Newest
                            </span>
                            <span
                                className={choosedOption === "Price (high - low)" ? "active" : ""}
                                onClick={() => setChoosedOption("Price (high - low)")}
                            >
                                Price (high - low)
                            </span>
                            <span
                                className={choosedOption === "Price (low - high)" ? "active" : ""}
                                onClick={() => setChoosedOption("Price (low - high)")}
                            >
                                Price (low - high)
                            </span>
                        </motion.div>
                    )}
                </div>
            </div>
            {showSort && (
                <div
                    className="sort-close" 
                    onClick={() => {
                        setShowSort(!showSort)
                    }}
                ></div>
            )}
            <div className="products-page-content">
                {products.map(product => (
                    <ProductsPageItem 
                        key={product.id}
                        defaultPhoto={product.photo_1}
                        hoverPhoto={product.photo_2}
                        currentPrice={product.currentPrice}
                        oldPrice={product.oldPrice}
                        title={product.title}
                    />
                ))}
            </div>
        </section>
    )
}

export default ProductsPage
