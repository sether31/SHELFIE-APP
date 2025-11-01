const ACTIONS = {
  LOADING: 'LOADING',
  LOGIN_SUCCESS: 'LOGIN_SUCCESS',
  REGISTER_SUCCESS: 'REGISTER_SUCCESS',
  LOGIN_ERROR: 'LOGIN_ERROR',
  REGISTER_ERROR: 'REGISTER_ERROR',
  CLEAR_ERRORS: 'CLEAR_ERRORS',
  LOGOUT: 'LOGOUT',
};


const userReducer = (state, action) => {
  switch (action.type) {
    case ACTIONS.LOADING:
      return { ...state, loading: true, loginError: null, registerError: null };

    case ACTIONS.LOGIN_SUCCESS:
      return { ...state, user: action.payload, loading: false, loginError: null };

    case ACTIONS.REGISTER_SUCCESS:
      return { ...state, user: action.payload, loading: false, registerError: null };

    case ACTIONS.LOGIN_ERROR:
      return { ...state, loading: false, loginError: action.payload };

    case ACTIONS.REGISTER_ERROR:
      return { ...state, loading: false, registerError: action.payload };

    case ACTIONS.CLEAR_ERRORS:
      return { ...state, loginError: null, registerError: null };

    case ACTIONS.LOGOUT:
      return { user: null, loading: false, loginError: null, registerError: null };

    default:
      return state;
  }
};

export { ACTIONS };
export default userReducer;
