import axios from "axios"
import { routeAPi } from "../config/api";


export function getUsers() {
    return axios.get(routeAPi.allUsers)
            .then(response => response.data)
            .catch(error => { console.error(error);})
}
