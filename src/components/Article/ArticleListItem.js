import React, { useState } from 'react'
import './ArticleListStyle.css'
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder'
import { Button } from '@material-ui/core'
import { Link } from 'react-router-dom'

const ArticleListItem = ({
    id,
    image,
    categories,
    description,
    text,
    todo,
}) => {
    const getRandomNumbers = (min, max) => {
        min = Math.ceil(1)
        max = Math.floor(100)
        return Math.floor(Math.random() * (max - min + 1)) + min
    }
    const [count, setCount] = useState(getRandomNumbers())

    return (
        <>
            <div className="col-xs-12 col-md-4" key={id}>
                <div className="article-content">
                    <Link to={todo}>
                        <img src={image} alt="" />
                    </Link>
                    <Button>
                        <Link to={todo}>{categories}</Link>
                    </Button>
                    <div className="post-desc">
                        <div className="post-head">
                            <h1>
                                <Link to={todo}>{description}</Link>
                            </h1>
                        </div>
                        <div className="post-title">
                            <p>{text}</p>
                        </div>
                        <div className="post-footer">
                            <div className="like-btn">
                                <FavoriteBorderIcon
                                    onClick={() => setCount(count + 1)}
                                />
                                {count}
                            </div>
                            <div className="post-links">
                                <Link to={todo}>Read more</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ArticleListItem
