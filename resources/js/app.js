
// import Books from './components/Books';
//require('./bootstrap');
// require('./components/Books');

import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Routes, Route, NavLink } from 'react-router-dom';
import Books from './components/Books';
 
export default function App() {
    return (
        <Router>
            <div>
                <NavLink to='/books'>Books</NavLink>
            </div>
            <Routes>
                <Route exact path='/books' component={Books} />
            </Routes>
        </Router>
    );
}
ReactDOM.render(<App />, document.getElementById("app"));