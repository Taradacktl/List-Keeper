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
        this.props.dispatch(addList(title));
    }

    render() {
        const lists = this.props.lists.map((list, index) => (
            <li className="list-wrapper" key={index}>
                <List index={index} {...list} />
            </li>
        ));

        return (
            <div className="dashboard">
                <h1>{this.props.title}</h1>
                <h2>{this.props.description}</h2>
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
    title: 'List Keeper',
    description: 'Keep all your lists in one place'
};

const mapStateToProps = state => {
    
    return{
        lists: state.lists
    };
};

export default connect(mapStateToProps)(Dashboard);
