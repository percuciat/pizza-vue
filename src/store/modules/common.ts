import { MODAL_ACTION } from '../mutationTypes';

interface IState {
    modalShow?: boolean;
    loader?: boolean;
}

const state = (): IState => ({
    modalShow: false,
    loader: false
});


// actions
const actions = {
    modalAction({commit} :any, payload: boolean) {
        commit('MODAL_ACTION', payload);
    },
    sendModalForm({commit} :any, payload: boolean){
        commit('MODAL_ACTION', false);
        commit('LOADER_ACTION', payload);
        setTimeout(() => {
            commit('LOADER_ACTION', false);
        }, 4000);
    }
};

// mutations
const mutations = {
    MODAL_ACTION(state: IState, flagModal: boolean) {
        state.modalShow = flagModal;
    },
    LOADER_ACTION(state: IState, flagLoader: boolean){
        state.loader = flagLoader;
    }
};

export default {
    namespaced: true,
    state,
    actions,
    mutations
}