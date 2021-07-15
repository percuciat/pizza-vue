import filter from "@/store/modules/filter";

describe('check FILTER Mutations', () => {

    it('CHANGE_CATEGORY', () => {
        const categoryFake = {
            amount: 2,
            name: 'New',
        };
        const state = {
            categoryActive: null,
            categoryNameActive: 'Мясные',
        };
        filter.mutations.CHANGE_CATEGORY(state, categoryFake);
        expect(state).toEqual({
            categoryActive: 2,
            categoryNameActive: 'New',
        });
    });

    it('CHANGE_SORT', () => {
        const sortFake = 'price';
        const state = {
            sortActive: 'top',
        };
        filter.mutations.CHANGE_SORT(state, sortFake);
        expect(state).toEqual({
            sortActive: 'price'
        });
    });

    it('CHANGE_ORDER', () => {
        const orderFake = 'asc';
        const state = {
            sortOrder: 'dsc'
        };
        filter.mutations.CHANGE_ORDER(state, orderFake);
        expect(state).toEqual({
            sortOrder: 'asc'
        });
    });

});