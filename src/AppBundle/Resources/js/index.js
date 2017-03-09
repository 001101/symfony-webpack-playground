import React from 'react';
import {render} from 'react-dom';
import ViewHandler, {addView} from './ViewHandler';
import App from './App';
import List from './List';
import DataGrid from './DataGrid';
import ViewStore from './ViewStore';
import {Router} from 'director/build/director';
import DevTools from 'mobx-react-devtools';
import {autorun} from 'mobx';
import {observer} from 'mobx-react';

export {addView};

addView('datagrid', DataGrid);
addView('list', List);

const appContainer = document.createElement('div');
const viewStore = new ViewStore();

function showPosts() {
    viewStore.showRoute('posts', {view: 'datagrid', parameters: {baseUrl: 'http://jsonplaceholder.typicode.com/posts'}});
}

function showTodos() {
    viewStore.showRoute('todos', {view: 'datagrid', parameters: {baseUrl: 'http://jsonplaceholder.typicode.com/todos'}});
}

//Router
const router = new Router({
    '/posts': () => showPosts(),
    '/todos': () => showTodos(),
})
.configure({
    html5history: false
})
.init();

autorun(() => {
    const path = viewStore.currentPath;
    if (path !== window.location.pathname) {
        window.history.pushState(null, null, path);
    }
});

const CurrentView = observer(() => {
    const view = viewStore.currentView.parameters;
    return <ViewHandler key={viewStore.currentView.name} view={view.view} parameters={view.parameters}/>;
});

document.getElementsByTagName('body')[0].appendChild(appContainer);
render(
    <div>
        <a onClick={showPosts}>Posts with state</a><br/>
        <a onClick={showTodos}>Todos with state</a><br/>
        <DevTools />
        <CurrentView/>
    </div>,
    appContainer
);
