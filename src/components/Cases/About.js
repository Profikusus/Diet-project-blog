import React from 'react'
import '../../components/Cases/About.css'
const About = () => {
    return (
        <>
            <div>
                <img
                    className="parallax"
                    src="./images/home_diet_about1.jpg"
                    alt=""
                />
            </div>
            <div className="container">
                <div className="row">
                    <div className="col-xs-12 col-md-12">
                        <div className="content-about-us">
                            <h3>About us</h3>
                            <h1>
                                Aliquam ac dui vel dui vulputate consectetur.
                                Mauris accumsan, massa non consectetur
                                condimentum, diam arcu tristique nibh, nec
                                egestas diam elit at nulla. Suspendisse potenti.
                                In non lacinia risus, ac tempor ipsum. Phasellus
                                venenatis leo eu semper varius.
                            </h1>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default About
