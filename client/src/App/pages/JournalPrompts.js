//Page to take user to journaling suite or meditation resources

import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { NavLink, withRouter } from 'react-router-dom';



function PromptOne(){
	var WhichPrompt = 'Prompt One';
	sessionStorage.WhichPrompt = JSON.stringify(WhichPrompt);
	alert('Prompt One!');
}

function PromptTwo(){
	var WhichPrompt = 'Prompt Two';
	sessionStorage.WhichPrompt = JSON.stringify(WhichPrompt);
	alert('Prompt Two!');
}


class JournalPrompts extends React.Component {
	render() {
		return(
			<div className="App">


				<h1>Please Select one of the Prompts Below</h1>

			<div>
				<select>
  <option value="grapefruit">Grapefruit</option>
  <option value="lime">Lime</option>
  <option selected value="coconut">Coconut</option>
  <option value="mango">Mango</option>
</select>
			</div>
			</div>
			
		);
	}
}

export default JournalPrompts;
