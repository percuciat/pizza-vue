import { CHANGE_CATEGORY, CHANGE_ORDER, CHANGE_SORT } from '../mutationTypes'


interface IState {
    categoryActive?: string | null;
    categoryNameActive?: string,
    sortActive?: string;
    sortOrder?: string;
}

interface commitType {
    commit: (arg0: string, arg1: any) => void
}

interface IPayload {
    amount?: null | number;
    name?: string;
    order?: string;
    type?: string;
}

const state = (): IState => ({
    categoryActive: null,
    categoryNameActive: 'Все',
    sortActive: 'price',
    sortOrder: 'desc'
});
// getters
const getters = {
    category: (state: IState) => {
        return state.categoryActive
    },
    sort: (state: IState) => {
        return state.sortActive
    },
};

// actions
const actions = {
    setChosenCategory({commit}: commitType, {amount, name}: IPayload) {
        commit('CHANGE_CATEGORY', {amount, name});
    },
    setChosenSort({commit}: commitType, {order, type}: IPayload) {
        commit('CHANGE_ORDER', order);
        commit('CHANGE_SORT', type);
    }
};

// mutations
const mutations = {
    CHANGE_CATEGORY(state: IState, chosenCategory: any) {
        state.categoryActive = chosenCategory.amount;
        state.categoryNameActive = chosenCategory.name;
    },
    CHANGE_SORT(state: IState, chosenSort: string) {
        state.sortActive = chosenSort;
    },
    CHANGE_ORDER(state: IState, order: string) {
        state.sortOrder = order;
    }
};

export default {
    namespaced: true,
    state,
    getters,
    actions,
    mutations
}

