import React from 'react';
import {AutoForm, AutoField, ErrorField} from 'uniforms-unstyled';
import SimpleSchema from 'simpl-schema';

class Login extends React.Component {
    constructor(props) {
        super(props);
    }

    onSubmit = (data) => {
        const {email, password} = data;

        Meteor.loginWithPassword(email, password, (err) => {
            if (!err) {
                FlowRouter.go('donuts.list');
            } else {
                alert(err.reason);
            }
        });
    };

    render() {
        return (
            <AutoForm schema={LoginSchema} onSubmit={this.onSubmit} className="credential-form">
                <AutoField name="email" label={false} placeholder />
                <AutoField name="password" type="password" label={false} placeholder />


                <button type="submit">
                    Login
                </button>

                <ErrorField name="email" className="error-field"/>
                <ErrorField name="password" className="error-field"/>
            </AutoForm>
        )
    }
}

const LoginSchema = new SimpleSchema({
    email: {
        type: String,
        regEx: SimpleSchema.RegEx.Email
    },
    password: {type: String}
});

export default Login;