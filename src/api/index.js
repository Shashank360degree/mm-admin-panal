import axios from "axios";
const API = axios.create({ baseURL: process.env.REACT_APP_END_POINT_URL });
//Create Request Headers
API.interceptors.request.use((req) => {
    if (localStorage.getItem('token')) {
        req.headers.Authorization = `Bearer ${localStorage.getItem('token')}`;
    }
    return req;
});
//Bind APIS
export const adminLogin = async (payLoad) => await API.post('authenticate/admin/login', payLoad);