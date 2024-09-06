export const SET_ROCKETS = 'SET_ROCKETS';
export const TOGGLE_RESERVATION = 'TOGGLE_RESERVATION';
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
