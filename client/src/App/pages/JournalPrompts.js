//Page to take user to journaling suite or meditation resources

import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { NavLink, withRouter } from 'react-router-dom';

class JournalPrompts extends React.Component {

<h1>Please Select one of the Prompts Below</h1>

<div>

	<div>
	<Link to={'./JournalPrompts'}>
        <button variant="raised">Prompt One</button>
		var WhichPrompt = "PromptOne";
		<script>
		sessionStorage.setItem("WhichPrompt","PromptOne");
		</script>
    </Link>
	</div>
	
	
</div>

}



export default JournalPrompts;