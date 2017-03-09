import React from 'react';
import {Table, Pagination} from 'sulu-ui';
import {action, autorun, observable, isObservable} from 'mobx';
import {observer} from 'mobx-react';

@observer
export default class DataGrid extends React.Component {
    @observable page = null;
    @observable items = [];

    disposer;

    constructor(props) {
        super(props);
        this.page = 1;
        console.log(this.page);
    }

    componentDidMount() {
        this.disposer = autorun(() => {
            fetch(this.props.baseUrl + '?_limit=20&_start=' + (this.page - 1) * 20)
                .then((response) => {
                    return response.json();
                })
                .then((json) => {
                    this.items = json;
                });
        });
    }

    componentWillUnmount() {
        this.disposer();
    }

    @action handlePageChange = (page) => {
        this.page = page;
    };

    render() {
        return (
            <div>
                <Table items={this.items.toJS()} schema={{title: {title: 'Title'}, userId: {title: 'User'}}}/>
                <Pagination current={this.page} total={5} onChange={this.handlePageChange}/>
            </div>
        );
    }
}
