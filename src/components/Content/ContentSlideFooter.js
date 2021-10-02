import React from 'react'
import './ContentSlideFooter.css'
import { Link } from 'react-router-dom'

const ContentSlideFooter = () => {
    return (
        <>
            <section className="image-slide-three parallax">
                <div className="container">
                    <div className="row">
                        <div className="text-content">
                            <h3>About us</h3>
                            <h1>
                                Maecenas eleifend erat at justo fringilla
                                imperdiet id ac magna. Suspendisse vel facilisis
                                odio, at ornare malesuada.
                            </h1>
                            <Link to="/about" className="btn">
                                Read more about our amazing team
                            </Link>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default ContentSlideFooter
