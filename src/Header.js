import React , {useState} from 'react'
import "./Header.css";
import { Link } from "react-router-dom";
import SearchIcon from "@material-ui/icons/Search"
import ShoppingBasketIcon from "@material-ui/icons/ShoppingBasket"
import { useStateValue } from './StateProvider';
import Login from "./Login"


function Header() {
    const [{ basket }] = useStateValue();

    console.log(basket);

    return (
        <nav className='header'>
            <Link to="/" className='cloud' >
                <h1>Cloud </h1>
            </Link>

            <div className='header__search'>
                <input type="text" className='header__searchInput' />
                <SearchIcon className='header__searchicon' />
            </div>

            <div className='header__nav'>
                <Link to="/login" className='header__link'>
                    <div className='header__option'>
                        <span className='header__optionlineone' >Hello..</span>
                        <span className='header__optionlinetwo' >Sign In</span>
                    </div>
                </Link>

                <Link to="/" className='header__link'>
                    <div className='header__option'>
                        <span className='header__optionlineone'>Returns</span>
                        <span className='header__optionlinetwo'>& Orders</span>
                    </div>
                </Link>

                <Link to="/checkout" className='header__link'>
                    <div className='header__optionbasket'>
                        <ShoppingBasketIcon />
                        <span className='header__optionlinetwo header__basketcount'>{basket?.length}</span>
                    </div>

                </Link>
            </div>

        </nav>
    )
}

export default Header;
