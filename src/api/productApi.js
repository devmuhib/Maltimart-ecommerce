import axiosClient from "./axiosClient";

const productsApi = {
    getAll: async () => {
        const url = 'products';
        return await axiosClient.get(url);
    }
}

export default productsApi