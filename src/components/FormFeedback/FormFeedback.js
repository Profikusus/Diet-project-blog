import React from 'react'
import MainBoxText from '../Content/TextContentBox/MainBoxText'
import '../FormFeedback/FormFeedback.css'

const FormFeedback = () => {
    return (
        <>
            <div className="container">
                <div className="row">
                    <div className="col-xs-12 col-md-6">
                        <div className="text-content-from-form">
                            <h1>Cras massa tincidunt</h1>
                            <p>
                                Vestibulum vehicula tempor nulla, sed hendrerit
                                urna interdum in. Donec et nibh maximus, congue
                                est eu, mattis nunc. Praesent ut quam quis quam
                                venenatis fringilla.
                            </p>
                        </div>
                    </div>
                    <div className="col-xs-12 col-md-6">
                        <div className="box-form-feedback">
                            <div className="head-form">
                                <input
                                    type="text"
                                    placeholder="Your name"
                                    size="maxWidth"
                                    required
                                ></input>
                                <input
                                    type="email"
                                    placeholder="Your email"
                                    required
                                ></input>
                            </div>
                            <div className="main-form">
                                <input
                                    type="text"
                                    placeholder="Subject"
                                    required
                                ></input>
                            </div>
                            <div className="footer-form">
                                <textarea
                                    placeholder="Message"
                                    required
                                ></textarea>
                            </div>
                            <button className="btn-form">Send a Message</button>
                        </div>
                    </div>
                </div>
            </div>
            <MainBoxText />
        </>
    )
}

export default FormFeedback
