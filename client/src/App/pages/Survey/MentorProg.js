// resource page students are directed to upon
// choosing "I am lonely" from the buttons on the StudentSurvey page

import React, { Component } from 'react';
import { Icon } from 'semantic-ui-react';
import { render } from 'react-dom';

class MentorProg extends React.Component {
    render() {
        return (
            <h2 class="ui center aligned icon header">
                <i class="circular users icon"></i>
                Join our campus mentor program
            </h2>
        );
    }
}

export default MentorProg;
