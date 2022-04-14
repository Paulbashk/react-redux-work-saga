/* eslint-disable default-param-last */

const defaultState = {
  users: [],
};

const ADD_USERS = 'ADD_USERS';

export const FETCH_USERS = 'FETCH_USERS';

export const usersReducer = (state = defaultState, action) => {
  switch (action.type) {
    case ADD_USERS:
      return { ...state, users: [...state.users, ...action.payload] };
    default:
      return state;
  }
};

export const addUsersAction = (payload) => ({ type: ADD_USERS, payload });
export const asyncAddUsersAction = () => ({ type: FETCH_USERS });
