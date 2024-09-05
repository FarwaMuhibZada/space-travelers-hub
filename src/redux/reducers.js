import { SET_MISSIONS, JOIN_MISSION, LEAVE_MISSION } from './actions';

const initialState = {
  missions: [],
};

// Reducer function to handle missions-related actions
const missionsReducer = (state = initialState.missions, action) => {
  switch (action.type) {
    case SET_MISSIONS:
      return action.payload;

    case JOIN_MISSION:
      return state.map((mission) =>
        mission.mission_id === action.payload
          ? { ...mission, reserved: true }
          : mission
      );

    case LEAVE_MISSION:
      return state.map((mission) =>
        mission.mission_id === action.payload
          ? { ...mission, reserved: false }
          : mission
      );
    default:
      return state;
  }
};

// Combine all reducers into one rootReducer
const rootReducer = (state = initialState, action) => {
  return {
    missions: missionsReducer(state.missions, action),
  };
};

export default rootReducer;
