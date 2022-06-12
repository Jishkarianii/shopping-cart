import { Link } from "react-router-dom"
import Button from "./Button"
import "./LogIn.scss"

function LogIn() {
    return (
        <section className="log-in container">
            <div className="log-in-wrapper">
                <h2>LOG IN</h2>
                <Link to="/">Forgot Your Password?</Link>
                <form>
                    <input className="inp" type="email" placeholder="Email *" required/>
                    <input className="inp" type="password" placeholder="Password *"  required/>
                    <label className="check">
                        <input type="checkbox"  />
                        <span>Keep me logged in</span>
                    </label> 
                    <Button text="LOG IN" />
                </form>
            </div>
        </section>
    )
}

export default LogIn
