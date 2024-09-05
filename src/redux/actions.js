export const SET_MISSIONS = 'SET_MISSIONS';
export const JOIN_MISSION = 'JOIN_MISSION';
export const LEAVE_MISSION = 'LEAVE_MISSION';

// Action to set the list of missions
export const setMissions = (missions) => ({
  type: SET_MISSIONS,
  payload: missions,
});

// Action to join a mission by its mission ID
export const joinMission = (missionId) => ({
  type: JOIN_MISSION,
  payload: missionId,
});

// Action to leave a mission by its mission ID
export const leaveMission = (missionId) => ({
  type: LEAVE_MISSION,
  payload: missionId,
});
