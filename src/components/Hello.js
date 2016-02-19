import React from 'react';
import { Link } from 'react-router';

export default (props) => {
  require('../../css/base.css');
  require('../../css/index.css');

  return (
    <div>
      <section className="todoapp">
        <header className="header">
          <h1>welcome</h1>
        </header>
      </section>
      <footer className="info">
        <p className="todo-link"><Link to="/todo">TODO App</Link></p>
      </footer>
    </div>
  )
};
