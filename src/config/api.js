import { routeBasic } from "."

export const routeAPi = {
    test:"/test",
    //authentification
    login:routeBasic + '/connexion' ,
    register:routeBasic + '/register' ,
    deconnect:routeBasic + '/deconnect' ,


    //chat
    conversation:routeBasic + '/all-conversation',
    allDiscussion:routeBasic + '/all-discussion',
    sendMessage:routeBasic + '/send-message',


    //user
    myProfil:routeBasic + '/user/',
    allUsers:routeBasic + '/all-user'
}