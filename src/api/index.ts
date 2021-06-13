import axios from "axios";

const URL = 'https://my-json-server.typicode.com/percuciat/pizza-db/pizzas';


export default {
    async getDataProduct(payload: any = '') {
        try {
           return await axios.get(URL + `?${!!payload.category || payload.category === 0? `category=${payload.category}` : ''}&_sort=${payload?.type || 'price'}&_order=${payload?.order || 'desc'}`)
                .then(response => {
                   return response.data
                })
                .catch(function (error) {
                    console.log('error catch', error)
                    if (error.response) {
                        // The request was made and the server responded with a status code
                        // that falls out of the range of 2xx
                        console.log(error.response.data);
                        console.log(error.response.status);
                        console.log(error.response.headers);
                    } else if (error.request) {
                        // The request was made but no response was received
                        // `error.request` is an instance of XMLHttpRequest in the browser and an instance of
                        // http.ClientRequest in node.js
                        console.log('reaaaa')
                        console.log(error.request);

                    } else {
                        // Something happened in setting up the request that triggered an Error
                        console.log('Error', error.message);
                    }
                    console.log(error.config);
                });
        } catch (e) {
            console.log('err inside catch', e)
            console.log(e)
        }
    }
}