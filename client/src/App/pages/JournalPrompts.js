//Page to take user to journaling suite or meditation resources

import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { NavLink, withRouter } from 'react-router-dom';

class JournalPrompts extends Component {
    render() {
        return (
            <div className="App">
                <h1>Please Select one of the Following Journal Prompts</h1>

                <div>
				
				<ul> <li onClick={() => console.log("clicked A!")}>A</li> </ul>
				<ul> <li onClick={() => console.log("clicked B!")}>B</li> </ul>
				<ul> <li onClick={() => console.log("clicked C!")}>C</li> </ul>
				<ul> <li onClick={() => console.log("clicked D!")}>D</li> </ul>
				
				</div>
				
				
            </div>
        );
    }
}



export default JournalPrompts;