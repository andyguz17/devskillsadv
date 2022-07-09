import { getTokenName } from '../helpers/helpers';
import { IAuthState } from '../models/auth.model';
import { AuthAction } from './auth.actions';

export const authReducer = (state: IAuthState, action: AuthAction) => {
  switch (action.type) {
    case 'setToken':
      const token = action.payload.token ?? '';
      const name = getTokenName(token);
      return { ...state, token, name };

    case 'setLoading':
      return { ...state, loading: action.payload.loading };

    default:
      return state;
  }
};
