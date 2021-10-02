import React from 'react'
import './Contact.css'
import { Envelope, Chat, Receipt } from 'react-bootstrap-icons'

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
                    <div className="col-xs-12 col-md-4">
                        <div className="col-md-6">
                            <Envelope className="icons-color" />
                        </div>
                        <div className="col-md-6"></div>
                    </div>
                    <div className="col-xs-12 col-md-4">
                        <div className="col-md-6">
                            <Chat className="icons-color" />
                        </div>
                        <div className="col-md-6"></div>
                    </div>
                    <div className="col-xs-12 col-md-4">
                        <div className="col-md-6">
                            <Receipt className="icons-color" />
                        </div>
                        <div className="col-md-6"></div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Contact
