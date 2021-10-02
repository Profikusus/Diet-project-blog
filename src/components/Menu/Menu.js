import React from 'react'
import '../../components/Menu/Menu.css'
import { Link } from 'react-router-dom'
const Menu = () => {
    return (
        <>
            <div className="col-xs-12 col-md-8">
                <div className="header-menu">
                    <Link to="/">Home</Link>
                    <Link to="/about">About us</Link>
                    <Link to="/diets">Diets</Link>
                    <Link to="/breakfast">Breakfast</Link>
                    <Link to="/lunch">Lunch</Link>
                    <Link to="/dinner">Dinner</Link>
                    <Link to="/contact">Contact</Link>
                </div>
            </div>
        </>
    )
}

export default Menu
