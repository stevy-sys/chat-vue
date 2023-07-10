import axios from "axios"
import { routeAPi } from "../config/api";
import { headers } from "../config/axios_header";

export function login(data) {
    return axios.post(routeAPi.login,data,headers)
            .then(response => response.data)
            .catch(error => { console.error(error);})

}

export function register(data) {
    return axios.post(routeAPi.register,data,headers)
        .then(response => {return response.data})
        .catch(error => console.error(error))
}
