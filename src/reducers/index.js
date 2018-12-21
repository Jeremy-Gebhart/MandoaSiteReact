import { combineReducers } from 'redux';
import VocabReducer from './reducer_vocab';

const rootReducer = combineReducers({
    vocabList: VocabReducer
});

export default rootReducer;