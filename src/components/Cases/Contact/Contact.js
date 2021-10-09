import React from 'react'
import './Contact.css'
import { Envelope, Chat, Receipt } from 'react-bootstrap-icons'
import FormFeedback from '../../FormFeedback/FormFeedback'
import { Link } from 'react-router-dom'

const Contact = () => {
    return (
        <>
            <section className="contact-head-image">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12 col-xs-12">
                            <div className="text-content">
                                <h1>
                                    Vestibulum commodo volutpat a, convallis ac,
                                    laoreet enim. Phasellus fermentum in, dolor
                                    facilisis.
                                </h1>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <div className="container">
                <div className="row">
                    <div className="col-xs-12 col-md-4 contact-flex">
                        <Envelope className="icons-color" />
                        <p>Have any questions?</p>
                        <Link to="/">noreply@envato.com</Link>
                    </div>
                    <div className="col-xs-12 col-md-4 contact-flex">
                        <Chat className="icons-color" />
                        <p>Call us</p>
                        <Link to="/">+61 (0) 3 8376 6284</Link>
                    </div>
                    <div className="col-xs-12 col-md-4 contact-flex">
                        <Receipt className="icons-color" />
                        <p>Fax</p>
                        <Link to="/">+61 (0) 3 8376 6284</Link>
                    </div>
                </div>
            </div>
            <FormFeedback />
        </>
    )
}

export default Contact
