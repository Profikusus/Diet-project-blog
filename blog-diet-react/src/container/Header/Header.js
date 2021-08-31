import React from 'react'
import Logo from '../../components/Logo/Logo'
import Menu from '../../components/Menu/Menu'
import '../Header/Header.css'

const Header = () => {
    return (
        <>
            <header>
                <div class="container">
                    <div class="row row-menu">
                        <Logo />
                        <Menu />
                    </div>
                </div>
            </header>
        </>
    )
}

export default Header
