import "./Button.scss"
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';
import CheckIcon from '@mui/icons-material/Check';

function Button({ text, style, onClick }) {
    return (
        <button className="btn" style={style} onClick={onClick}>
            {text} 
            {text === "ADDED" ? (
                <CheckIcon />
            ) : (
                <ArrowRightAltIcon />
            )}
        </button>
    )
}

export default Button
