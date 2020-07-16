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
	
	<h1 id="id01">Prompt Here</h1>
	
	
	<head>
		<script>
			function myFunction() {
			var number = "123";
			document.getElementById("myText").innerHTML = number;
			}
		</script>
	</head>

<body onload="myFunction()">

  <h1>"The value for number is: " <span id="myText"></span></h1>

</body>
	
	
	
	

	
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
