// resource page students are directed to upon
// choosing "I need professional help" from the buttons on the StudentSurvey page

import React, { Component } from 'react';
import { Link, Route } from 'react-router-dom';
import { Header } from 'semantic-ui-react';

class ProfessionalInfo extends React.Component {
    render() {
        return (
            <div className="ui container padded centered stackable grid">
                <div className="ui container row">
                    <h2 class="ui center aligned icon header">
                        <i class="user md icon"></i>
                        National Resources
                    </h2>
                </div>
                <div className="ui container padded row">
                    <div column eight wide center aligned>
                        <p>
                            <Header>Emergency Medical Services - 911</Header>
                            If the situation is potentially life-threatening, get
                            immediate emergency assistance by calling 911, available 24
                            hours a day.
                        </p>
                        <p>
                            <Header>
                                National Suicide Prevention Lifeline, 1-800-273-TALK
                                (8255)
                                <p>
                                    <a href="https://suicidepreventionlifeline.org/chat/">
                                        click here to chat live online
                                    </a>
                                </p>
                            </Header>
                            If you or someone you know is suicidal or in emotional
                            distress, contact the National Suicide Prevention Lifeline.
                            Trained crisis workers are available to talk 24 hours a day, 7
                            days a week. Your confidential and toll-free call goes to the
                            nearest crisis center in the Lifeline national network. These
                            centers provide crisis counseling and mental health referrals.
                        </p>
                        <p>
                            <Header>
                                SAMHSA Treatment Referral Helpline, 1-877-SAMHSA7
                                (1-877-726-4727)
                            </Header>
                            Get general information on mental health and locate treatment
                            services in your area. Speak to a live person, Monday through
                            Friday from 8 a.m. to 8 p.m. EST.
                        </p>
                    </div>
                </div>
                <div className=" ui horizontal divider" />
                <div className="ui container row">
                    <h2 class="ui center aligned icon header">
                        <i class="university icon"></i>
                        University Resources
                    </h2>
                </div>
                <div className="ui container padded row">
                    <div column ten wide center aligned>
                        <p>school specific</p>
                    </div>
                </div>
            </div>
        );
    }
}

export default ProfessionalInfo;
