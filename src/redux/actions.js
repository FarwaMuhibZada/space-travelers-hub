export const SET_ROCKETS = 'SET_ROCKETS';
export const TOGGLE_RESERVATION = 'TOGGLE_RESERVATION';

export const setRockets = (rockets) => ({
  type: SET_ROCKETS,
  payload: rockets,
});

export const toggleReservation = (rocketId) => ({
  type: TOGGLE_RESERVATION,
  payload: rocketId,
});
