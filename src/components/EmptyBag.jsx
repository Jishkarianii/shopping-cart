import "./EmptyBag.scss"
import { Link } from "react-router-dom"
import Button from "./Button"

function EmptyBag() {
    return (
        <section className="empty-bag container">
            <h2>YOUR BAG IS EMPTY</h2>
            <p>Once you add something to your bag, it will appear here. Ready to get started?</p>
            <Link to="/"><Button text="GET STARTED"  /></Link>
        </section>
    )
}

export default EmptyBag
