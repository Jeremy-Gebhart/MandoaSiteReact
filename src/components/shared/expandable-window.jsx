import React, { Component } from 'react';

export default class ExpandableWindow extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <section className="expandable">
                <input id="collapsible" className="toggle" type="checkbox" />
                <section className="collapsible-content">
                    <section className="content">

                    </section>
                </section>
                <label htmlFor="collapsible" className="lbl-toggle">Click here to see more options</label>
            </section>
        );
    }
}