import React from 'react';

export default (props) => <ul>{props.data.map((value) => <li key={value}>{value}</li>)}</ul>;
