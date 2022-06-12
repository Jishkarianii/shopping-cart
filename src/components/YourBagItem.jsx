import "./YourBagItem.scss"
import { useNavigate } from "react-router-dom"
import CloseIcon from '@mui/icons-material/Close';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import { useDispatch } from "react-redux"
import { removeFromBag } from "../redux/action/checkoutAction"
import { incrementItem } from "../redux/action/checkoutAction"
import { decrementItem } from "../redux/action/checkoutAction"

function YourBagItem({ id, photo, title, subTitle, currentPrice, oldPrice, amount }) {
    const navigate = useNavigate()
    const dispatch = useDispatch()

    const navigateHendler = () => {
        navigate(`/product?id=${id}`)
    }

    const removeFromBagProduct = () => {
        dispatch(removeFromBag(id))
    }

    const incrementProduct = () => {
        dispatch(incrementItem(id))
    }

    const decrementProduct = () => {
        if (amount === 1) return
        dispatch(decrementItem(id))
    }

    return (
        <div className="your-bag-item">
            <CloseIcon className="close" onClick={removeFromBagProduct} />
            <div className="your-bag-item-photo" onClick={navigateHendler}>
                <img src={photo} alt="shoes" />
            </div>
            <div className="your-bag-item-info">
                <div className="your-bag-title-wrapper">
                    <p className={`title ${oldPrice ? "active" : ""}`}>{title}</p>
                    <div className="your-bag-item-price">
                    {oldPrice ? (
                    <>
                        <span className="old-price active">${oldPrice}.00</span>
                        <span className="current-price active">${currentPrice}.00</span>
                    </>
                    ) : (
                        <span className="current-price">${currentPrice}.00</span>
                    )}
                </div>
                </div>
                <p className="sub-title">{subTitle}</p>
                <div className="your-bag-item-amount">
                    <RemoveIcon onClick={decrementProduct} />
                    <span>{amount}</span>
                    <AddIcon onClick={incrementProduct} />
                </div>
            </div>
        </div>
    )
}

export default YourBagItem
