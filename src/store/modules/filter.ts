



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
    amount: any
}

interface payloadSort {
    order: string
    type: string
}


const state = () => ({
    categoryActive: null,
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
    setChosenCategory({ commit } : commitType, { amount } : payloadCategory) {
        commit('changeCategory', amount);
    },
    setChosenSort({commit} : commitType, {order, type} : payloadSort) {
        commit('changeSortOrder', order);
        commit('changeSort', type);
    }
};

// mutations
const mutations = {
    changeCategory (state: { categoryActive: string; }, chosenCategory: string) {
        state.categoryActive = chosenCategory
    },
    changeSort (state: { sortActive: string; }, chosenSort: string) {
        state.sortActive = chosenSort
    },
    changeSortOrder(state: {sortOrder: string}, order: string) {
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

