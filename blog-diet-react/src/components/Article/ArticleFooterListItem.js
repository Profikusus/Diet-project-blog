import { Button } from '@material-ui/core'
import React from 'react'
import './ArticleListStyle.css'
import { Link } from 'react-router-dom'

const ArticleFooter = ({ article }) => {
    const { id, image, categories, description, text, todo } = article
    return (
        <>
            <div className="col-xs-12 col-md-6">
                <div className="diet-box">
                    <img src={image} />
                    <div className="desc-diet-box">
                        <div className="head-diet-box">
                            <h1>
                                <Link to="/about">{description}</Link>
                            </h1>
                        </div>
                        <div className="title-diet-box">
                            <p>{text}</p>
                        </div>
                        <div className="footer-diet-box">
                            <Button>
                                <Link to="/about">Read more</Link>
                            </Button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ArticleFooter
