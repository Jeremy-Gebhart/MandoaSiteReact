import { LOAD_VOCAB, ERROR_LOAD_VOCAB } from '../actions/index';

export default function(state = [], action) {
    switch (action.type) {
        case LOAD_VOCAB:
            return [ action.payload.data, ...state ];
    }
}