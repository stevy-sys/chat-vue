import axios from "axios"
import { routeAPi } from "../config/api";
import { headers } from "../config/axios_header";


const updateTokenHeader = () => {
    let headers = {
        'Content-Type': 'application/json',
    };
    const token = localStorage.getItem('token');
    if (token) {
        headers.Authorization = `Bearer ${token}`;
    } else {
        delete headers.Authorization;
    }
    return headers ;
};

export function login(data) {
    return axios.post(routeAPi.login,data,updateTokenHeader())
            .then(response => response.data)
            .catch(error => { console.error(error);})

}

export function register(data) {
    return axios.post(routeAPi.register,data,updateTokenHeader())
        .then(response => {return response.data})
        .catch(error => console.error(error))
}
