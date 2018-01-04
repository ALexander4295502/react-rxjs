import React from 'react';
import { render } from 'react-dom';
import './index.css';
import registerServiceWorker from './registerServiceWorker';
import {
    setObservableConfig,
    componentFromStream
} from "recompose";
import rxjsConfig from "recompose/rxjsObservableConfig";
import { Observable } from 'rxjs/Observable';

setObservableConfig(rxjsConfig)

const App = componentFromStream(prop$ =>
    Observable.interval(1000).map(count =>
        (<h1>{count}</h1>)
    )
)

render(<App />, document.getElementById('root'));
registerServiceWorker();
