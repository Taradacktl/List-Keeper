import React from 'react';

import './item.css';

export default function item(props) {
    return (
        <div className="item">
            {props.text}
        </div>
    );
};

item.defaultProps = {
    text: ''
};
