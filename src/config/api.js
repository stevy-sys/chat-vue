import { routeBasic } from "."

export const routeAPi = {
    test:"/test",
    //authentification
    login:routeBasic + '/auth/connexion' ,
    register:routeBasic + '/auth/register' ,
    deconnect:routeBasic + '/auth/deconnect' ,


    //chat
    conversation:routeBasic + '/chat/all-conversation',
    allDiscussion:routeBasic + '/chat/all-discussion',
    sendMessage:routeBasic + '/chat/send-message',


    //user
    myProfil:routeBasic + '/user/',
    allUsers:routeBasic + '/user'
}