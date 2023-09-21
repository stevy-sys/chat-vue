import Echo from 'laravel-echo';
import pusher from 'pusher-js'

// export const echo  = new Echo({
//     broadcaster: 'pusher',
//     key: 'stevy1234',
//     host:'127.0.0.1',
//     port:6001,
//     wsHost:'127.0.0.1',
//     wsPort: 6001,
//     enabledTransports: ['ws', 'wss'],
//     forceTLS: false,
//     disableStats: false,
//     authEndpoint :'http://127.0.0.1:8000/api/broadcasting/auth',
//     auth:{
//         headers: {
//             Authorization: 'Bearer '+ localStorage.getItem('token'), 
//         }
//     },
//     cluster: "mt1",
//     encrypted: false,
//     // Autres options de configuration
// });

export const echo = new Echo({
    broadcaster: 'pusher',
    key: '27a49a533902f0a2d10a', // Remplacez par votre clé Pusher
    cluster: 'mt1', // Remplacez par votre cluster Pusher
    encrypted: true, // Utilisez le chiffrement si votre compte Pusher l'exige (recommandé pour la sécurité en ligne)
    wsHost: 'ws.pusher.com', // Remplacez par l'hôte WebSocket de Pusher en ligne
    wsPort: 443, // Port WebSocket de Pusher en ligne (par défaut 443)
    disableStats: true, // Désactivez les statistiques si nécessaire
    authEndpoint: 'https://chat.rubycorp.fr/api/broadcasting/auth', // Remplacez par l'URL de votre point d'authentification
    auth: {
        headers: {
            Authorization: 'Bearer ' + localStorage.getItem('token'),
        },
    },
    // Autres options de configuration
});


