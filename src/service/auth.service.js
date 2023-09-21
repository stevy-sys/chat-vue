import axios from "axios"
import { routeAPi } from "../config/api";
import { headers } from "../config/axios_header";

// axios.defaults.withCredentials = true;

export function login(data) {
    return axios.post(routeAPi.login,data)
            .then(response => response.data.data )
            .catch(error => { console.error(error);})

}
export function deconnect () {
    return axios.get(routeAPi.deconnect,{headers})
            .then(response =>{ 
                return response
            })
            .catch(error => { console.error(error);})

}

export function register(data) {
    return axios.post(routeAPi.register,data)
        .then(response => {return response.data})
        .catch(error => console.error(error))
}
