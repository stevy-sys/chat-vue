import axios from "axios"
import { routeAPi } from "../config/api";
// import { headers } from "../config/axios_header";

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


export function getUsers() {
    return axios.get(routeAPi.allUsers,{headers:updateTokenHeader()})
            .then(response => response.data)
            .catch(error => { console.error(error);})
}
