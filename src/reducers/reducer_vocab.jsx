import { LOAD_VOCAB, ERROR_LOAD_VOCAB } from '../actions/index';

export default function(state = [], action) {

    console.log(action.type);
    console.log(action);
    switch (action.type) {
        case LOAD_VOCAB:
            var returnObj = Object.assign({}, state, {
                wordList: action.payload  
            });
            return returnObj;
        default:
            console.log('returning intial state');
            return state;
    }
}