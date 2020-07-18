// resource page students are directed to upon
// choosing "I need professional help" from the buttons on the StudentSurvey page

import React, { Component } from 'react';

class ProfessionalInfo extends React.Component {
    render() {
        return (
            <div>
                <h2 class="ui center aligned icon header">
                    <i class="user md icon"></i>
                    National Resources
                </h2>
                <h2 class="ui center aligned icon header">
                    <i class="university icon"></i>
                    University Resources
                </h2>
            </div>
        );
    }
}

export default ProfessionalInfo;
