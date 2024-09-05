export const SET_DRAGONS = 'SET_DRAGONS';
export const DRAGON_TOGGLE_RESERVATION = 'DRAGON_TOGGLE_RESERVATION';

export const setDragons = (dragons) => ({
  type: SET_DRAGONS,
  payload: dragons,
});

export const dragonToggleReservation = (dragonId) => ({
  type: DRAGON_TOGGLE_RESERVATION,
  payload: dragonId,
});
