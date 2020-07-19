// form that students are directed to upon choosing "No" on the previous form (FormSleep.js)
// Asks students about eating habits to redirect to relevant resources

import React, { Component } from 'react';
import { Field, reduxForm, formValues } from 'redux-form';
import {
    Form,
    Icon,
    Button,
    Input,
    Dropdown,
    Grid,
    Container,
    Header,
} from 'semantic-ui-react';

import { connect } from 'react-redux';
import { reportStressYN } from '../../actions';
import { withRouter } from 'react-router-dom';

class FormStressTired extends React.Component {
    constructor(props) {
        super(props);
    }

    onSubmit = (formValues) => {
        this.props.reportStressYN(formValues);
        if (formValues.stress === 'yes') {
            this.props.history.push('/stressor-survey');
        } else {
            this.props.history.push('/mentor-program');
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
            <Container>
                <Grid>
                    <Grid.Row centered>
                        <Form
                            onSubmit={this.props.handleSubmit(this.onSubmit)}
                            className="ui form error"
                        >
                            <div className="ui container padded centered stackable grid">
                                <div className="ui container row ">
                                    <label>
                                        <Header>Are you stressed?</Header>
                                    </label>
                                </div>
                                <div className="ui container padded row">
                                    <div column ten wide center aligned>
                                        <Field name="stress" component="select">
                                            <option></option>
                                            <option value="no">No</option>
                                            <option value="yes">Yes</option>
                                        </Field>
                                    </div>
                                </div>
                            </div>

                            <div className="ui container padded row">
                                <button className="ui button primary" type="submit">
                                    Submit
                                </button>
                            </div>
                        </Form>
                    </Grid.Row>
                </Grid>
            </Container>
        );
    }
}

const validate = (formValues) => {
    const errors = {};
    if (!formValues.stress) {
        errors.stress = 'Select Yes or No';
    }
    return errors;
};

FormStressTired = reduxForm({
    form: 'stress-report-yn',
    validate,
    fields: [null],
})(FormStressTired);

FormStressTired = connect(null, { reportStressYN })(FormStressTired);

export default withRouter(FormStressTired);
