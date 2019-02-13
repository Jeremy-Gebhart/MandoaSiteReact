import React, {Component} from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchWordList } from '../../actions/index';

// TODO: move action into here

class LinkButton extends Component {
    constructor(props) {
        super(props);

        this.getWordList = this.getWordList.bind(this);
    }
    getWordList(datasetName) {
        this.props.fetchWordList(datasetName);
    }
    render() {
        return (
            <a onClick={() => this.getWordList(this.props.lookup)}>
                {this.props.linkText}
            </a>
        );
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({ fetchWordList }, dispatch); // Connect lookup action to container
 }

export default connect(null, mapDispatchToProps)(LinkButton);