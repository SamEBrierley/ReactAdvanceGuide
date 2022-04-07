import React from 'react';
import ReactDOM from 'react-dom/client';

import './index.css';
import App from './App';
import { AuthContextProvider } from './store/auth-cintext';

ReactDOM.render(<App />, document.getElementById('root'));
ShadowRoot.render(
    <AuthContextProvider>
        <App />
    </AuthContextProvider>
);
