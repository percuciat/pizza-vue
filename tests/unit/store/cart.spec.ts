import cart from '@/store/modules/cart';


describe('check CART Getters', () => {
    it('isEmptyCart TRUE', () => {
        const cartItemFake = {
            cart: {}
        };
        const actual = cart.getters.isEmptyCart(cartItemFake);
        expect(actual).toEqual(true);
    });

    it('isEmptyCart FALSE', () => {
        const cartItemFake =  {
            cart: {name: 'notEmpty'}
        };
        const actual = cart.getters.isEmptyCart(cartItemFake);
        expect(actual).toEqual(false);
    });
});


describe('check CART Mutations', () => {

    it('ADD_PRODUCT', () => {
        const cartItemFake = {
            idP: 'pizza1',
            id: 22,
            imageUrl: 'src',
            name: 'bobo-pizza',
            price: 322,
            sizeProduct: 4,
            typeProduct: 'шершавое'
        };
        const state = {
            cart: {}
        };
        cart.mutations.ADD_PRODUCT(state, cartItemFake);
        expect(state).toEqual({
            cart: {'pizza1': [
                    {
                        name: 'bobo-pizza',
                        idP: "pizza1",
                        id: 22,
                        imageUrl: 'src',
                        sizeProduct: 4,
                        countSame: 1,
                        price: 322,
                        sum: 322,
                        typeProduct: 'шершавое'
                    }
                ]}
        })
    });

    it('ADD_PRODUCT another type Pizza', () => {
        const cartItemFake = {
            idP: 'pizza2',
            id: 19,
            name: 'peper-pizza',
            imageUrl: 'src',
            price: 999,
            sizeProduct: 2,
            typeProduct: 'тонкое'
        };
        const state = {
            cart: {'pizza1': [
                    {
                        name: 'bobo-pizza',
                        idP: "pizza1",
                        id: 22,
                        sizeProduct: 4,
                        imageUrl: 'src2',
                        countSame: 1,
                        price: 322,
                        sum: 322,
                        typeProduct: 'тонкое'
                    }
                ]}
        };
        cart.mutations.ADD_PRODUCT(state, cartItemFake);
        expect(state).toEqual({
            cart: {
                'pizza1': [{
                        name: 'bobo-pizza',
                        idP: "pizza1",
                        id: 22,
                        sizeProduct: 4,
                        imageUrl: 'src2',
                        countSame: 1,
                        price: 322,
                        sum: 322,
                        typeProduct: 'тонкое'
                    }],
                'pizza2': [
                    {
                        name: 'peper-pizza',
                        idP: "pizza2",
                        id: 19,
                        imageUrl: 'src',
                        sizeProduct: 2,
                        countSame: 1,
                        price: 999,
                        sum: 999,
                        typeProduct: 'тонкое'
                    }
                ]
            }
        })
    });

    it('ADD_PRODUCT SAME idP Pizza', () => {
        const cartItemFake = {
            idP: 'pizza1',
            imageUrl: 'src',
            id: 13,
            name: 'peper-pizza',
            price: 200,
            sizeProduct: 8,
            typeProduct: 'тонкое'
        };
        const state = {
            cart: {
                'pizza1': [
                    {
                        name: 'bobo-pizza',
                        idP: "pizza1",
                        imageUrl: 'src1',
                        id: 14,
                        sizeProduct: 4,
                        countSame: 1,
                        price: 322,
                        sum: 322,
                        typeProduct: 'тонкое'
                    }
                ],
                'pizza2': [
                    {
                        name: 'peper-pizza',
                        idP: "pizza2",
                        imageUrl: 'src2',
                        id: 19,
                        sizeProduct: 2,
                        countSame: 1,
                        price: 999,
                        sum: 999,
                        typeProduct: 'тонкое'
                    }
                ]
            }
        };
        cart.mutations.ADD_PRODUCT(state, cartItemFake);
        expect(state).toEqual({
            cart: {
                'pizza1': [{
                        name: 'bobo-pizza',
                        idP: "pizza1",
                        imageUrl: 'src1',
                        id: 14,
                        sizeProduct: 4,
                        countSame: 1,
                        price: 322,
                        sum: 322,
                        typeProduct: 'тонкое'
                    }, {
                        idP: 'pizza1',
                        imageUrl: 'src',
                        id: 13,
                        name: 'peper-pizza',
                        price: 200,
                        sizeProduct: 8,
                        countSame: 1,
                        sum: 200,
                        typeProduct: 'тонкое'
                    }
                ],
                'pizza2': [
                    {
                        name: 'peper-pizza',
                        idP: "pizza2",
                        sizeProduct: 2,
                        imageUrl: 'src2',
                        id: 19,
                        countSame: 1,
                        price: 999,
                        sum: 999,
                        typeProduct: 'тонкое'
                    }
                ]
            }
        })
    });

    it('ADD_PRODUCT SAME idP && NAME Pizza', () => {
        const cartItemFake = {
            idP: 'pizza2',
            name: 'peper-pizza',
            imageUrl: 'src2',
            id: 19,
            price: 400,
            sizeProduct: 2,
            typeProduct: 'тонкое'
        };
        const state = {
            cart: {
                'pizza1': [
                    {
                        name: 'bobo-pizza',
                        idP: "pizza1",
                        sizeProduct: 4,
                        countSame: 1,
                        imageUrl: 'src1',
                        id: 13,
                        price: 322,
                        sum: 322,
                        typeProduct: 'тонкое'
                    }
                ],
                'pizza2': [
                    {
                        name: 'peper-pizza',
                        idP: "pizza2",
                        sizeProduct: 2,
                        countSame: 1,
                        imageUrl: 'src2',
                        id: 19,
                        price: 999,
                        sum: 999,
                        typeProduct: 'тонкое'
                    }
                ]
            }
        };
        cart.mutations.ADD_PRODUCT(state, cartItemFake);
        expect(state).toEqual({
            cart: {
                'pizza1': [{
                    name: 'bobo-pizza',
                    idP: "pizza1",
                    sizeProduct: 4,
                    countSame: 1,
                    imageUrl: 'src1',
                    id: 13,
                    price: 322,
                    sum: 322,
                    typeProduct: 'тонкое'
                }],
                'pizza2': [
                    {
                        name: 'peper-pizza',
                        idP: "pizza2",
                        sizeProduct: 2,
                        countSame: 2,
                        imageUrl: 'src2',
                        id: 19,
                        price: 999,
                        sum: 1399,
                        typeProduct: 'тонкое'
                    }
                ]
            }
        })
    });

    it('REMOVE_PRODUCT', () => {
        const cartItemFake = {
            idP: 'pizza2',
            name: 'peper-pizza',
            imageUrl: 'src2',
            id: 14,
            price: 400,
            sizeProduct: 2,
            typeProduct: 'тонкое'
        };
        const state = {
            cart: {
                'pizza1': [{
                    name: 'bobo-pizza',
                    idP: "pizza1",
                    sizeProduct: 4,
                    imageUrl: 'src1',
                    id: 13,
                    countSame: 1,
                    price: 322,
                    sum: 322,
                    typeProduct: 'тонкое'
                }],
                'pizza2': [{
                    name: 'peper-pizza',
                    idP: "pizza2",
                    sizeProduct: 2,
                    countSame: 2,
                    imageUrl: 'src2',
                    id: 14,
                    price: 999,
                    sum: 2000,
                    typeProduct: 'тонкое'
                }]
            }
        };
        cart.mutations.REMOVE_PRODUCT(state, cartItemFake);
        expect(state.cart).toEqual({
            'pizza1': [{
                name: 'bobo-pizza',
                idP: "pizza1",
                sizeProduct: 4,
                countSame: 1,
                imageUrl: 'src1',
                id: 13,
                price: 322,
                sum: 322,
                typeProduct: 'тонкое'
            }]
        });
    });


    it('RESET_CART', () => {
        const state = {
            cart: {name: 'test'},
            totalPrice: 11,
            totalCount: 2
        };
        cart.mutations.RESET_CART(state, {});
        expect(state.cart).toEqual({});
        expect(state.totalPrice).toBe(0);
        expect(state.totalCount).toBe(0);
    });

    it('INCREASE_TOTAL', () => {
        const state = {
            totalPrice: 11,
            totalCount: 2
        };
        cart.mutations.INCREASE_TOTAL(state, {
            price: 100,
            count: 1
        });
        expect(state.totalPrice).toBe(111);
        expect(state.totalCount).toBe(3);
    });

    it('DECREASE_TOTAL', () => {
        const state = {
            totalPrice: 110,
            totalCount: 8
        };
        cart.mutations.DECREASE_TOTAL(state, {
            price: 100,
            count: 1
        });
        expect(state.totalPrice).toBe(10);
        expect(state.totalCount).toBe(7);
    });
});