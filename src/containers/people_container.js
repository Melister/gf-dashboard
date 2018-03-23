import React from 'react';
import PeopleHome from "../components/people/people_home";
import {connect} from "react-redux";


function mapStateToProps(state) {
    return {

    };
}

function mapDispatchToProps(dispatch) {
    return {

    };
}

const PeopleContainer = connect(mapStateToProps, mapDispatchToProps)(PeopleHome);

export default PeopleContainer;