import React from 'react';
import {Route} from 'react-router-dom';

import About from '../../../about/about.jsx';
import Flashcards from '../../../flashcards/flashcards.jsx';
import Grammar from '../../../grammar/grammar.jsx';
import Home from '../../../home/home.jsx';
import Lexicon from '../../../../containers/lexicon/lexicon.jsx';


export default class PageRoutes extends React.Component {
    constructor() {
        super();
    }
    render() {
        return (
            <section>
                <Route exact path='/' component={Home} />
                <Route path='/about' component={About} />
                <Route path='/grammar' component={Grammar} />
                <Route path='/flashcards' component={Flashcards} />
                <Route path='/lexicon' component={Lexicon} />
            </section>
        );
    }
}