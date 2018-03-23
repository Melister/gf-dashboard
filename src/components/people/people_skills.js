import React from 'react';
import {
    Card,  CardBody,
    CardTitle,   Row, Col
} from 'reactstrap';
import {Typeahead} from "react-bootstrap-typeahead";
import {Field, reduxForm} from "redux-form";

let renderFieldTypeAhead = ({input, placeholder, options,  meta :{ touched, error }}) => {
    return(
        <div>
            <Typeahead
                {...input}
                labelKey="billing_state"
                options={options}
                placeholder={placeholder}
            />
        </div>
    );
};

let PeopleSkills =props=> {
    let people_source = ["a","b"];
        return (
            <div className="animated fadeIn">
             <Card>
                 <CardBody>
                     <CardTitle>
                         <p className="text-gray-500">Welcome to the skill assignment page <small>You can search for a person and view, edit or delete the assigned skills.</small></p>
                     </CardTitle>

                     <Row className="mb-md-3">
                         <Col>
                             <Field type="text" name="searchBox"
                                    placeholder="Search people by name"
                                    options={people_source}
                                    component={renderFieldTypeAhead}
                             />
                         </Col>
                     </Row>
                 </CardBody>
             </Card>
            </div>
        );
}

export default reduxForm({form:"PeopleSkills"})(PeopleSkills);