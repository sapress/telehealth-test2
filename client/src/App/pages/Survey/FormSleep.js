// form that students are directed to upon choosing "I am stressed"
// from the initial question asked "Hello, how are you?"
// Asks students what they are stressed about to redirect to relevant resources

import React, { Component } from 'react';
import { Field, reduxForm, formValues } from 'redux-form';
import { Form, Icon, Button, Input, Dropdown } from 'semantic-ui-react';

import { connect } from 'react-redux';
import { reportSleep } from '../../actions';
import { withRouter } from 'react-router-dom';

class FormSleep extends React.Component {
    constructor(props) {
        super(props);
    }

    onSubmit = (formValues) => {
        this.props.reportSleep(formValues);
        if (formValues.sleep === 'yes') {
            this.props.history.push('/survey-eating-habits');
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
                    <label>
                        Do you regularly get the recommended eight hours of sleep?
                    </label>
                    <div>
                        <Field name="sleep" component="select">
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
    if (!formValues.sleep) {
        errors.sleep = 'Select Yes or No';
    }
    return errors;
};

FormSleep = reduxForm({
    form: 'sleep-report',
    validate,
    fields: [null],
})(FormSleep);

FormSleep = connect(null, { reportSleep })(FormSleep);

export default withRouter(FormSleep);
