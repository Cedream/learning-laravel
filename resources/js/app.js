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

// import React from 'react';
// import ReduxToastr from 'react-redux-toastr'
// import 'react-redux-toastr/lib/css/react-redux-toastr.min.css'
// import AuthRouter from './AuthRouter';

// const App = () => (
//     <>        
//         <AuthRouter/>
//         <ReduxToastr
//             timeOut={4000}
//             newestOnTop={false}
//             preventDuplicates
//             position="top-right"
//             getState={(state) => state.toastr}
//             transitionIn="bounceIn"
//             transitionOut="bounceOut"
//             loseOnToastrClick/>
//         </>
// );

// export default App