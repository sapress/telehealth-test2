//Page to take user to journaling suite or meditation resources

import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { NavLink, withRouter } from 'react-router-dom';

function JournalPrompts() {
  const users = ['James', 'Nora', 'Matthew', 'Joe', 'Susan'];
  
  function deleteUserWithName(name) {
    ...
  }
  
  return (
    <ul>
      {users.map(name => (
        <li>
          <button onClick={() => deleteUserWithName(name)}>
            Click me!
          </button>
        </li>
      ))}
    </ul>
  );
}

export default JournalPrompts;