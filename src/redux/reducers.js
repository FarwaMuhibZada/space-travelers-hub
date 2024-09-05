import { SET_DRAGONS, DRAGON_TOGGLE_RESERVATION } from './actions';

const initialState = {
  dragons: [],
  reservedDragons: {},
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_DRAGONS:
      return {
        ...state,
        dragons: action.payload,
      };

    case DRAGON_TOGGLE_RESERVATION:
      return {
        ...state,
        reservedDragons: {
          ...state.reservedDragons,
          [action.payload]: !state.reservedDragons[action.payload], // Toggle reservation
        },
      };
    default:
      return state;
  }
};

export default rootReducer;
