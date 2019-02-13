import React, { Component } from 'react';

export default class VocabDisplay extends Component {

    constructor(props) {
        super(props);

        //this.index = -1;
    }
    renderTable(entry) {
        console.log(entry);
        //this.index++;
        return (
            <tr>
                <td>{entry.word}</td>
                <td>{entry.pronunciation}</td>
                <td>{entry.definition}</td>
                <td className="mandoa">{entry.word}</td>
            </tr>
        );
    }
    render() {
        let data = [];
        let index = 0;
        if (Object.values(this.props.wordList)[0] !== undefined)
        {
            data = Object.values(this.props.wordList)[0];
        }

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
                        {data.map(this.renderTable)}
                    </tbody>
                </table>
            </section>
        );  
    }
}