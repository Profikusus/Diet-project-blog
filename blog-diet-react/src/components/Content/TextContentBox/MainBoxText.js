import React from 'react'
import './StyleContentBox.css'
import { Link } from 'react-router-dom'

const MainBoxText = () => {
    return (
        <>
            <section className="color-block">
                <div className="container">
                    <div className="row row-view-all">
                        <div className="col-xs-12 col-md-12">
                            <div className="view-all-btn">
                                <Link>View all cooking recipes</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default MainBoxText
