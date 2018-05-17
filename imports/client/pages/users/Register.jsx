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
                <ErrorField name="email"/>

                <AutoField name="password" type="password" label={false} placeholder/>
                <ErrorField name="password"/>

                <AutoField name="confirm_password" type="password" label={false} placeholder/>
                <ErrorField name="confirm_password"/>

                <button type="submit">
                    Register
                </button>
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