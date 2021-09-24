import { Home } from '@material-ui/icons'
import React from 'react'
import { Route, Switch } from 'react-router'
import ArticleList from '../../components/Article/ArticleList'
import About from '../../components/Cases/About'
import Diets from '../../components/Cases/Diets'
import Breakfast from '../../components/Cases/Breakfast'
import Dinner from '../../components/Cases/Dinner'
import Lunch from '../../components/Cases/Lunch'
import Contact from '../../components/Cases/Contact'
import ContentSlideFooter from '../../components/Content/ContentSlideFooter'
import ContentSlideHeader from '../../components/Content/ContentSlideHeader'
import ContentSlideMain from '../../components/Content/ContentSlideMain'
import HeadBoxText from '../../components/Content/TextContentBox/HeadBoxText'
import MainBoxText from '../../components/Content/TextContentBox/MainBoxText'
import ArticleFooterList from '../../components/Article/ArticleFooterList'

const Main = () => {
    return (
        <>
            <Switch>
                <Route path="/" exact component={Home}>
                    <ContentSlideHeader />
                    <HeadBoxText />
                    <ArticleList />
                    <MainBoxText />
                    <ContentSlideMain />
                    <ArticleFooterList />
                    <ContentSlideFooter />
                </Route>

                <Route path="/about" component={About} />
                <Route path="/diets" component={Diets} />
                <Route path="/breakfast" component={Breakfast} />
                <Route path="/lunch" component={Lunch} />
                <Route path="/dinner" component={Dinner} />
                <Route path="/contact" component={Contact} />
            </Switch>
        </>
    )
}

export default Main
