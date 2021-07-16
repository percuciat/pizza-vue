import product from "@/store/modules/product";

describe('check PRODUCT Mutations', () => {
    it('LOAD_PRODUCTS', () => {
        const categoryFake = [
            {name: 'pizza2'},
            {name: 'pizza322'}
        ];
        const state = {
            products: []
        };
        product.mutations.LOAD_PRODUCTS(state, categoryFake);
        expect(state).toEqual({
            products: [
                {name: 'pizza2'},
                {name: 'pizza322'}
            ],
        });
    });
});