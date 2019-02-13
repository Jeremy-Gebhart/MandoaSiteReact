import axios from 'axios';

export const LOAD_VOCAB = 'LOAD_VOCAB';
export const ERROR_LOAD_VOCAB = 'ERROR_LOAD_VOCAB';

export async function fetchWordList(jsonFilename) {
    console.log('Retrieving data!');
    const url = `data/mandoa_sorted/${jsonFilename}.json`;
    let promise = axios.get(url);
    let response = await promise;

    return {
        type: LOAD_VOCAB,
        payload: response.data
    };
}