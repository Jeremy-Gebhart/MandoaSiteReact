import React from 'react';
import {NavLink} from 'react-router-dom';

export default class Nav extends React.Component {
    constructor() {
        super();
        this.renderLinks = this.renderLinks.bind(this);
    }
    renderLinks() {
        const links = [
            { url: "/", text: "Home" },
            { url: "/flashcards", text: "Flashcards" },
            { url: "/grammar", text: "Grammar" },
            { url: "/lexicon", text: "Lexicon" },
            { url: "/about", text: "About" }
        ],
        renderedLinks = links.map((link, index) => {
            return <NavLink activeClassName="active" key={index} exact to={link.url}>{link.text}</NavLink>
        });
        return renderedLinks;
    }
    render() {
        return (
            <nav className="mainNav">
                {this.renderLinks()}
            </nav>
        );
    }
}