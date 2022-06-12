import { useSelector } from "react-redux"
import EmptyBag from "../components/EmptyBag"
import YourBag from '../components/YourBag'

function Checkout() {
    const amount = useSelector(state => state.checkout.amount)

    return (
        <>
            {amount === 0 ? (
                <EmptyBag />
            ) : (
                <YourBag />
            )}
        </>
    )
}

export default Checkout
