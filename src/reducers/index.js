import { combineReducers } from 'redux';
import VocabReducer from './reducer_vocab.jsx';

const rootReducer = combineReducers({
    vocabList: VocabReducer
});

export default rootReducer;