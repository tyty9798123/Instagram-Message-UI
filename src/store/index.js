import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        chatData:{}
    },
    actions: {
        updateChatData(context, status){
            context.commit('CHATDATA', status)
        }
    },
    mutations: {
        CHATDATA(state, status){
            state.chatData = status;
        }
    }
})