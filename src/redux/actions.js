export const SET_ROCKETS = 'SET_ROCKETS';
export const TOGGLE_RESERVATION = 'TOGGLE_RESERVATION';
export const SET_DRAGONS = 'SET_DRAGONS';
export const DRAGON_TOGGLE_RESERVATION = 'DRAGON_TOGGLE_RESERVATION';
export const SET_MISSIONS = 'SET_MISSIONS';
export const JOIN_MISSION = 'JOIN_MISSION';
export const LEAVE_MISSION = 'LEAVE_MISSION';

export const setRockets = (rockets) => ({
  type: SET_ROCKETS,
  payload: rockets,
});

export const toggleReservation = (rocketId) => ({
  type: TOGGLE_RESERVATION,
  payload: rocketId,
});

export const setDragons = (dragons) => ({
  type: SET_DRAGONS,
  payload: dragons,
});

export const dragonToggleReservation = (dragonId) => ({
  type: DRAGON_TOGGLE_RESERVATION,
  payload: dragonId,
});

export const setMissions = (missions) => ({
  type: SET_MISSIONS,
  payload: missions,
});

export const joinMission = (missionId) => ({
  type: JOIN_MISSION,
  payload: missionId,
});

export const leaveMission = (missionId) => ({
  type: LEAVE_MISSION,
  payload: missionId,
});
