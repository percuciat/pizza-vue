

const state = () => ({
    categoryActive: 'Все',
    sortActive: 'price',
    sortOrder: 'desc'
});

interface Category {
    categoryActive: string;
    type: string;
}
interface Sort {
    sortActive: string;
    type: string;
}

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
    setChosenCategory(context: { commit: (arg0: string, arg1: any) => void; }, payload: { amount: string; }) {
        context.commit('changeCategory', payload.amount);
    },
    setChosenSort(context: { commit: (arg0: string, arg1: any) => void; }, payload: { type: string; order: string }) {
        context.commit('changeSortOrder', payload.order);
        context.commit('changeSort', payload.type);
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

