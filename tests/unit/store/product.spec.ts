import product from "@/store/modules/product";

describe('check PRODUCT Mutations', () => {
    it('LOAD_PRODUCTS', () => {
        const categoryFake = [
            {name: 'losixa2'},
            {name: 'losixa2'}
        ];
        const state = {
            products: []
        };
        product.mutations.LOAD_PRODUCTS(state, categoryFake);
        expect(state).toEqual({
            products: [
                {name: 'losixa2'},
                {name: 'losixa2'}
            ],
        });
    });
});