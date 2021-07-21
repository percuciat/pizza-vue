import { ADD_PRODUCT, PLUS_PRODUCT, RESET_CART, REMOVE_PRODUCT, RESET_LOCAL_STORAGE } from '../mutationTypes';

interface newCartType {
    cart: Array<object>;
    type: string;
}

/*type Cart = Record<string,any>;

interface LooseObject {
    [key: string]: any
}
type Cart = {
    [key: string]: any
};*/

interface IState {
    cart?: any;
    totalPrice?: number;
    totalCount?: number;
}
interface IProduct {
    idP: string,
    id: number,
    imageUrl: string,
    sizeProduct: number,
    typeProduct: string,
    price?: number,
    countSame?: number,
    sum?: number
}



const state = (): IState => ({
    cart: {},
    totalPrice: 0,
    totalCount: 0,
});


// getters
const getters = {
    cart: (state: newCartType) => {
        return state.cart
    },
    isEmptyCart: (state: any) => {
        return !Object.keys(state.cart).length
    },
};

// void if NOT return (undefined or null)
// any вырубает TS и все типы ЗА ним
// never - признак для значений, которых никогда не будет. Или, признак для функций, которые никогда не вернут значения, throw ERROR
// то ли по причине ее зацикленности, например, бесконечный цикл, то ли по причине ее прерывания.
// unknown - тип требующий определения при получении
// as определяет тип при получении, использовать при получении unknown


// actions
// declare function isFunction(x: unknown): x is Function;

const actions = {
    initLocalStorageCart({commit} : any) {
        commit('INIT_LOCAL_STORAGE');
    },
    addProduct({ commit } : any, { ...product } : any) {
        commit('ADD_PRODUCT', product);
        commit('INCREASE_TOTAL', {
            price: product.price,
            count: 1
        });
        commit('SET_LOCAL_STORAGE_CART');
        commit('SET_LOCAL_STORAGE_TOTAL');
    },
    plusProduct({ commit } : any, { ...product } : any ){
        commit('PLUS_PRODUCT', product);
        commit('INCREASE_TOTAL', {
            price: product.price,
            count: 1
        });
        commit('SET_LOCAL_STORAGE_CART');
        commit('SET_LOCAL_STORAGE_TOTAL');
    },
    minusProduct({ commit } : any, { ...product } : any){
        commit('MINUS_PRODUCT', product);
        commit('DECREASE_TOTAL', {
            price: product.price,
            count: 1
        });
        commit('SET_LOCAL_STORAGE_CART');
        commit('SET_LOCAL_STORAGE_TOTAL');
    },
    resetCart({ commit } : any ) {
        commit('RESET_CART', {});
        commit('RESET_LOCAL_STORAGE');
    },
    removeProduct({ commit } : any, obj : any) {
        commit('DECREASE_TOTAL', {
            price: obj.sum,
            count: obj.countSame
        });
        commit('REMOVE_PRODUCT', obj);
        commit('SET_LOCAL_STORAGE_CART');
        commit('SET_LOCAL_STORAGE_TOTAL');
    }
};

// mutations
const mutations = {
    ADD_PRODUCT (state: IState, addedProduct: IProduct) {

        if(!state.cart[addedProduct.idP]) {
            addedProduct.countSame = 1;
            addedProduct.sum = addedProduct.price;
            // state.cart[addedProduct.idP] = new Map (addedProduct)
            state.cart[addedProduct.idP] = Array.of(addedProduct)
        } else {
            let sameProductTypeSize = state.cart[addedProduct.idP].findIndex((uniqEl: IProduct) => {
                return uniqEl.sizeProduct === addedProduct.sizeProduct && uniqEl.typeProduct === addedProduct.typeProduct
            });
            if(~sameProductTypeSize) {
                state.cart[addedProduct.idP][sameProductTypeSize].countSame += 1;
                state.cart[addedProduct.idP][sameProductTypeSize].sum += addedProduct.price;
            } else {
                addedProduct.countSame = 1;
                addedProduct.sum = addedProduct.price;
                state.cart[addedProduct.idP].push(addedProduct)
            }
        }
    },
    PLUS_PRODUCT(state: IState, product: IProduct) {
        state.cart[product.idP].forEach((item: IProduct) => {
            if(item.id === product.id){
                (item.countSame as number) += 1;
                (item.sum as number) += (product.price as number);
            }
        });
        console.log('state.cart--', state.cart)
    },
    MINUS_PRODUCT(state: IState, product: IProduct) {
        state.cart[product.idP].forEach((item: IProduct) => {
            if(item.id === product.id){
                (item.countSame as number) -= 1;
                (item.sum as number) -= (product.price  as number);
                if (!item.countSame){
                    state.cart[product.idP] = state.cart[product.idP].filter((el: IProduct) => el.id !== product.id);
                    if (!state.cart[product.idP].length){
                        delete state.cart[product.idP]
                    }
                }
            }
        });
    },
    RESET_CART (state: IState, emptyCart: {} ) {
        state.cart = emptyCart;
        state.totalPrice = 0;
        state.totalCount = 0;
    },
    REMOVE_PRODUCT (state: IState, product: IProduct) {
        state.cart[product.idP] = state.cart[product.idP].filter((el: IProduct) => el.id !== product.id);
        if (!state.cart[product.idP].length){
            delete state.cart[product.idP]
        }
    },
    INCREASE_TOTAL (state: IState, obj: any){
        state.totalPrice += obj.price;
        state.totalCount += obj.count;
    },
    DECREASE_TOTAL (state: IState, obj: any){
        (state.totalPrice as number) -= obj.price;
        (state.totalCount as number) -= obj.count;
    },
    SET_LOCAL_STORAGE_CART (state: IState) {
        localStorage.setItem('list-cart', JSON.stringify(state.cart));
    },
    SET_LOCAL_STORAGE_TOTAL(state: IState){
        localStorage.setItem('list-sum', JSON.stringify({price: state.totalPrice, totalCount: state.totalCount}));
    },
    RESET_LOCAL_STORAGE(state: IState){
        localStorage.clear();
    },
    INIT_LOCAL_STORAGE(state: IState){
        const items = localStorage.getItem('list-cart');
        const sum = localStorage.getItem('list-sum');
        state.cart = items ? JSON.parse(<string>items) : {};
        state.totalPrice = sum ? JSON.parse(<string>sum).price : 0;
        state.totalCount = sum ? JSON.parse(<string>sum).totalCount : 0;
    }
};

export default {
    namespaced: true,
    state,
    getters,
    actions,
    mutations
}