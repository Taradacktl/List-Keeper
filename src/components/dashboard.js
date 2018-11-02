import React from 'react';
import {connect} from 'react-redux';

import List from './list';
import AddForm from './add-form';

import {addList, fetchBoard} from '../actions/dashboard';

import './dashboard.css';

export class Dashboard extends React.Component {
    componentDidMount() {
        this.props.dispatch(fetchBoard());
    }

    addList(title) {
        this.props.dispatch(addList(title, this.props.match.params.boardId));
    }

    render() {
        const lists = this.props.lists.map((list, index) => (
            <li className="list-wrapper" key={index}>
                <List index={index} boardId={this.props.match.params.boardId} {...list} />
            </li>
        ));

        return (
            <div className="dashboard">
            
                <h3>{this.props.match.params.boardId}</h3>
                <ul className="lists">
                    {lists}
                    <li className="add-list-wrapper">
                        <AddForm
                            type="list"
                            onAdd={title => this.addList(title)}
                        />
                    </li>
                </ul>
            </div>
        );
    }
}

Dashboard.defaultProps = {
    title: 'List Keeper'
};

const mapStateToProps = (state, props) => {
    const dashboard = Object.assign(
        {},
        {
            lists: []
        },
        state.dashboards[props.match.params.boardId]
    );
    return{
        lists: dashboard.lists
    };
};

export default connect(mapStateToProps)(Dashboard);
