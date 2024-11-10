import { Client, Databases, Storage, Query, ID } from "appwrite";
import config from "../../../../config/config";

export class DatabaseService {
    client = new Client();
    databases;
    bucket;


    constructor() {
        this.client
            .setEndpoint(config.appwriteURL)
            .setProject(config.appwriteProjectId);

        this.databases = new Databases(this.client);
        this.bucket = new Storage(this.client);
    }

    async createPost({ title, slug, content, img, status, user_id }) {
        try {
            return await this.databases.createDocument(
                config.appwriteDatabaseId,
                config.appwriteCollectionId,
                slug,
                {
                    title,
                    content,
                    img,
                    status,
                    user_id
                }
            );

        } catch (error) {
            throw error;
        }
    }

    async updatePost(slug, { title, content, img, status, user_id }) {
        try {
            return await this.databases.updateDocument(
                config.appwriteDatabaseId,
                config.appwriteCollectionId,
                slug,
                {
                    title,
                    content,
                    img,
                    status,
                    user_id
                }
            );

        } catch (error) {
            throw error;
        }
    }

    async deletePost(slug) {
        try {

            await this.databases.deleteDocument(
                config.appwriteDatabaseId,
                config.appwriteCollectionId,
                slug
            )
            return true;

        } catch (error) {
            throw error;
        }
        return false;

    }

    async getPost(slug) {
        try {
            return await this.databases.getDocument(config.appwriteDatabaseId, config.appwriteCollectionId, slug);

        } catch (error) {
            throw error;
        }
    }

    async getPosts() {
        try {

            return await this.databases.listDocuments(
                config.appwriteDatabaseId,
                config.appwriteCollectionId,
                [
                    Query.equal("status", "active")
                ]
            )

        } catch (error) {
            throw error;
        }
    }

    // Fiel Upload Services

    async uploadFile(file) {
        try {
            return await this.bucket.createFile(config.appwriteBucketId, ID.unique(), file);

        } catch (error) {
            throw error;
        }
        return false;
    }

    async deleteFile(file_id) {
        try {
            await this.bucket.deleteFile(config.appwriteBucketId, file_id);
            return true;

        } catch (error) {
            throw error;
        }
        return false;
    }

    getFilePreview(file_id) {
        return this.bucket.getFilePreview(config.appwriteBucketId, file_id);
    }
}


const dbService = new DatabaseService();

export default dbService;


