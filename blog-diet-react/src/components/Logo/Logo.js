import React from 'react'
import '../Logo/Logo.css'
import { Link } from 'react-router-dom'
const Logo = () => {
    return (
        <>
            <div className="col-xs-12 col-md-4">
                <div className="logo">
                    <Link to="/">
                        <img src="./images/logo.png" alt="" />
                    </Link>
                </div>
            </div>
        </>
    )
}

export default Logo
