import React from 'react';
import {AutoForm, AutoField, ErrorField} from 'uniforms-unstyled';
import DonutsSchema from '/imports/db/donuts/schema';
import DonutForm from '/imports/client/pages/donuts/DonutForm';

export default class DonutsCreate extends React.Component {
    constructor() {
        super();
    }

    onSubmit = (data) => {
        Meteor.call('donut.create', data, (err) => {
            if(!err) {
                FlowRouter.go('donuts.list');
            }
        });
    };

    render() {
        return (
            <main>
                <DonutForm schema={DonutsSchema} onSubmit={this.onSubmit} />
            </main>
        )
    }
}

