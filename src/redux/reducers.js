import {
  SET_ROCKETS, TOGGLE_RESERVATION,
  SET_DRAGONS, DRAGON_TOGGLE_RESERVATION,
  SET_MISSIONS, JOIN_MISSION, LEAVE_MISSION,
} from './actions';

const initialState = {
  rockets: [],
  reservedRockets: {}, // Store reserved rocket IDs as keys with true/false values
  dragons: [],
  reservedDragons: {}, // Store reserved dragon IDs as keys with true/false values
  missions: [], // Mission list with a reserved flag
};

// Root reducer for all entities: rockets, dragons, missions
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
          [action.payload]: !state.reservedRockets[action.payload], // Toggle reservation
        },
      };

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

    case SET_MISSIONS:
      return {
        ...state,
        missions: action.payload,
      };

    case JOIN_MISSION:
      return {
        ...state,
        missions: state.missions.map((mission) => (
          mission.mission_id === action.payload
            ? { ...mission, reserved: true } // Set reserved to true
            : mission
        )),
      };

    case LEAVE_MISSION:
      return {
        ...state,
        missions: state.missions.map((mission) => (
          mission.mission_id === action.payload
            ? { ...mission, reserved: false } // Set reserved to false
            : mission
        )),
      };

    default:
      return state;
  }
};

export default rootReducer;
