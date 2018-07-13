import React from 'react';
import {Route} from 'react-router-dom';

import Home from '../../../home/home.jsx';

export default routes => {
    <section>
        <Route exact path='/' component={Home} />
        <Route path='/grammar' component={Home} />
        <Route path='/lexicon' component={Home} />
        <Route path='/about' component={Home} />
        <Route path='/flashcards' component={Home} />
    </section>
}