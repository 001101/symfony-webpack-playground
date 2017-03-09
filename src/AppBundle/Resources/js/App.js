import React from 'react';
import DataGrid from './DataGrid';
import {observer} from 'mobx-react';

export default class App extends React.Component {
    render() {
        return (
            <div>
                <DataGrid baseUrl="http://jsonplaceholder.typicode.com/posts" />
                <DataGrid baseUrl="http://jsonplaceholder.typicode.com/todos" />
            </div>
        );
    }
}
