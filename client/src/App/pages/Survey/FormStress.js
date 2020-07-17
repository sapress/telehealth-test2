// form that students are directed to upon choosing "I am stressed"
// from the initial question asked "Hello, how are you?"
// Asks students what they are stressed about to redirect to relevant resources

import React from 'react';
import { Field, reduxForm } from 'redux-form';
const {
    DOM: { input, select, textarea },
} = React;

const SimpleForm = (props) => {
    const { handleSubmit, pristine, reset, submitting } = props;
    return (
        <form onSubmit={handleSubmit}>
            <div>Form</div>
        </form>
    );
};

export default reduxForm({
    form: 'stressor',
})(FormStress);
