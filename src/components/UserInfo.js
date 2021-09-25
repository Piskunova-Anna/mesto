import { profileName, profileText, profileKusto } from '../utils/constants.js';

export class UserInfo {
    constructor(name, info) {
        this._name = name;
        this._info = info;
    }

    getUserInfo() {
        this._name.value = profileName.textContent;
        this._info.value = profileText.textContent;
        const userId = this._userId;
        return (userId);
    }

    setUserInfo(name, about, userId) {
        profileName.textContent = name;
        profileText.textContent = about;
        this._userId = userId;
    }

    setUserAvatar(avatar) {
        profileKusto.src = avatar;
    }

    setUserId() {
        return this._userId;
    }
}