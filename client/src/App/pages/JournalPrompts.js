//Page to take user to journaling suite or meditation resources

import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { NavLink, withRouter } from 'react-router-dom';





//alert('Prompt Two!');

class JournalPrompts extends React.Component {
	
	 constructor(props) {
    super(props);
    this.state = {
      prompt: 'Select a Prompt: ',
	  essay: 'essay goes here',
    };
	

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({ [event.target.name]: event.target.value });
  }

  handleSubmit(event) {
    alert('Prompt: ' + this.state.prompt + 'Essay: ' + this.state.essay);
    event.preventDefault();
  }
			
	
	render() {
		return(
			<div className="App">


				<h1>Please Select one of the Prompts Below</h1>

		<div>
		<form onSubmit={this.handleSubmit}>
        <label>
          Pick your favorite flavor:
          <select value={this.state.prompt} onChange={this.handleChange}>
            <option value="grapefruit">Grapefruit</option>
            <option value="lime">Lime</option>
            <option value="coconut">Coconut</option>
            <option value="mango">Mango</option>
          </select>
        </label>
        <input type="submit" value="Submit" />
      </form>
	  </div>
	  
	  
	  
	  
	  
	  <div>
	  
	  <form onSubmit={this.handleSubmit}>
        <label>
		<div>
          Essay:
		</div>
          <textarea value={this.state.essay} onChange={this.handleChange} />
        </label>
		<div>
        <input type="submit" value="Submit" />
		</div>
	  </form>
	  
	  </div>
		
		/*
		<div>
		<Link to={'./JournalForm'}>
                    <button variant="raised">Proceed to Journal Form</button>
        </Link>
		</div>
		*/
		
		
		
		
		
		
			</div>
			
		);
	}
}

export default JournalPrompts;
