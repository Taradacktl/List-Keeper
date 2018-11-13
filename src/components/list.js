import React from 'react';
import {connect} from 'react-redux';

import Item from './item';
import AddForm from './add-form';

import {saveItem} from '../actions/dashboard';

export class List extends React.Component {
    addItem(text) {
        this.props.dispatch(saveItem(text, this.props.index));
    }

    render() {
        const items = this.props.items.map((item, index) =>
            <li key={index}>
                <Item {...item} />
            </li>
        );
        return (
            <div>
                <h3>{this.props.title}</h3>
                <ul className="list">
                    {items}
                    <li>
                        <AddForm
                            type="item"
                            onAdd={text => this.addItem(text)}
                        />
                    </li>
                </ul>
            </div>
        );
    }
}

List.defaultProps = {
    title: ''
};

export default connect()(List);
