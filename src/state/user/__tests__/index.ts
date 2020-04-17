import { createNextState } from '@reduxjs/toolkit';

import { mockStore } from 'src/mocks';
import { userInitialState, userReducer, UserState } from 'src/state/user/slice';
import { selectUser } from 'src/state/user/selectors';
import { IUser } from 'src/api/login';

describe('UI state', () => {
  describe('reducer', () => {
    it('should return initial state on bad action', () => {
      const action = {
        type: 'bad action',
      };

      expect(userReducer(undefined, action)).toEqual(userInitialState);
    });

    it('should update user on login', () => {
      const user = {
        id: 1,
        email: 'ivanov@gmail.com',
        name: 'ivanov',
        avatar_url: 'img',
      } as IUser;
      const action = {
        type: 'user/login/fulfilled',
        payload: user,
      };
      const expectedState = {
        ...user,
        movies: [],
      };

      expect(userReducer(undefined, action)).toEqual(expectedState);
    });

    it('should add Movie', () => {
      const action = {
        type: 'user/addMovie',
        payload: 1,
      };
      const initialState = {
        movies: [],
        avatar_url: 'url',
        name: 'name',
        id: 1,
        email: 'email',
      } as UserState;

      const expectedState = createNextState(initialState, (draft) => {
        draft?.movies.push(action.payload);
      });

      expect(userReducer(initialState, action)).toEqual(expectedState);
    });
  });

  describe('selectors', () => {
    it('should selectUser', () => {
      expect(selectUser(mockStore)).toEqual(mockStore.user);
    });
  });
});
