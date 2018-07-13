import React from 'react';

// Components
import Header from './header/header.jsx';
import Nav from './nav/nav.jsx';
import Footer from './footer/footer.jsx';
import PageRoutes from './pageRoutes/pageRoutes.jsx';
import {BrowserRouter as Router} from 'react-router-dom'

//import './main.css';
export default class main extends React.Component {
    constructor() {
        super();
    }
    render() {
        return (
            <Router>
                <section>
                    <Header />
                    <Nav />
                    <PageRoutes />
                    <Footer />
                </section>
            </Router>
        );
    }
}