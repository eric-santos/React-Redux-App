import {
  RATESDATA_LOAD_START,
  RATESDATA_LOAD_FAILURE,
  RATESDATA_LOAD_SUCCESS
} from '../actions';

//unable to use {object} here, throws error
const initialState = {
  isLoading: false,
  error: '',
  rates: []
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case RATESDATA_LOAD_START:
      return {
        ...state
      };
    case RATESDATA_LOAD_SUCCESS:
      return {
        ...state,
        rate: { ...state.rate },
        isLoading: false
      };
    case RATESDATA_LOAD_FAILURE:
      return {
        ...state,
        error: action.payload,
        isLoading: false
      };
    default:
      return state;
  }
};

export default reducer;
