import React from 'react'
import ArticleListItem from './ArticleListItem'
import ArticleArray from './ArticleArray'

const ArticleList = () => {
    return (
        <>
            <div className="container">
                <div className="row row-article">
                    {ArticleArray.map(
                        ({
                            id,
                            image,
                            description,
                            text,
                            todo,
                            categories,
                        }) => (
                            <ArticleListItem
                                key={id}
                                image={image}
                                description={description}
                                text={text}
                                todo={todo}
                                categories={categories}
                            />
                        )
                    )}
                </div>
            </div>
        </>
    )
}

export default ArticleList
