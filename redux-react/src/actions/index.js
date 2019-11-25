import axios from 'axios';

export const RATESDATA_LOAD_START = 'RATESDATA_LOAD_START';
export const RATESDATA_LOAD_SUCCESS = 'RATESDATA_LOAD_SUCCESS';
export const RATESDATA_LOAD_FAILURE = 'RATESDATA_LOAD_FAILURE';

export const getRateData = () => dispatch => {
  axios
    .get('https://api.ratesapi.io/api/latest?base=USD')
    .then(res => {
      console.log(res);
      dispatch({
        type: RATESDATA_LOAD_SUCCESS,
        payload: res.data.rates
      });
    })
    .catch(err => {
      console.log(err);
      dispatch({
        type: RATESDATA_LOAD_FAILURE,
        payload: 'error loading data'
      });
    });
};
