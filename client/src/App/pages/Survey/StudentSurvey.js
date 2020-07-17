// Student survey

import React from 'react';
import { Component } from 'react';
import { Field, reduxForm } from 'redux-form'; // Field is a component from reduxForm
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

// action creator
// TODO

class StudentSurvey extends React.Component {
    render() {
        return (
            <div>
                <h1>Hello, how are you?</h1>

                <Link to={'./FormStress'}>
                    <button variant="raised">I am stressed</button>
                </Link>
                <Link to={'./FormLonely'}>
                    <button variant="raised">I am lonely</button>
                </Link>
                <Link to={'./FormTired'}>
                    <button variant="raised">I am tired or unmotivated</button>
                </Link>
                <Link to={'./FormSOS'}>
                    <button variant="raised">I would like professional help</button>
                </Link>
            </div>
        );
    }
}

export default StudentSurvey;

//     constructor(props) {
//         super(props);
//         this.nextPage = this.nextPage.bind(this);
//         this.previousPage = this.previousPage.bind(this);
//         this.state = {
//             page: 1,
//         };
//     }
//     nextPage() {
//         this.setState({ page: this.state.page + 1 });
//     }
//     previousPage() {
//         this.setState({ page: this.state.page - 1 });
//     }
//     render() {
//         const { onSubmit } = this.props;
//         const { page } = this.state;
//         return (
//             <div>
//                 {page === 1 && <SurveyPageOne onSubmit={this.nextPage} />}
//                 {page === 2 && (
//                     <SurveyPageTwo
//                         previousPage={this.previousPage}
//                         onSubmit={this.nextPage}
//                     />
//                 )}
//                 {page === 3 && (
//                     <SurveyPageThree
//                         previousPage={this.previousPage}
//                         onSubmit={onSubmit}
//                     />
//                 )}
//             </div>
//         );
//     }
// }
// StudentSurvey.propTypes = {
//     onSubmit: PropTypes.func.isRequired,
