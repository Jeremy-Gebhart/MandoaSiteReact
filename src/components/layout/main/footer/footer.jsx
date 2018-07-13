import React from 'react'

export default class Footer extends React.Component {
    constructor() {
        super();
    }
    render() {
        return (
            <footer>
                <hr />
                <p>
                    This project is created and maintained by Jeremy Gebhart<br />
                    Original Mando&#39;a dictionary created by Karen Traviss<br />
                    All Mando&#39;a language material is copyrighted by Lucasfilm Ltd &trade;<br />
                    This is an unofficial fan website and is not affiliated with Lucasfilm Ltd &trade;.<br />
                    &ldquo;Star Wars&rdquo; and all related material belongs to Lucasfilm Ltd &trade; &copy;2018
                </p>
            </footer>
        );
    }
}