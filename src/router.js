import React from 'react';
import {BrowserRouter as Router,Route,Switch,} from 'react-router-dom';
import { connect } from 'react-redux';

//Reactstrap components
import {Container} from 'reactstrap';

//App components
import Header from "./components/layout/Header/Header";
import Sidebar from "./components/layout/Sidebar/Sidebar";
import Breadcrumb from "./components/layout/Breadcrumb/Breadcrumb";
import Aside from "./components/layout/Aside/Aside";
import Footer from "./components/layout/Footer/Footer";


//App components
import PeopleContainer from './containers/people_container';
const routes = [
    {
        name: 'People',
        exact: true,
        path: '/people',
        component: PeopleContainer,
    }
];



const MyRouter = connect()( () => {
    return (
        <Router >
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