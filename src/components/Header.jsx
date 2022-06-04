import "./Header.scss"
import { useState, useEffect } from "react";
import { Link, NavLink } from "react-router-dom";
import { motion } from "framer-motion";
import SearchIcon from '@mui/icons-material/Search';
import LocalShippingOutlinedIcon from '@mui/icons-material/LocalShippingOutlined';
import ShoppingBagOutlinedIcon from '@mui/icons-material/ShoppingBagOutlined';
import PersonOutlinedIcon from '@mui/icons-material/PersonOutlined';
import CloseIcon from '@mui/icons-material/Close';
import MenuIcon from '@mui/icons-material/Menu';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';

function Header() {
    const [sideMenu, setSideMenu] = useState(false)
    const [searchBar, setSearchBar] = useState(false)
    const [searchValue, setSearchValue] = useState("")

    useEffect(() => {
        searchHandler()
    }, [searchValue])

    const searchHandler = () => {
        console.log(searchValue)
    }

    const clearSearchBar = () => {
        setSearchValue("")
    }

    return (
        <header className={searchBar ? "searchbar-active" : ""}>
            <div className="top-bar">
                <LocalShippingOutlinedIcon />
                <Link to="/">FREE STANDARD SHIPPING & RETURNS | JOIN NOW</Link>
            </div>
            <nav className="nav-bar container">
                <MenuIcon 
                    className="menu-icon" 
                    onClick={() => {
                        setSideMenu(true)
                    }}
                />
                <div className={`side-menu ${sideMenu ? "active" : ""}`}>
                    <div className="side-menu-head">
                        <img src="./icon/adidas-logo.svg" alt="adidas logo" />
                        <CloseIcon onClick={() => setSideMenu(false)} />
                    </div>
                    <ul>
                        <li><NavLink className={navData => navData.isActive ? "active" : ""} onClick={() => setSideMenu(false)} to="/">ALL</NavLink><KeyboardArrowRightIcon /></li>
                        <li><NavLink className={navData => navData.isActive ? "active" : ""} onClick={() => setSideMenu(false)} to="/men">MEN</NavLink><KeyboardArrowRightIcon /></li>
                        <li><NavLink className={navData => navData.isActive ? "active" : ""} onClick={() => setSideMenu(false)} to="/women">WOMEN</NavLink><KeyboardArrowRightIcon /></li>
                        <li><NavLink className={navData => navData.isActive ? "active" : ""} onClick={() => setSideMenu(false)} to="/kids">KIDS</NavLink><KeyboardArrowRightIcon /></li>
                    </ul>
                </div>
                <div className="logo-cont">
                    <Link to="/"><img src="./icon/adidas-logo.svg" alt="adidas logo" /></Link>
                </div>
                <ul>
                    <li><NavLink className={navData => navData.isActive ? "active" : ""} to="/">ALL</NavLink></li>
                    <li><NavLink className={navData => navData.isActive ? "active" : ""} to="/men">MEN</NavLink></li>
                    <li><NavLink className={navData => navData.isActive ? "active" : ""} to="/women">WOMEN</NavLink></li>
                    <li><NavLink className={navData => navData.isActive ? "active" : ""} to="/kids">KIDS</NavLink></li>
                </ul>
                <div className="right-side-cont">
                    <div className={`search-cont ${searchBar ? "active" : ""}`}>
                        <input 
                            type="text"
                            placeholder="Search"
                            value={searchValue}
                            onChange={e => {
                                setSearchValue(e.target.value)
                            }}
                        />
                        {searchValue === "" ? (
                                <SearchIcon />
                            ) : (
                                <CloseIcon onClick={clearSearchBar} />
                        )}
                    </div>
                    <div className="shopping-bag-cont">
                        {/* { When this condition is true && (
                            <motion.div 
                            className="cart-counter"
                            initial={{ scale: 0 }}
                            animate={{ scale: 1 }}
                            transition={{ duration: 0.4 }}
                            >
                            1
                            </motion.div>
                        )} */}
                        <SearchIcon 
                            className="search-icon" 
                            onClick={() => {
                                setSearchBar(!searchBar)
                            }}
                        />
                        <PersonOutlinedIcon />
                        <ShoppingBagOutlinedIcon />
                    </div>
                </div>
            </nav>
        </header>
    )
}

export default Header
