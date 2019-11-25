import { RATESDATA_LOAD_START } from '../actions';

const initialState = {
  isLoading: false,
  error: '',
  base: '',
  rates: {}
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case RATESDATA_LOAD_START:
      return {
        ...state
      };
    default:
      return state;
  }
};

export default reducer;
