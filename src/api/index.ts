import axios from "axios";

const URL = 'https://my-json-server.typicode.com/percuciat/pizza-db/pizzas';


export default {
    async getDataProduct(payload: any = ''): Promise<object> {
        try {
            return await axios.get(URL + `?${!!payload.category || payload.category === 0 ? `category=${payload.category}` : ''}&_sort=${payload?.type || 'price'}&_order=${payload?.order || 'desc'}`)
                .then(response => {
                    return response.data
                })
                .catch((error) => {
                    throw Error(error)
                });
        } catch (e) {
            alert(`ATTENTION: ${e}`);
            return e
        }
    },
    saveApiDataToLocalStorage() {
        console.log('need to complete!')
    }
}