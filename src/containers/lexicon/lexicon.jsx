import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchWordList } from '../../actions/index';

import './Lexicon.scss';
import Greeting from '../../components/shared/greetings';
import LinkButton from  '../../components/shared/link-button';
import VocabDisplay from '../../components/shared/vocab-display';

class Lexicon extends Component {
    constructor(props)
    {
        super(props);

        this.state = {
            isTableHidden: true,
            isGreetingHidden: false
        }

        this.getWordList = this.getWordList.bind(this);
    }
    getWordList(datasetName) {
        // The greeting is shown the first time the page loads. It needs to be disabled when any of the vocab buttons are clicked.
        if (!this.state.isGreetingHidden) {
            this.setState({
                isGreetingHidden: true
            });
        }
        this.props.fetchWordList(dataetName);
    }
    render() {
        return (
            <section className="lexiconComponent">
                <h1>Lexicon</h1>
                <article className="linkList">                    
                    <LinkButton linkText="A" clickEvent={() => this.getWordList('a_vocab')} />
                    <LinkButton linkText="B" clickEvent={() => tthis.getWordList('b_vocab')} />
                    <LinkButton linkText="C" clickEvent={() => this.getWordList('c_vocab')} />
                    <LinkButton linkText="D" clickEvent={() => this.getWordList('d_vocab')} />
                    <LinkButton linkText="E" clickEvent={() => this.getWordList('e_vocab')} />
                    <LinkButton linkText="F" clickEvent={() => this.getWordList('f_vocab')} />
                    <LinkButton linkText="G" clickEvent={() => this.getWordList('g_vocab')} />
                    <LinkButton linkText="H" clickEvent={() => this.getWordList('h_vocab')} />
                    <LinkButton linkText="I" clickEvent={() => this.getWordList('i_vocab')} />
                    <LinkButton linkText="J" clickEvent={() => this.getWordList('j_vocab')} />
                    <LinkButton linkText="K" clickEvent={() => this.getWordList('k_vocab')} />
                    <LinkButton linkText="L" clickEvent={() => this.getWordList('l_vocab')} />
                    <LinkButton linkText="M" clickEvent={() => this.getWordList('m_vocab')} />
                    <LinkButton linkText="N" clickEvent={() => this.getWordList('n_vocab')} />
                    <LinkButton linkText="O" clickEvent={() => this.getWordList('o_vocab')} />
                    <LinkButton linkText="P" clickEvent={() => this.getWordList('p_vocab')} />
                    <LinkButton linkText="R" clickEvent={() => this.getWordList('r_vocab')} />
                    <LinkButton linkText="S" clickEvent={() => this.getWordList('s_vocab')} />
                    <LinkButton linkText="T" clickEvent={() => this.getWordList('t_vocab')} />
                    <LinkButton linkText="U" clickEvent={() => this.getWordList('u_vocab')} />
                    <LinkButton linkText="V" clickEvent={() => this.getWordList('v_vocab')} />
                    <LinkButton linkText="W" clickEvent={() => this.getWordList('w_vocab')} />
                    <LinkButton linkText="Y" clickEvent={() => this.getWordList('y_vocab')} />
                    <LinkButton linkText="Numbers" clickEvent={() => this.getWordList('numbers')} />
                    <LinkButton linkText="Phrases" clickEvent={() => this.getWordList('phrases')} />
                    <LinkButton linkText="Prepositions" clickEvent={() => this.getWordList('prepositions')} />
                </article>
                {!this.state.isGreetingHidden && <Greeting />}
                {!this.state.isTableHidden && <VocabDisplay wordList={this.props.wordList} />}
            </section>
        );
    }
}

function mapStateToProps({ wordList, isTableHidden, isGreetingHidden }) {
    return { wordList }; // This sets up the state to appear as props in the component
}

function mapDispatchToProps(dispatch) {
    bindActionCreators({ fetchWordList }, dispatch); // Connect lookup action to container
}

export default connect(mapStateToProps, mapDispatchToProps)(Lexicon); // Connect to Redux
