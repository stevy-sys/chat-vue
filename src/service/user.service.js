import axios from "axios"
import { routeAPi } from "../config/api";
import { headers as header } from "../config/axios_header";

export function getUsers(data) {
    return axios.post(routeAPi.allUsers,data,header)
            .then(response => response.data)
            .catch(error => { console.error(error);})
}
