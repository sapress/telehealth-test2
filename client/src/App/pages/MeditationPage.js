// Landing page for functionality allowing students to:
// message other students (anon or no),
// form groups (group messaging),
// etc. TODO
// - overall encourages support group formation

import React from 'react';
import { Component } from 'react';

const { render } = require('react-dom');

class MeditationPage extends React.Component {
    render() {
        return(
		
			<section>
			<h2>Audio Resources for Guided Meditation</h2>
			<div>
			<dl>
				<dt><a href="https://www.mindful.org/5-guided-meditations-to-investigate-panic-and-anxiety/" target="_blank">Guided Meditation for Panic and Anxiety (credit: mindful.org)</a></dt>
					<dd>This resouce contains:</dd>
					<dd> - 30-Minute Meditation to Calm Panic (Bob Stahl) </dd>
					<dd> - 16-Minute Meditation to Create Space (Jessica Morey)</dd>
					<dd> - 20-Minute Anxiety Practice (Hugh Byrne)</dd>
					<dd> - 10-Minute Meditation for Difficult Emotions (Carley Hauck)</dd>
					<dd> - 20-Minute Meditation on Anxious Emotions (Bob Stahl)</dd>
			</dl>
			</div>
			<div>
				Don't have that much time? Click <a href="https://www.mindful.org/5-guided-meditations-to-investigate-panic-and-anxiety/" target="_blank"><b>here</b></a> for a collection of guided meditations 5 minutes or less.
			</div>
			</section>
		
		)
    }
}

export default MeditationPage;
