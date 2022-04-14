/* eslint-disable default-param-last */

const defaultState = {
  count: 0
};

const INCREMENT = 'INCREMENT';
const DECREMENT = 'DECREMENT';

export const ASYNC_INCREMENT = 'ASYNC_INCREMENT';
export const ASYNC_DECREMENT = 'ASYNC_DECREMENT';

export const countReducer = (state = defaultState, action) => {
  switch (action.type) {
    case INCREMENT:
      return { ...state, count: state.count + 1 };
    case DECREMENT:
      return { ...state, count: state.count - 1 };
    default:
      return state;
  }
};

export const incrementCountAction = () => ({ type: INCREMENT });
export const decrementCountAction = () => ({ type: DECREMENT });

export const asyncIncrementCountAction = () => ({ type: ASYNC_INCREMENT });
export const asyncDecrementCountAction = () => ({ type: ASYNC_DECREMENT });
