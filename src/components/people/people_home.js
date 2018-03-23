import React from 'react';
import { Link } from 'react-router-dom';

export default class PeopleHome extends React.Component {
    render() {
        return (
            <div className="animated fadeIn">
                <div className="row">
                    <div className="col-sm-6 col-lg-3">
                        <Link to="/people/peopleskills">
                        <div className="card text-white bg-primary">
                            <div className="card-body pb-0">
                                <h4 className="mb-0">  <span className="fa fa-lightbulb-o"></span> Skills Assignment</h4>
                                <p>
                                    Manage the skills of each person</p>
                            </div>

                        </div>
                        </Link>
                    </div>
                    <div className="col-sm-6 col-lg-3">
                        <div className="card text-white bg-info">
                            <div className="card-body pb-0">
                                <h4 className="mb-0"><span className="fa fa-users"></span> People Manager</h4>
                                <p>Short description</p>
                            </div>

                        </div>
                    </div>
                    <div className="col-sm-6 col-lg-3">
                        <div className="card text-white bg-warning">
                            <div className="card-body pb-0">
                                <h4 className="mb-0"><span className="fa fa-bar-chart"></span> Reports</h4>
                                <p>Short description</p>
                            </div>

                        </div>
                    </div>
                    <div className="col-sm-6 col-lg-3">
                        <div className="card text-white bg-danger">
                            <div className="card-body pb-0">
                                <h4 className="mb-0"><span className="fa fa-question"></span> Option 4</h4>
                                <p>Short description</p>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        );
    }
}