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
const rootReducer = (state, action) => {
  // Set default state if not provided
  const currentState = state || initialState;

  switch (action.type) {
    case SET_ROCKETS:
      return {
        ...currentState,
        rockets: action.payload,
      };

    case TOGGLE_RESERVATION:
      return {
        ...currentState,
        reservedRockets: {
          ...currentState.reservedRockets,
          [action.payload]: !currentState.reservedRockets[action.payload], // Toggle reservation
        },
      };

    case SET_DRAGONS:
      return {
        ...currentState,
        dragons: action.payload,
      };

    case DRAGON_TOGGLE_RESERVATION:
      return {
        ...currentState,
        reservedDragons: {
          ...currentState.reservedDragons,
          [action.payload]: !currentState.reservedDragons[action.payload], // Toggle reservation
        },
      };

    case SET_MISSIONS:
      return {
        ...currentState,
        missions: action.payload,
      };

    case JOIN_MISSION:
      return {
        ...currentState,
        missions: currentState.missions.map((mission) => (
          mission.mission_id === action.payload
            ? { ...mission, reserved: true } // Set reserved to true
            : mission
        )),
      };

    case LEAVE_MISSION:
      return {
        ...currentState,
        missions: currentState.missions.map((mission) => (
          mission.mission_id === action.payload
            ? { ...mission, reserved: false } // Set reserved to false
            : mission
        )),
      };

    default:
      return currentState;
  }
};

export default rootReducer;
