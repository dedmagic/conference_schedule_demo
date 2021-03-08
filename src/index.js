import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import ReactDOM from 'react-dom';
import './css/index.css';
import App from './components/App';
import reportWebVitals from './reportWebVitals';
import { Provider } from 'mobx-react';

import topMenuStore from './store/TopMenuStore';

const stores = {
    topMenuStore
}

ReactDOM.render(
    //   <React.StrictMode>
    //     <App />
    //   </React.StrictMode>,
    <Provider {...stores}>
        <App />
    </Provider>,
    document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
