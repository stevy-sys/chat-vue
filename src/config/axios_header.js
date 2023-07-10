let token =  localStorage.getItem("token");
let header = null
if(token){
    header = {
        'Content-type': 'application/json',
        'Authorization':'Bearer ' + token
    } 
}else{
    header = {
        'Content-type': 'application/json',
    } 
}

export const headers = header ;