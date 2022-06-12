import "./YourBag.scss"
import { Link } from "react-router-dom"
import { useSelector } from "react-redux"
import YourBagItem from "./YourBagItem"
import Button from "./Button"

function YourBag() {
    const products = useSelector(state => state.checkout.products)
    const amount = useSelector(state => state.checkout.amount)
    const original = useSelector(state => state.checkout.original)
    const total = useSelector(state => state.checkout.total)

    return (
        <section className="your-bag container">
            <div className="your-bag-title">
                <h2>YOUR BAG</h2>
                <Link to="/login">LOGIN AND CHECKOUT FASTER</Link>
            </div>
            <div className="your-bag-content">
                <div className="your-bag-items">
                    <p className="your-bag-item-title">TOTAL: ({amount} items) ${total}</p>
                    <p className="your-bag-item-title">Items in your bag are not reserved — check out now to make them yours.</p>
                    {products.map(product => (
                        <YourBagItem 
                            key={product.id}
                            id={product.id}
                            photo={product.photo}
                            title={product.title}
                            subTitle={product.subTitle}
                            currentPrice={product.currentPrice}
                            oldPrice={product.oldPrice}
                            amount={product.amount}
                        />
                    ))}
                </div>
                <div className="your-bag-order-cont">
                    <div className="order">
                        <h2>ORDER SUMMARY</h2>
                        {original - total > 0 && (
                            <div>
                                <p>ORIGINAL PRICE</p>
                                <p>${original}.00</p>
                            </div>
                        )}
                        {original - total > 0 && (
                            <div>
                                <p>SALE</p>
                                <p>- ${original - total}.00</p>
                            </div>
                        )}
                        <div>
                            <p>{amount} ITEMS</p>
                            <p>${total}.00</p>
                        </div>
                        <div>
                            <p>DELIVERY</p>
                            <p>FREE</p>
                        </div>
                        <div>
                            <p>Sales Tax</p>
                            <p>-</p>
                        </div>
                        <div>
                            <strong>TOTAL</strong>
                            <strong>${total}.00</strong>
                        </div>
                    </div>
                    <Link to="/login">
                        <Button text="CHECKOUT" />
                    </Link>
                </div>
            </div>
        </section>
    )
}

export default YourBag
