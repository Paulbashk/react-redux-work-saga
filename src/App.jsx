/* eslint-disable new-cap */
/* eslint-disable no-unused-vars */
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { asyncDecrementCountAction, asyncIncrementCountAction } from './store/countReducer';
import { asyncAddUsersAction } from './store/usersReducer';
import './App.css';

function App() {
  const dispatch = useDispatch();

  const count = useSelector((state) => state.countReducer.count);
  const users = useSelector((state) => state.usersReducer.users);

  return (
    <div className="App">
      <div className="counter">
        Денег:
        {' '}
        {count}
      </div>
      <div className="buttons">
        <button type="button" className="btn" onClick={() => dispatch(asyncIncrementCountAction())}>ИНКРЕМЕНТ++</button>
        <button type="button" className="btn" onClick={() => dispatch(asyncDecrementCountAction())}>ДЕКРЕМЕНТ--</button>
        <button type="button" className="btn" onClick={() => dispatch(asyncAddUsersAction())}>ПОЛУЧИТЬ ЮЗЕРОВ++</button>
      </div>
      <div className="users">
        {
          users.length > 0
            ? (
              <div className="users__view">
                {
                  users.map((user) => (
                    <div
                      key={Math.random()}
                      className="users__user"
                    >
                      {user.name}
                    </div>
                  ))
                }
              </div>
            )
            : (
              <div className="users__error">
                Пользователи отсутствуют
              </div>
            )
        }
      </div>
    </div>
  );
}

export default App;
