import React from 'react'
import ArticleFooterListItem from './ArticleFooterListItem'
import ArticleArray from './ArticleArray'

const ArticleFooterList = () => {
    return (
        <>
            <div className="container">
                <div className="row row-article">
                    {ArticleArray.map((article) => (
                        <ArticleFooterListItem article={article} />
                    ))}
                </div>
            </div>
        </>
    )
}

export default ArticleFooterList
