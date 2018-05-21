import React from 'react';
import {AutoForm, AutoField, ErrorField} from 'uniforms-unstyled';

export default class DonutForm extends React.Component {
    constructor(props) {
        super(props);
    }

  render() {
    return (
        <main>
            <AutoForm schema={this.props.schema} onSubmit={this.props.onSubmit} model={ this.props.model? this.props.model : {} }>
                <AutoField name="name"/>
                <ErrorField name="name"/>

                <AutoField name="price"/>
                <ErrorField name="price"/>

                <AutoField name="isComestible"/>
                <ErrorField name="isComestible"/>

                <button type="submit">
                    Create donut
                </button>
            </AutoForm>
        </main>
    )
  }
}
