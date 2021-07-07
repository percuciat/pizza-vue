import { CHANGE_CATEGORY, CHANGE_ORDER, CHANGE_SORT } from '../mutationTypes'

interface Category {
    categoryActive: string;
    type: string;
}

interface Sort {
    sortActive: string;
    type: string;
}

interface commitType {
    commit: (arg0: string, arg1: any) => void
}

interface payloadCategory {
    amount: any,
    name: string
}

interface payloadSort {
    order: string
    type: string
}


const state = () => ({
    categoryActive: null,
    categoryNameActive: 'Все',
    sortActive: 'price',
    sortOrder: 'desc'
});
// getters
const getters = {
    category: (state: Category) => {
        return state.categoryActive
    },
    sort: (state: Sort) => {
        return state.sortActive
    },
};

// actions
const actions = {
    setChosenCategory({commit}: commitType, {amount, name}: payloadCategory) {
        commit('CHANGE_CATEGORY', {amount, name});
    },
    setChosenSort({commit}: commitType, {order, type}: payloadSort) {
        commit('CHANGE_SORT', order);
        commit('CHANGE_ORDER', type);
    }
};

// mutations
const mutations = {
    CHANGE_CATEGORY(state: { categoryActive: string; categoryNameActive: string }, chosenCategory: any) {
        console.log('categoryNameActive', state.categoryNameActive);
        state.categoryActive = chosenCategory.amount;
        state.categoryNameActive = chosenCategory.name;
    },
    CHANGE_ORDER(state: { sortActive: string; }, chosenSort: string) {
        state.sortActive = chosenSort
    },
    CHANGE_SORT(state: { sortOrder: string }, order: string) {
        state.sortOrder = order
    }
};

export default {
    namespaced: true,
    state,
    getters,
    actions,
    mutations
}

