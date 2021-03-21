import {CHANGE_QUOTE} from '../actions/types';

const initialState = {
  index: 1
  };

  const quoteReducer = (state=initialState, action) => {
      switch(action.type) {
          case CHANGE_QUOTE:
              return {
                  index: action.payload
              }
        default:
            return state;
      }
  }

  export default quoteReducer;