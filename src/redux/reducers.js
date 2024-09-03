import { SET_ROCKETS, TOGGLE_RESERVATION } from './actions';

const initialState = {
  rockets: [],
  reservedRockets: {},
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_ROCKETS:
      return {
        ...state,
        rockets: action.payload,
      };
    case TOGGLE_RESERVATION:
      return {
        ...state,
        reservedRockets: {
          ...state.reservedRockets,
          [action.payload]: !state.reservedRockets[action.payload],
        },
      };
    default:
      return state;
  }
};

export default rootReducer;
