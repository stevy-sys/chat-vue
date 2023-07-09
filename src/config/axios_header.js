let token =  localStorage.getItem("token");
let header = null
if(token){
    header = {
        'Content-type': 'application/x-www-form-urlencoded',
        'Authorization':'Bearer ' + token
    } 
}else{
    header = {
        'Content-type': 'application/x-www-form-urlencoded',
    } 
}

export const headers = header ;