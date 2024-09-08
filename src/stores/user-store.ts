import { makeAutoObservable } from "mobx";

export interface UserStore {
    username?: string;
    password?: string;
    email?: string;
}

export class UserStoreClass {
    data: UserStore = {};

    constructor() {
        makeAutoObservable(this);
    }

    setData(data: Partial<UserStore>) {
        this.data = { ...this.data, ...data };
    }

    clearData() {
        this.data = {};
    }

}

export const userStore = new UserStoreClass();
