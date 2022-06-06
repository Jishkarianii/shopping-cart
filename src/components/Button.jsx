import "./Button.scss"
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';

function Button({ text }) {
    return (
        <button className="btn">
            {text} <ArrowRightAltIcon />
        </button>
    )
}

export default Button
