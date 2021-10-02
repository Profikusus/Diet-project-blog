import React from 'react'
import MainArticleListItem from './MainArticleListItem'
import MainArticleArray from './MainArcticleArray'

const MainArticleList = () => {
    return (
        <>
            <div className="container">
                <div className="row row-article">
                    {MainArticleArray.map(
                        ({ id, image, description, text, todo }) => (
                            <MainArticleListItem
                                key={id}
                                image={image}
                                description={description}
                                text={text}
                                todo={todo}
                            />
                        )
                    )}
                </div>
            </div>
        </>
    )
}

export default MainArticleList
