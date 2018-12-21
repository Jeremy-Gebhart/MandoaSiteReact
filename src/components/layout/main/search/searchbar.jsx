import React from 'react';
import './searchbar.scss';

export default class SearchBar extends React.Component {
    constructor() {
        super();

        this.state = {
            searchTerm: ""
        };
        this.startSearch = this.startSearch.bind(this);
        this.handleTextBox = this.handleTextBox.bind(this);
    }
    handleTextBox(event) {
        this.setState({searchTerm: event.target.value});
    }
    startSearch() {
        alert(this.state.searchTerm);
    }
    render() {
        return (
            <section className="search-bar">
                <input type="text" onChange={this.handleTextBox} />
                <button onClick={this.startSearch()}>Search</button>
            </section>
        );
    }
}