import 'babel-polyfill';

import React from 'react';
import {render} from 'react-dom';
import {createStore, applyMiddleware} from 'redux'
import createSagaMiddleware from 'redux-saga'
import {Provider} from 'react-redux'
import {addView} from './ViewHandler';
import ViewHandler from './ViewHandler';
import List from './List';
import DataGrid from './DataGrid';
import reducer from './reducers';
import rootSaga from './sagas';
import {composeWithDevTools} from 'redux-devtools-extension';

export {addView};

addView('datagrid', DataGrid);
addView('list', List);

// create the saga middleware
const sagaMiddleware = createSagaMiddleware();

const store = createStore(
    reducer,
    composeWithDevTools(
        applyMiddleware(sagaMiddleware)
    )
);

sagaMiddleware.run(rootSaga);

const appContainer = document.createElement('div');
document.getElementsByTagName('body')[0].appendChild(appContainer);
render(
    <Provider store={store}>
        <div>
            <ViewHandler view="datagrid" parameters={{type:'CONTACT'}}/>
            <DataGrid type="ACCOUNT"/>
        </div>
    </Provider>,
    appContainer
);
