// form that students are directed to upon choosing "No" on the previous form (FormSleep.js)
// Asks students about eating habits to redirect to relevant resources

import React, { Component } from 'react';
import { Field, reduxForm, formValues } from 'redux-form';
import { Form, Icon, Button, Input, Dropdown } from 'semantic-ui-react';

import { connect } from 'react-redux';
import { reportEating } from '../../actions';
import { withRouter } from 'react-router-dom';

class FormEating extends React.Component {
    constructor(props) {
        super(props);
    }

    onSubmit = (formValues) => {
        this.props.reportEating(formValues);
        if (formValues.eating === 'yes') {
            this.props.history.push('/survey-exercise');
        } else {
            this.props.history.push('/sleep-resources');
        }
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
                    <label>Do you practice healthy eating habits?</label>
                    <div>
                        <Field name="eating" component="select">
                            <option></option>
                            <option value="no">No</option>
                            <option value="yes">Yes</option>
                        </Field>
                    </div>
                </div>
                <button className="ui button primary" type="submit">
                    Submit
                </button>
            </Form>
        );
    }
}

const validate = (formValues) => {
    const errors = {};
    if (!formValues.eating) {
        errors.eating = 'Select Yes or No';
    }
    return errors;
};

FormEating = reduxForm({
    form: 'eating-report',
    validate,
    fields: [null],
})(FormEating);

FormEating = connect(null, { reportEating })(FormEating);

export default withRouter(FormEating);
