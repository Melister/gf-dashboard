import React from 'react';
import {
    Card,  CardBody,
    CardTitle
} from 'reactstrap';
export default class Report extends React.Component {
    render() {
        return (
            <div className="animated fadeIn">
                <Card>
                    <CardBody>
                        <CardTitle>
                            <p className="text-gray-500">Welcome to the report page</p>
                        </CardTitle>
                    </CardBody>
                </Card>
            </div>
        );
    }
}