import React, {PropTypes} from 'react'
import {Table, Pagination} from 'sulu-ui';
import { connect } from 'react-redux';
import { fetchItems } from './actions';


class DataGrid extends React.Component {

    componentWillMount() {
        this.props.fetchItems(this.props.type);
    }

    render() {
        return (
            <div>
                <Table items={this.props.items} schema={this.props.schema}/>
                <Pagination current={1} total={4} onChange={(page) => { alert(page); }}/>
            </div>
        );
    }
}

DataGrid.propTypes = {
    items: PropTypes.array.isRequired,
    schema: PropTypes.object.isRequired,
    fetchItems: PropTypes.func.isRequired,
    type: PropTypes.string
};

const mapStateToProps = (state, ownProps) => {

    if (!state.hasOwnProperty(ownProps.type)) {
        return {
            items: [],
            schema: {}
        };
    }

    return {
        items: state[ownProps.type].items,
        schema: state[ownProps.type].schema
    };

};

export default connect(
    mapStateToProps,
    {
        fetchItems
    }
)(DataGrid)
