// Student survey

import React from 'react';
// import { Component } from 'react';
// import { Field, reduxForm } from 'redux-form'; // Field is a component from reduxForm
// import { connect } from 'react-redux';
// import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { Header } from 'semantic-ui-react';

import './Survey.css';

class StudentSurvey extends React.Component {
    render() {
        return (
            <div>
                <Header className="ui huge header">Hello, how are you?</Header>
                <div className="ui equal width grid">
                    <div className="column">
                        <Link to={'./stressor-survey'}>
                            <button className="big ui button">I am stressed</button>
                        </Link>
                    </div>
                    <div className="column">
                        <Link to={'./mentor-program'}>
                            <button className="big ui button">I am lonely</button>
                        </Link>
                    </div>
                    <div className="column">
                        <Link to={'./survey-sleep'}>
                            <button className="big ui button">
                                I am tired or unmotivated
                            </button>
                        </Link>
                    </div>
                    <div className="column">
                        <Link to={'./professional-information'}>
                            <button className="big ui button">
                                I would like professional help
                            </button>
                        </Link>
                    </div>
                </div>
            </div>
        );
    }
}

export default StudentSurvey;
