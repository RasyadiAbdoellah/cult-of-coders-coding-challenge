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
                FlowRouter.go('donuts');
            } else {
                alert(err.reason);
            }
        });
    };

    render() {
        return (
            <AutoForm schema={LoginSchema} onSubmit={this.onSubmit}>
                <AutoField name="email" label={false} placeholder/>
                <ErrorField name="email"/>

                <AutoField name="password" type="password" label={false} placeholder />
                <ErrorField name="password"/>

                <button type="submit">
                    Login
                </button>
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