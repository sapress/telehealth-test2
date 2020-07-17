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
        <label>
		
          <select name="prompt" value={this.state.prompt} onChange={this.handleChange}>
            
			<option value="p1">
				Describe something that happened in the last week you have strong feelings about. What happened? What did you do in response?
			</option>
			
            <option value="p2">
				Describe a goal you have for the next [time frame]. What steps do you need to take in order to achieve it? How can you start to do so now?
			</option>
			
            <option value="p3">
				Write about a song you have been listening to a lot recently. Why do you think you are drawn to it?
			</option>
			
            <option value="p4">
				What is the last dream you had that you remember?
			</option>
			
			<option value="p5">
				Describe something you're looking forward to this week:
			</option>
			
			<option value="p6">
				Think about the last time you had strong conflict with someone. What did you do to resolve it? What did you learn from that experience for the next time a similar situation occurs?
			</option>
          
		  </select>
        </label>
	  </div>
	  
	  
	  
	  
	  
	  <div>
	  
	  <form onSubmit={this.handleSubmit}>
        <label>
		<div>
          Essay:
		</div>
          <textarea name="essay" value={this.state.essay} onChange={this.handleChange} />
        </label>
		<div>
        <input type="submit" value="Submit" />
		</div>
	  </form>
	  
	  </div>
		

		
		
		
		
		
		
			</div>
			
		);
	}
}

export default JournalPrompts;
