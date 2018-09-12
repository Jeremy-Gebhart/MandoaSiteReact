import React from 'react';
import Axios from 'axios';
import "./Lexicon.scss";

export default class Lexicon extends React.Component {
    constructor()
    {
        super();

        this.state = {
            wordList: [],
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

        let url = "data/mandoa_sorted/" + datasetName + '.json';
        Axios.get(url)
            .then((response) => {                
                console.log(response.data);
                this.setState((prevState) => ({
                    wordList: response.data,
                    isTableHidden: false
                }));
            })
            .catch((error) => {
                
            });
    }
    render() {
        return (
            <section className="lexiconComponent">
                <h1>Lexicon</h1>
                <article className="linkList">                    
                    <LinkButton linkText="A" clickEvent={() => this.getWordList('a_vocab')} />
                    <LinkButton linkText="B" clickEvent={() => this.getWordList('b_vocab')} />
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
                {!this.state.isTableHidden && <VocabDisplay wordList={this.state.wordList} />}
            </section>
        );
    }
}

const LinkButton = (props) => {
    return (
        <a onClick={props.clickEvent}>
            {props.linkText}
        </a>
    );
}

const Greeting = (props) => {
    return (
        <section id="starterMessage" className="show">
            Please select a letter of the alphabet to begin.
        </section>
    );
}

 class VocabDisplay extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        let key = Date.now();
        
        return (
            <section>
                <table>
                    <thead>
                        <tr>
                            <th><strong>Word</strong></th>
                            <th><strong>Pronunciation</strong></th>
                            <th><strong>Definition</strong></th>
                            <th><strong>Mando&#39;a Spelling of Word</strong></th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.props.wordList.map(entry => {
                            return (<tr>
                                <td>{entry.word}</td>
                                <td>{entry.pronunciation}</td>
                                <td>{entry.definition}</td>
                                <td className="mandoa">{entry.word}</td>
                            </tr>
                        )})}
                    </tbody>
                </table>
            </section>
        );  
    }
}

class ExpandableWindow extends React.Component {
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