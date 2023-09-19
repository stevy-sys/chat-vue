import axios from "axios"
import { routeAPi } from "../config/api";
// axios.defaults.withCredentials = true;

export function login(data) {
    return axios.post(routeAPi.login,data)
            .then(response =>{ 
                return response.data
            })
            .catch(error => { console.error(error);})

}

export function register(data) {
    return axios.post(routeAPi.register,data)
        .then(response => {return response.data})
        .catch(error => console.error(error))
}
