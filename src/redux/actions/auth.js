import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { AUTH } from '../actionTypes';
import * as api from '../../api';
toast.configure();
export const adminLogin = (payLoad, navigate) => async (dispatch) => {
    try {
        const {data}  = await api.adminLogin(payLoad);
        toast.success("Login success!");
        dispatch({ type: AUTH, data });
        navigate('/dashboard');
        
    } catch (error) {
        if (error.response) {
            toast.error(error.response.data.error);
        }
    }
}

