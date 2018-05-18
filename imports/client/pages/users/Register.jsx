import React from 'react';
import {AutoForm, AutoField, ErrorField} from 'uniforms-unstyled';
import SimpleSchema from 'simpl-schema';

class Register extends React.Component {
    constructor(props) {
        super(props);

    }

    onSubmit = (data) => {
        const {email, password} = data;

        Accounts.createUser({
            email,
            password,
        }, (err) => {
            if (!err) {
                FlowRouter.go('donuts.list');
            }
            else {
                alert(err.reason);
            }
        })
    };

    render() {
        return (
            <AutoForm schema={RegisterSchema} onSubmit={this.onSubmit} className="credential-form">
                <AutoField name="email" label={false} placeholder/>
                <AutoField name="password" type="password" label={false} placeholder/>
                <AutoField name="confirm_password" type="password" label={false} placeholder/>

                <button type="submit">
                    Register
                </button>

                <ErrorField name="email" className="error-field"/>
                <ErrorField name="password" className="error-field"/>
                <ErrorField name="confirm_password" className="error-field"/>

            </AutoForm>
        )
    }
}

const RegisterSchema = new SimpleSchema({
    email: {
        type: String,
        regEx: SimpleSchema.RegEx.Email
    },
    password: {type: String},
    confirm_password: {
        type: String,
        custom() {
            if (this.value !== this.field('password').value) {
                return 'passwordMismatch';
            }
        }
    }
});

export default Register;