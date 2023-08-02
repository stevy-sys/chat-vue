import axios from "axios"
import { routeAPi } from "../config/api";





export function getAllConversation() {
    return axios.get(routeAPi.conversation)
            .then(response => response.data)
            .catch(error => { console.error(error);})
}

export function getAllMessage(id) {
    return axios.get(routeAPi.allDiscussion +`/${id}`)
            .then(response => response.data)
            .catch(error => { console.error(error);})
}

export function sendMessage(data) {
    return axios.post(routeAPi.sendMessage,data)
            .then(response => response.data)
            .catch(error => { console.error(error);})
}
