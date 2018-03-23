import React from 'react';
import {BrowserRouter as Router,Route,Switch,} from 'react-router-dom';
import { connect } from 'react-redux';

//App components
import Header from "./components/layout/Header/Header";
import Sidebar from "./components/layout/Sidebar/Sidebar";

//App components
import PeopleHomeContainer from './containers/people/people_home_container';
import PeopleSkillsContainer from "./containers/people/people_skills_container";
import HomeContainer from "./containers/home/home_container";
const routes = [
    {
        name: 'Home',
        exact: true,
        path: '/',
        component: HomeContainer
    },
    {
        name: 'People',
        exact: true,
        path: '/people',
        component: PeopleHomeContainer
    },
    {
        name: 'PeopleSkills',
        exact: true,
        path: '/people/peopleskills',
        component: PeopleSkillsContainer
    }
];



const MyRouter = connect()( () => {
    return (
        <Router path="/">
            <div className="app">
                <Header />
                <div className="app-body">
                    <Sidebar {...this.props}/>
                    <main className="main">
                        <div className="container-fluid">
                            <Switch>
                                {routes.map((route, index) => <Route key={route.name} {...route} />)}
                            </Switch>
                        </div>
                    </main>

                </div>

            </div>
        </Router>
    )
});
export default MyRouter;