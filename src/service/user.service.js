import axios from "axios"
import { routeAPi } from "../config/api";
import { headers } from "../config/axios_header";

export function getUsers() {
    return axios.get(routeAPi.allUsers,{headers})
            .then(response => response.data)
            .catch(error => { console.error(error);})
}
