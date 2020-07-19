// App compnent - includes the browser router and NavBar

import React from 'react';
import { Component } from 'react';
import './App.css';
import { Route, Switch, BrowserRouter } from 'react-router-dom';

// Component Imports
import NavBar from './NavBar';
import Home from './Home';
import List from './List';
import CommunityHome from './CommunityHome';

import MySpace from './MySpace';
import MeditationPage from './MeditationPage';
import JournalHome from './JournalHome';
import JournalPrompts from './JournalPrompts';
import JournalPast from './JournalPast';
import StudentSurvey from './Survey/StudentSurvey';
import FormStress from './Survey/FormStress';
import MentorProg from './Survey/MentorProg';
import ProfessionalInfo from './Survey/ProfessionalInfo';
import FormSleep from './Survey/FormSleep';
import SleepInfo from './Survey/SleepInfo';
import FormEating from './Survey/FormEating';
import FormExercise from './Survey/FormExercise';
import FormStressTired from './Survey/FormStressTired';

class App extends Component {
    render() {
        const App = () => (
            <div className="ui container">
                <BrowserRouter>
                    <NavBar />
                    <Route exact path="/" component={Home} />
                    <Route path="/list" component={List} />
                    <Route path="/survey" component={StudentSurvey} />
                    <Route path="/stressor-survey" component={FormStress} />
                    <Route path="/mentor-program" component={MentorProg} />
                    <Route
                        path="/professional-information"
                        component={ProfessionalInfo}
                    />
                    <Route path="/survey-sleep" component={FormSleep} />
                    <Route path="/sleep-resources" component={SleepInfo} />
                    <Route path="/survey-eating-habits" component={FormEating} />
                    <Route path="/survey-exercise" component={FormExercise} />
                    <Route path="/survey-stress-yn" component={FormStressTired} />
                    <Route path="/community" component={CommunityHome} />
                    <Route path="/MySpace" component={MySpace} />
                    <Route path="/MeditationPage" component={MeditationPage} />
                    <Route path="/JournalHome" component={JournalHome} />
                    <Route path="/JournalPrompts" component={JournalPrompts} />
                    <Route path="/JournalPast" component={JournalPast} />
                </BrowserRouter>
            </div>
        );
        return <App />;
    }
}

export default App;
