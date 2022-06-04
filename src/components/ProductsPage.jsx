import "./ProductsPage.scss"
import { useState, useEffect } from "react";
import { motion } from "framer-motion"
import TuneIcon from '@mui/icons-material/Tune';
import ProductsPageItem from "./ProductsPageItem";

function ProductsPage({ title, products }) {
    const [showSort, setShowSort] = useState(false)
    const [sortedProducts, setSortedProducts] = useState(products)
    const [chosenOption, setChosenOption] = useState("Filter & Sort")

    useEffect(() => {
        sortHendler()
    }, [chosenOption])

    // Sort products by chosen option
    const sortHendler = () => {
        if (chosenOption === "Newest") {
            setSortedProducts(products)
        } else if (chosenOption === "Price (high - low)") {
            const sorted = [...products].sort((a, b) => b.currentPrice - a.currentPrice)
            setSortedProducts(sorted)
        } else if (chosenOption === "Price (low - high)") {
            const sorted = [...products].sort((a, b) => a.currentPrice - b.currentPrice)
            setSortedProducts(sorted)
        }
    }

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
                    <span className="chosen-option">{chosenOption}</span> <TuneIcon />
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
                                className={chosenOption === "Newest" ? "active" : ""}
                                onClick={() => setChosenOption("Newest")}
                            >
                                Newest
                            </span>
                            <span
                                className={chosenOption === "Price (high - low)" ? "active" : ""}
                                onClick={() => setChosenOption("Price (high - low)")}
                            >
                                Price (high - low)
                            </span>
                            <span
                                className={chosenOption === "Price (low - high)" ? "active" : ""}
                                onClick={() => setChosenOption("Price (low - high)")}
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
                {sortedProducts.map(product => (
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
