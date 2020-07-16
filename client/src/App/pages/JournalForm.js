//Page to take user to journaling suite or meditation resources

import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { NavLink, withRouter } from 'react-router-dom';

class JournalHome extends Component {
      constructor(props) {
    super(props);
    this.state = {
      value: 'Can I modify the "value" var?.'
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
	<script>
	var WhichPrompt = sessionStorage.getItem("WhichPrompt");
	document.getElementById("WhichPrompt").innerHTML = WhichPrompt;
	</script>
	
	
      <form onSubmit={this.handleSubmit}>
        <label>
          Essay:
          <textarea value={this.state.value} onChange={this.handleChange} />
        </label>
        <input type="submit" value="Submit" />
      </form>
	  </div>
    );
  }
}
export default JournalHome;
