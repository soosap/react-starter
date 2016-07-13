import React from 'react';
import ReactDOM from 'react-dom';

/*
 |--------------------------------------------------------------------------
 | Global CSS imports to be processed by Webpack
 |--------------------------------------------------------------------------
 |
 | We import all top-level css libraries that will be accessible by the
 | entire app. Customization and Corporate Identity are realized by
 | importing index.scss at the very bottom of the list.
 |
 */
import 'bootstrap/scss/bootstrap.scss';
import './index.scss';

const App = () =>
  <div className="container">
    <div className="jumbotron">
      <h1>Jumbo</h1>
      <p>This is a simple hero unit, a simple jumbotron-style component for calling extra
      attention to featured content or information.</p>
      <p><a className="btn btn-primary btn-lg">Learn more</a></p>
    </div>
    <div>Simple React + Babel + Bootstrap + Webpack + HMR</div>
  </div>;

ReactDOM.render(<App />, document.getElementById('root'));
