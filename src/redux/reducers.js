import {
  SET_ROCKETS, TOGGLE_RESERVATION,
  SET_DRAGONS, DRAGON_TOGGLE_RESERVATION,
  SET_MISSIONS, JOIN_MISSION, LEAVE_MISSION,
} from './actions';

const initialState = {
  rockets: [],
  reservedRockets: {},
  missions: [],
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
            ? { ...mission, reserved: true }
            : mission
        )),
      };

    case LEAVE_MISSION:
      return {
        ...state,
        missions: state.missions.map((mission) => (
          mission.mission_id === action.payload
            ? { ...mission, reserved: false }
            : mission
        )),
      };

    default:
      return state;
  }
};

export default rootReducer;
