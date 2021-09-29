export class UserInfo {
    constructor(name, info, avatar) {
        this._name = name;
        this._info = info;
        this._avatar = avatar;
    }

    getUserInfo() {
        const name = this._name.textContent;
        const about = this._info.textContent;
        const userId = this._userId;
        return { name, about, userId };
    }

    setUserInfo(name, about, userId) {
        this._name.textContent = name;
        this._info.textContent = about;
        this._userId = userId;
    }

    setUserAvatar(avatar) {
        this._avatar.src = avatar;
    }

    setUserId() {
        return this._userId;
    }
}