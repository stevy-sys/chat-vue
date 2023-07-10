import axios from "axios"
import { routeAPi } from "../config/api";
import { headers } from "../config/axios_header";

export function getAllConversation() {
    return axios.get(routeAPi.conversation,{headers})
            .then(response => response.data)
            .catch(error => { console.error(error);})
}

export function getAllMessage(id) {
    return axios.get(routeAPi.allDiscussion +`/${id}` ,{headers})
            .then(response => response.data)
            .catch(error => { console.error(error);})
}

export function sendMessage(data) {
    return axios.post(routeAPi.sendMessage,data,{headers})
            .then(response => response.data)
            .catch(error => { console.error(error);})
}
