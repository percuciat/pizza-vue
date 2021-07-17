import { MODAL_ACTION } from '../mutationTypes';

/*interface commitType {
    commit: (arg0: string, arg1: any) => void
}

interface productType {
    product: any
}

interface newCartType {
    cart: Array<object>;
    type: string;
}

interface cartMutation {
    cart: any;
    totalPrice: number,
    totalCount: number
}*/

const state = () => ({
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
    MODAL_ACTION(state: any, flagModal: boolean) {
        state.modalShow = flagModal;
    },
    LOADER_ACTION(state: any, flagLoader: boolean){
        state.loader = flagLoader;
    }
};

export default {
    namespaced: true,
    state,
    actions,
    mutations
}