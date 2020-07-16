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
	
	<div>
	<html>
	<body>
	<p id="demo"></p>
	<script>
	var WhichPrompt = localStorage.getItem("WhichPrompt");
	document.getElementById("WhichPrompt").innerHTML = WhichPrompt;
	</script>
	</body>
	</html>
	</div>
	
	
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
