import APIController from "./APIController.js";

class AccountController {

    async getAccount() {
        try {
            const accountData = await APIController.fetchData(`/account`);
            return accountData;
        } catch (error) {
            console.error({ MSG: "Error GET Account Details:", error });
            throw error
        }
    }

    async getAccountDetails(accountId) {
        try {
            const accountData = await APIController.fetchData(`/account/${accountId}`);
            return accountData;
        } catch (error) {
            console.error({ MSG: "Error GET Account Details:", error });
            throw error
        }
    }

    async postAccount(data) {
        try {
            const accountData = await APIController.postData('/account', data);
            return accountData;
        } catch (error) {
            console.error({ MSG: "Error POST account", error });
        }
    }
}

export default new AccountController();