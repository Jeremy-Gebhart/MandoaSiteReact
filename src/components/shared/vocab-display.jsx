import React, { Component } from 'react';

export default class VocabDisplay extends Component {
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