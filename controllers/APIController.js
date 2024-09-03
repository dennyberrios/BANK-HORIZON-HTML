import { axiosInstance } from "../services/Http/apiCliente.js";

class APIController {
    async fetchData(endpoint) {
        try {
            const response = await axiosInstance.get(endpoint);
            return response.data;
        } catch (error) {
            console.error({MSG: "Error fetching data:", error});
            throw error
        }
    }

    async postData(endpoint, data) {
        try {
            const response = await axiosInstance.post(endpoint, data);
            return response.data;
        } catch (error) {
            console.error({MSG: "Error POST data:", error});
            throw error
        }
    }

    async putData(endpoint, data) {
        try {
            const response = await axiosInstance.put(endpoint, data);
            return response.data;
        } catch (error) {
            console.error({MSG: "Error PUT data:", error});
            throw error
        }
    }

    async deleteData(endpoint) {
        try {
            await axiosInstance.delete(endpoint);
        } catch (error) {
            console.error({MSG: "Error DELETE data:", error});
            throw error
        }
    }
}

export default new APIController();