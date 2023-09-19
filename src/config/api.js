import { routeBasic } from "."

export const routeAPi = {
    test:"/test",
    //authentification
    login:routeBasic + '/connexion' ,
    register:routeBasic + '/register' ,
    deconnect:routeBasic + '/deconnect' ,


    //chat
    conversation:routeBasic + '/chat/all-conversation',
    allDiscussion:routeBasic + '/chat/all-discussion',
    sendMessage:routeBasic + '/chat/send-message',


    //user
    myProfil:routeBasic + '/user/',
    allUsers:routeBasic + '/user'
}