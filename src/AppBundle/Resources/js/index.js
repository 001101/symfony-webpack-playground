import React from 'react';
import {render} from 'react-dom';
import {addView} from './ViewHandler';
import ViewHandler from './ViewHandler';
import List from './List';
import DataGrid from './DataGrid';

export {addView};

addView('datagrid', DataGrid);
addView('list', List);

const appContainer = document.createElement('div');
document.getElementsByTagName('body')[0].appendChild(appContainer);
render(
    <div>
        <ViewHandler view="datagrid" parameters={{}}/>
    </div>,
    appContainer
);
