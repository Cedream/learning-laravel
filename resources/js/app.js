
// import Books from './components/Books';
// require('./bootstrap');
// require('./components/Books');

import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Routes, Route, NavLink } from 'react-router-dom';
import Books from './components/Books';
import Login from './components/Login';
 
export default function App() {
    return (
        <Router>
            <div>
                <NavLink to='/login'>Login</NavLink>
                <NavLink to='/books'>Books</NavLink>
            </div>
            <Routes>
                <Route path='/books' element={<Books />} ></Route>
                <Route path='login' element={<Login />} ></Route>
            </Routes>
        </Router>
    );
}
ReactDOM.render(<App />, document.getElementById("app"));