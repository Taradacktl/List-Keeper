import React from 'react';
import {connect} from 'react-redux';

import List from './list';
import AddForm from './add-form';

import {addList, fetchBoard} from '../actions';

import './board.css';

export class Board extends React.Component {
    constructor(props) {
        super(props);

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
            <div className="board">
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

Board.defaultProps = {
    title: 'List Keeper',
    description: 'Keep all your lists in one place'
};

const mapStateToProps = state => ({
    lists: state.lists
});

export default connect(mapStateToProps)(Board);
