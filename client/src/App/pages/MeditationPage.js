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
				<a href="https://www.mindful.org/5-guided-meditations-to-investigate-panic-and-anxiety/" target="_blank">Guided Meditation for Panic and Anxiety (credit: mindful.org)</a>
			</div>
			</section>
		
		)
    }
}

export default MeditationPage;
