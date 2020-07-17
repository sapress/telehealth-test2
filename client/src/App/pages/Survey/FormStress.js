// form that students are directed to upon choosing "I am stressed"
// from the initial question asked "Hello, how are you?"
// Asks students what they are stressed about to redirect to relevant resources

import React from 'react';
import { Field, reduxForm } from 'redux-form';
const {
    DOM: { input, select, textarea },
} = React;

const FormStress = (props) => {
    const { handleSubmit, pristine, reset, submitting } = props;

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label>Why are you stressed?</label>
                <div>
                    <label>
                        <Field
                            name="stressor"
                            component={input}
                            type="radio"
                            value="schoolwork"
                        />
                        Schoolwork
                    </label>
                    <label>
                        <Field
                            name="stressor"
                            component={input}
                            type="radio"
                            value="job"
                        />
                        Job
                    </label>
                    <label>
                        <Field
                            name="stressor"
                            component={input}
                            type="radio"
                            value="firstyear"
                        />
                        First year at school
                    </label>
                    <label>
                        <Field
                            name="stressor"
                            component={input}
                            type="radio"
                            value="covid"
                        />
                        My routine has been affected by COVID-19
                    </label>
                    <label>
                        <Field
                            name="stressor"
                            component={input}
                            type="radio"
                            value="finances"
                        />
                        My Financial Situation
                    </label>
                </div>
                <div>
                    <button type="submit" disabled={pristine || submitting}>
                        Submit
                    </button>
                </div>
            </div>
        </form>
    );
};

export default reduxForm({
    form: 'simple', // a unique identifier for this form
})(FormStress);
