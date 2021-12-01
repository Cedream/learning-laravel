import React from 'react';
import ReduxToastr from 'react-redux-toastr'
import 'react-redux-toastr/lib/css/react-redux-toastr.min.css'
import AuthRouter from './AuthRouter';
import '../css/app.css';

const App = () => (
    <>        
        <AuthRouter/>
        <ReduxToastr
            timeOut={4000}
            newestOnTop={false}
            preventDuplicates
            position="top-right"
            getState={(state) => state.toastr}
            transitionIn="bounceIn"
            transitionOut="bounceOut"
            loseOnToastrClick/>
    </>
);

export default App