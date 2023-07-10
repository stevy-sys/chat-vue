import {createStore} from 'vuex'

const store = createStore({
    state:{
        token:'',
        user:{},
        connected:false
    },
    mutations:{
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
        getUser(state){
            return state.user
        }
    },
    modules:{

    }
})

export default store