import { MODAL_ACTION } from '../mutationTypes';

interface IState {
    modalShow?: boolean;
    status?: string;
}

const state = (): IState => ({
    modalShow: false,
    status: 'form',
});


// actions
const actions = {
    modalAction({commit} :any, payload: boolean) {
        commit('LOADER_ACTION', 'form');
        commit('MODAL_ACTION', payload);
    },
    sendModalForm({commit} :any){
        commit('LOADER_ACTION', 'load');
        setTimeout(() => {
            commit('LOADER_ACTION', 'thank');
        }, 4000);
    }
};

// mutations
const mutations = {
    MODAL_ACTION(state: IState, flagModal: boolean) {
        state.modalShow = flagModal;
    },
    LOADER_ACTION(state: IState, flagLoader: string){
        state.status = flagLoader;
    }
};

export default {
    namespaced: true,
    state,
    actions,
    mutations
}