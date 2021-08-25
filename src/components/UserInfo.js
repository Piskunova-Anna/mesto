import { profileName, profileText } from '../pages/index.js';

export class UserInfo {
    constructor(name, info) {
        this._name = name;
        this._info = info;
    }

    getUserInfo() {
        this._name.value = profileName.textContent;
        this._info.value = profileText.textContent;
    }

    setUserInfo() {
        profileName.textContent = this._name.value;
        profileText.textContent = this._info.value;
    }
}