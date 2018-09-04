import React from 'react';
import "./home.scss"

export default class Home extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return(
            <section className="homeComponent">
                <h1>Welcome to learn Mando&#39;a</h1><br/>
                <article>
                    Want to learn Mando'a? Then this site is for you. What is Mando'a? Mando'a is the language used by the Mandalorians in Star Wars Legends and, as of Rebels Season 3, canon.
                This site is dedicated to displaying information that will aid you in learning the language.
                </article>
            </section>
        );
    }
}