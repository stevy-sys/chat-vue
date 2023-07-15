import {createStore} from 'vuex'

const store = createStore({
    state:{
        token:'',
        user:{},
        connected:false,
        userEnLigne:[]
    },
    mutations:{
        SET_USER_EN_LIGNE(state,users){
            state.userEnLigne = users
        },
        ADD_USER_EN_LIGNE(state,user){
            state.userEnLigne.push(user)
        },
        DELETE_USER_EN_LIGNE(state,user){
            state.userEnLigne = state.userEnLigne.filter(u => {
                return u.id != user.id
            })
        },
        SET_TOKEN(state,token){
            state.token = token
        },
        SET_USER(state,user){
            state.user = user
        },
        SET_CONNECTED(state,bool){
            state.connected = bool
        },
        SET_STATE(state){
            state.token = ''
            state.user = {}
            state.connected = false
        }
    },
    actions:{
        setUserEnLigne({commit},users){
            commit('SET_USER_EN_LIGNE',users)
        },
        addUserEnLigne({commit},user){
            commit('ADD_USER_EN_LIGNE',user)
        },
        deleteUserEnLigne({commit},user){
            commit('DELETE_USER_EN_LIGNE',user)
        },
        saveToken({commit},token){
            commit('SET_TOKEN',token)
        },
        saveUser({commit},user){
            commit('SET_USER',user)
        },
        setConnected({commit},bool){
            commit('SET_CONNECTED',bool)
        },
        setInitialiseState({commit}){
            commit('SET_STATE');
        }
    },
    getters:{
        // getConnected:state => state.connected
        getConnected(state){
            return state.connected
        },
        getToken(state){
            return state.token
        },
        getUser(state){
            return state.user
        },
        getUsersEnLigne(state){
            return state.userEnLigne
        },
    },
    modules:{

    }
})

export default store