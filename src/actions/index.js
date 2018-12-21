import Axios from 'axios';

export const LOAD_VOCAB = 'LOAD_VOCAB';
export const ERROR_LOAD_VOCAB = 'ERROR_LOAD_VOCAB';

export function fetchWordList(jsonFilename) {
    const url = `data/mandoa_sorted/${jsonFilename}.json`;
    Axios.get(url)
        .then((response) => {                
            console.log(response.data);
            return {
                type: LOAD_VOCAB,
                payload: response.data
            }
        })
        .catch((error) => {
            return {
                type: ERROR_LOAD_VOCAB,
                payload: error // View will handle differentiating what it was given
            }            
        });
}