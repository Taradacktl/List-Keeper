import React from 'react';
import {connect} from 'react-redux';
import RequiresLogin from './requires-login';
import List from './list';
import AddForm from './add-form';
import { clearAuth } from '../actions/auth';
import { clearAuthToken } from '../local-storage';
import {Link} from 'react-router-dom';
import {addList, fetchBoard} from '../actions/dashboard';

import './dashboard.css';

export class Dashboard extends React.Component {
    logOut() {
        this.props.dispatch(clearAuth());
        clearAuthToken();
    }

    componentDidMount() {
        this.props.dispatch(fetchBoard());
    }

    addList=(title) => {
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
                <Link to="/landingpage" onClick={() => this.logOut()}>Logout</Link>
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

const mapStateToProps = state => ({

        lists: state.protectedData.lists
});

export default RequiresLogin()(connect(mapStateToProps)(Dashboard));
