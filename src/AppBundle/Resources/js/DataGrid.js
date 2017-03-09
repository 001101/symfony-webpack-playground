import React from 'react';
import {Table, Pagination} from 'sulu-ui';

export default class DataGrid extends React.Component {
    render() {
        return (
            <div>
                <Table items={[{id: 1, test: 1}]} schema={{test: {title: 'Test'}}}/>
                <Pagination current={1} total={4}/>
            </div>
        );
    }
}
