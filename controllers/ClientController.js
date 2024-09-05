import APIController from "./APIController.js";

class ClientController {
    async getClient(url) {
        try {
            const clientData = await APIController.fetchData(`/profile?${url}`);
            return clientData;
        } catch (error) {
            console.error({MSG: "Error GET Cliente Details:", error});
            throw error
        }
    }

    async getClientDetails(clientId) {
        try {
            const clientData = await APIController.fetchData(`/profile/${clientId}`);
            return clientData;
        } catch (error) {
            console.error({MSG: "Error GET Cliente Details:", error});
            throw error
        }
    }

    async postClient(data) {
        try {
            const clientData = await APIController.postData('/profile', data);
        return clientData;
        } catch (error) {
            console.error({MSG: "Error POST profile", error});   
        }
    }

    async putClient(clientId, data) {
        try {
            const clientData = await APIController.putData(`/profile/${clientId}`, data);
            return clientData;
        } catch (error) {
            console.error({MSG: "Error PUT Cliente Details:", error});
            throw error
        }
    }

    async deletaClient(clientId, data) {
        try {
            await APIController.deleteData(`/profile/${clientId}`, data)
        } catch (error) {
            console.error({MSG: "Error Delete Cliente:", error});
            throw error
        }
    }
}

export default new ClientController();