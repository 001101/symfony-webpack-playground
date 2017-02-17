import React from 'react';
import {render} from 'react-dom';
import ExtensionBundle from 'extension-bundle';
import {addView} from './ViewHandler';
import ViewHandler from './ViewHandler';
import List from './List';

export {addView};

addView('list', List);

ExtensionBundle();

render(
    <div>
        <ViewHandler view="view" parameters={{text: "Test from AppBundle"}}/>
        <ViewHandler view="list" parameters={{data: [1, 2, 3, 4, 5]}}/>
    </div>,
    document.getElementById('main')
);
