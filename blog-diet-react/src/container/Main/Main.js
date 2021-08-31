import React from 'react'
import ArticleList from '../../components/Article/ArticleList'
import ContentSlideFooter from '../../components/Content/ContentSlideFooter'
import ContentSlideHeader from '../../components/Content/ContentSlideHeader'
import ContentSlideMain from '../../components/Content/ContentSlideMain'

const Main = () => {
    return (
        <>
            <ContentSlideHeader />
            <ArticleList />
            <ContentSlideMain />
            <ContentSlideFooter />
        </>
    )
}

export default Main
