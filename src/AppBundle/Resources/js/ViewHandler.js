import React from 'react';

const map = {};

export function addView(key, view) {
    map[key] = view;
}

export default (props) => {
    return React.createElement(map[props.view], props.parameters);
};
