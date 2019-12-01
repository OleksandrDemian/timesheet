import React from 'react';
import ReactDOM from 'react-dom';

import './index.css';
import 'typeface-roboto';

import * as serviceWorker from './serviceWorker';

import { createStore } from "redux";
import rootReducer from "./reducers/rootReducer";
import {Provider} from "react-redux";
import App from "./components/App";

const store = createStore(rootReducer);

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root'));

serviceWorker.register();