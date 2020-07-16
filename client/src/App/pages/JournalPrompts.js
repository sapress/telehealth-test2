//Page to take user to journaling suite or meditation resources

import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { NavLink, withRouter } from 'react-router-dom';

handleClick(){
	alert('buttonclick!');
}

function PromptOne(){
	var WhichPrompt = 'Prompt One';
	sessionStorage.WhichPrompt = JSON.stringify(WhichPrompt);
	active={activeItem === 'JournalForm'}
}

function PromptTwo(){
	var WhichPrompt = 'Prompt Two';
	sessionStorage.WhichPrompt = JSON.stringify(WhichPrompt);
	active={activeItem === 'JournalForm'}
}


class JournalPrompts extends React.Component {
	render() {
		return(
			<div className="App">


				<h1>Please Select one of the Prompts Below</h1>

			<div>
				<div>
					<button onclick={PromptOne}>Prompt One</button>
				</div>
				
				<div>
				
					<button onclick={PromptTwo}>Prompt Two</button>

				</div>
			</div>
			</div>
			
		);
	}
}

export default JournalPrompts;
