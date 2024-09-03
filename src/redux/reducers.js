import { SET_ROCKETS } from './actions';

const initialState = {
  rockets: [],
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_ROCKETS:
      return {
        ...state,
        rockets: action.payload,
      };
    default:
      return state;
  }
};

export default rootReducer;
