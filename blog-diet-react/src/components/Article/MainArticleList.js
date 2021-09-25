import React from 'react'
import MainArticleListItem from './MainArticleListItem'
import MainArticleArray from './MainArcticleArray'

const MainArticleList = () => {
    return (
        <>
            <div className="container">
                <div className="row row-article">
                    {MainArticleArray.map((articleMain) => (
                        <MainArticleListItem articleMain={articleMain} />
                    ))}
                </div>
            </div>
        </>
    )
}

export default MainArticleList
