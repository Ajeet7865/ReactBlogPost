import { Account, Client, ID } from "appwrite";
import config from "../../../../config/config";

export class AuthService {
    Client = new Client();
    account;

    constructor() {
        this.Client
            .setEndpoint(config.appwriteURL)
            .setProject(config.appwriteProjectId);

        this.account = new Account(this.Client);
        //console.log(this.account)
    }

    async createAccount({ email, password, name }) {
        try {
            const userAccount = await this.account.create(ID.unique(), email, password, name);
            if (userAccount) {
                return this.login({ email, password })
            } else {
                return userAccount;
            }
        } catch (error) {
            throw error;
        }
    }

    async login({ email, password }) {
        try {
            return await this.account.createEmailPasswordSession(email, password);
        } catch (error) {
            throw error;
        }
    }

    async getCurrentUser() {
        try {
            return this.account.get();
        } catch (error) {
            console.log(error)
            throw error;
        }
        return null;
    }

    async logout(){
        try {
            return this.account.deleteSessions();
        } catch (error) {
            throw error;
            
        }
    }


}

const authService = new AuthService();

export default authService
