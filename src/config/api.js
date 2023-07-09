import { routeBasic } from "."

export const routeAPi = {

    //authentification
    login:routeBasic + '/connexion/' ,
    register:routeBasic + '/register/' ,


    //chat
    conversation:routeBasic + '/chat/allConversation',
    allDiscussion:routeBasic + 'chat/allDiscussion/',


    //user
    myProfil:routeBasic + '/user/',
    allUsers:routeBasic + '/all-user/'
}