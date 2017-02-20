import React from 'react';
import {render} from 'react-dom';
import {addView} from './ViewHandler';
import ViewHandler from './ViewHandler';
import List from './List';

export {addView};

addView('list', List);

const appContainer = document.createElement('div');
document.getElementsByTagName('body')[0].appendChild(appContainer);
render(
    <div>
        {/*<ViewHandler view="view" parameters={{text: "Test from AppBundle"}}/>*/}
        <ViewHandler view="list" parameters={{data: [1, 2, 3, 4, 5]}}/>
    </div>,
    appContainer
);
