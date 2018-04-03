import React from 'react';
import {
    Card,  CardBody,
    CardTitle,   Row, Col,Badge,Table
} from 'reactstrap';
import {Typeahead} from "react-bootstrap-typeahead";
import {Field, reduxForm} from "redux-form";
import _ from 'lodash';
import Editable from 'react-x-editable';



class PeopleSkills extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            selected:null
        }
        this.props.GetAllPeople_c();
        this.renderCardPeopleSelected = this.renderCardPeopleSelected.bind(this);
        //   this.renderFieldTypeAhead = this.renderFieldTypeAhead(this);
    }
    renderFieldTypeAhead = ({input, placeholder, options}) => {
        if(options !== undefined){
            return(
                <div>
                    <Typeahead
                        {...input}
                        options={options}
                        labelKey="FullName"
                        placeholder={placeholder}
                        onChange={(selected)=> this.setPeopleSelected(selected)}
                    />
                </div>
            );
        }
        else
            return(<div></div>);
    };
    setPeopleSelected(selected){
        this.setState({selected:selected});
    }
    renderCardPeopleSelected(selected){
        if(!_.isNil(selected)){
            console.log("Selected ", selected);
            return(
                <Row>
                    <Col xs="6" md="3">
                        <img src={selected.UrlPhoto} alt={selected.FullName}/>
                    </Col>
                    <Col xs="6" md="9">
                        {this.renderSkillsTable(selected)}
                    </Col>
                </Row>
            );
        }
    }
    renderSkillsTable(selected){
        return(
            <div>
                <Table responsive>
                    <thead>
                    <tr>
                        <th>Skill</th>
                        <th>Level</th>

                    </tr>
                    </thead>
                    <tbody>
                    {this.renderSkillsTableRows(selected.Skills)}
                    </tbody>
                </Table>
            </div>
        );
    }
    renderSkillsTableRows(skills){
        return(
            _.map(skills, skill =>{
                return(
                        <tr key={skill.SkillID}>
                            <td>{skill.SkillName}</td>
                            <td>{skill.Level}</td>
                            <td><Editable
                                name="username"
                                dataType="text"
                                mode="popup"
                                title="Please enter username"
                            /></td>
                        </tr>
                );
            })
        );
    }

    render(){
        const {AllPeople} = this.props;
        const selectedValue = this.state.selected != undefined ? this.state.selected[0] : undefined;
        return (
            <div className="animated fadeIn">
                <Row>
                    <Col>
                        <Card>
                            <CardBody>
                                <Row>
                                    <Col xs="12">
                                        <CardTitle>
                                            <p className="text-gray-500">Welcome to the skill assignment page <small>You can search for a person and view, edit or delete the assigned skills.</small></p>
                                        </CardTitle>
                                    </Col>
                                    <Col xs="12">
                                        <Field type="text" name="searchBox"
                                               placeholder="Search people by name"
                                               options={AllPeople}
                                               component={this.renderFieldTypeAhead}
                                        />
                                    </Col>
                                </Row>
                                <div className="container-fluid">
                                    <Row>
                                        <Col xs="12">
                                            {this.renderCardPeopleSelected(selectedValue)}
                                        </Col>
                                    </Row>
                                </div>
                            </CardBody>
                        </Card>
                    </Col>
                </Row>
            </div>
        );
    }
}

export default reduxForm({form:"PeopleSkills"})(PeopleSkills);