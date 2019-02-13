import React, { Component } from 'react';
import { connect } from 'react-redux';

import './Lexicon.scss';
import Greeting from '../../components/shared/greetings.jsx';
import LinkButton from  '../../components/shared/link-button.jsx';
import VocabDisplay from '../../components/shared/vocab-display.jsx';

class Lexicon extends Component {
    constructor(props)
    {
        super(props);

        this.state = {
            isTableHidden: true,
            isGreetingHidden: false
        }       
    }
    
    render() {
        console.log('Rendering!');

        // The greeting is shown the first time the page loads. It needs to be disabled when any of the vocab buttons are clicked.
        // if (!this.state.isGreetingHidden) {
        //     this.setState({
        //         isGreetingHidden: true
        //     });
        // }
        // if (Object.values(this.props.wordList)[0] !== undefined && Object.values(this.props.wordList)[0].length > 0)
        // {
        //     console.log('Showing table!');
        //     this.setState({
        //         isTableHidden: false
        //     });
        // }

        return (
            <section className="lexiconComponent">
                <h1>Lexicon</h1>
                <article className="linkList">                    
                    <LinkButton linkText="A" lookup="a_vocab" />
                    <LinkButton linkText="B" lookup="b_vocab" />
                    <LinkButton linkText="C" lookup="c_vocab" />
                    <LinkButton linkText="D" lookup="d_vocab" />
                    <LinkButton linkText="E" lookup="e_vocab" />
                    <LinkButton linkText="F" lookup="f_vocab" />
                    <LinkButton linkText="G" lookup="g_vocab" />
                    <LinkButton linkText="H" lookup="h_vocab" />
                    <LinkButton linkText="I" lookup="i_vocab" />
                    <LinkButton linkText="J" lookup="j_vocab" />
                    <LinkButton linkText="K" lookup="k_vocab" />
                    <LinkButton linkText="L" lookup="l_vocab" />
                    <LinkButton linkText="M" lookup="m_vocab" />
                    <LinkButton linkText="N" lookup="n_vocab" />
                    <LinkButton linkText="O" lookup="o_vocab" />
                    <LinkButton linkText="P" lookup="p_vocab" />
                    <LinkButton linkText="R" lookup="r_vocab" />
                    <LinkButton linkText="S" lookup="s_vocab" />
                    <LinkButton linkText="T" lookup="t_vocab" />
                    <LinkButton linkText="U" lookup="u_vocab" />
                    <LinkButton linkText="V" lookup="v_vocab" />
                    <LinkButton linkText="W" lookup="w_vocab" />
                    <LinkButton linkText="Y" lookup="y_vocab" />
                    <LinkButton linkText="Numbers" lookup="numbers" />
                    <LinkButton linkText="Phrases" lookup="phrases" />
                    <LinkButton linkText="Prepositions" lookup="prepositions" />
                </article>
                <VocabDisplay wordList={this.props.wordList} />
            </section>
        );
    }
}

function mapStateToProps({ vocabList }) {
    return { 
        wordList: vocabList 
    }; // This sets up the state to appear as props in the component
}


export default connect(mapStateToProps)(Lexicon); // Connect to Redux
