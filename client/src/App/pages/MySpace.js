//Page to take user to journaling suite or meditation resources

import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { NavLink, withRouter } from 'react-router-dom';

class MySpace extends Component {
    render() {
        return (
            <div className="App">
                <h1>My Personal Space</h1>

                {/* Link to List.js */}
                <Link to={'./JounralForm'}>
                    <button variant="raised">My Journal</button>
                </Link>
				
				{/* Link to List.js */}
                <Link to={'./list'}>
                    <button variant="raised">Practice Meditation</button>
                </Link>
				
				<a href="url">https://www.mindful.org/5-guided-meditations-to-investigate-panic-and-anxiety/</a>
				
            </div>
        );
    }
}
export default MySpace;
