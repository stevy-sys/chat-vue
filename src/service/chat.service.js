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



export function getAllConversation() {
    return axios.get(routeAPi.conversation,{headers:updateTokenHeader()})
            .then(response => response.data)
            .catch(error => { console.error(error);})
}

export function getAllMessage(id) {
    return axios.get(routeAPi.allDiscussion +`/${id}` ,{headers:updateTokenHeader()})
            .then(response => response.data)
            .catch(error => { console.error(error);})
}

export function sendMessage(data) {
    return axios.post(routeAPi.sendMessage,data,{headers:updateTokenHeader()})
            .then(response => response.data)
            .catch(error => { console.error(error);})
}
