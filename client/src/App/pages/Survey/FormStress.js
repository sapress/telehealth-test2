// form that students are directed to upon choosing "I am stressed"
// from the initial question asked "Hello, how are you?"
// Asks students what they are stressed about to redirect to relevant resources

import React, { Component } from 'react';
import { Field, reduxForm, formValues } from 'redux-form';
import { Form, Icon, Button, Input, Dropdown } from 'semantic-ui-react';

import { connect } from 'react-redux';
import { reportStress } from '../../actions';

class FormStress extends React.Component {
    onSubmit = (formValues) => {
        this.props.reportStress(formValues);
    };

    renderError({ error, touched }) {
        if (touched && error) {
            return (
                <div className="ui error messge">
                    <div className="header">{error}</div>
                </div>
            );
        }
    }

    render() {
        return (
            <Form
                onSubmit={this.props.handleSubmit(this.onSubmit)}
                className="ui form error"
            >
                <div>
                    <label>What are you stressed about?</label>
                    <div>
                        <Field name="stressor" component="select">
                            <option></option>
                            <option value="school">Schoolwork</option>
                            <option value="job">Job</option>
                            <option value="firstyear">First Year Student Life</option>
                            <option value="covid">Routine affected by COVID-19</option>
                            <option value="finances">Financial Situation</option>
                        </Field>
                    </div>
                </div>
                <button className="ui button primary">Submit</button>
            </Form>
        );
    }
}

const validate = (formValues) => {
    const errors = {};
    if (!formValues.stressor) {
        errors.title = 'You must select a stress point';
    }
    return errors;
};

FormStress = reduxForm({
    form: 'stress-report',
    validate,
    fields: [null],
})(FormStress);

FormStress = connect(null, { reportStress })(FormStress);

export default FormStress;
