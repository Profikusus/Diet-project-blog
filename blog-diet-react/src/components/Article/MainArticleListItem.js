import { Button } from '@material-ui/core'
import React from 'react'
import './ArticleListStyle.css'
import { Link } from 'react-router-dom'

const MainArticleListItem = ({ articleMain }) => {
    const { id, image, description, text, todo } = articleMain
    return (
        <>
            <div className="col-xs-12 col-md-6" id={id}>
                <div className="diet-box">
                    <img src={image} alt="" />
                    <div className="desc-diet-box">
                        <div className="head-diet-box">
                            <h1>
                                <Link to={todo}>{description}</Link>
                            </h1>
                        </div>
                        <div className="title-diet-box">
                            <p>{text}</p>
                        </div>
                        <div className="footer-diet-box">
                            <Button>
                                <Link to={todo}>Read more</Link>
                            </Button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default MainArticleListItem
