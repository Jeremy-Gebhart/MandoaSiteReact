import React from 'react';
import './header.scss';

export default class Header extends React.Component {
    constructor() {
        super();
    }
    render() {
        return (
            <header className="headerComponent">
                <span className="title">Mando&#39;a Learning Center</span>
            </header>
        );
    }
}