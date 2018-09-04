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

        let url = "data/mandoa_sorted/" + datasetName + '_vocab.json';
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
                    <LinkButton linkText="A" clickEvent={() => this.getWordList('a')} />
                    <LinkButton linkText="B" clickEvent={() => this.getWordList('b')} />
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