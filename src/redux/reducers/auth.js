import * as actionType from '../actionTypes';
const adminAuthReducer = (state = { authData: null, loading: false, error: false }, action) => {
    switch (action.type) {
        case actionType.AUTH:
            localStorage.setItem('user', JSON.stringify(action.data.user))
            localStorage.setItem('token', action.data.token);
            return { ...state, authData: action.data, loading: false, error: false };
        case actionType.LOGOUT:
            localStorage.clear();
            return { ...state, authData: null, loading: false, error: false };
        default:
            return state;
    }
}
export default adminAuthReducer;