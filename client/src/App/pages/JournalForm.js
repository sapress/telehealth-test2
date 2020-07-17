//Page to take user to journaling suite or meditation resources

import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { NavLink, withRouter } from 'react-router-dom';

class JournalHome extends Component {
      constructor(props) {
    super(props);
    this.state = {
      value: localStorage.getItem("WhichPrompt")
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }

  handleSubmit(event) {
    alert('An essay was submitted: ' + this.state.value);
    event.preventDefault();
  }

   

  render() {
    return (
	

	
	<div>
	<div>
	
	
	<script>
	var Prompt = localStorage.getItem("WhichPrompt");
	</script>
	
	</div>
	
	<h1 id="Promptval"/>Hi<h1>
	
	<script>
	document.getElementById("Promptval").innerHTML = "AltText";
	</script>
	
      <form onSubmit={this.handleSubmit}>
        <label>
		<div>
          Essay:
		</div>
          <textarea value={this.state.value} onChange={this.handleChange} />
        </label>
		<div>
        <input type="submit" value="Submit" />
		</div>
	  </form>
	  </div>
    );
  }
}
export default JournalHome;
