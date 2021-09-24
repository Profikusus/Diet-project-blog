import React from 'react'
import ArticleListItem from './ArticleListItem'
import ArticleArray from './ArticleArray'

const ArticleList = () => {
    return (
        <>
            <div className="container">
                <div className="row row-article">
                    {ArticleArray.map((article) => (
                        <ArticleListItem article={article} />
                    ))}
                </div>
            </div>
        </>
    )
}

export default ArticleList
