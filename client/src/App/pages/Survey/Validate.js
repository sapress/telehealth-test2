const Validate = (values) => {
    const errors = {};
    if (!values.sleep) {
        errors.sleep = 'Required';
    }
    return errors;
};

export default Validate;
