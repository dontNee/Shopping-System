class User {

    // 用户账户
    userId: string;

    // 用户姓名
    userName: string;

    // 用户性别
    userSex: string;

    // 年龄
    userAge: number;

    constructor() {
        // 初始化对象
        this.userId = "";
        this.userName = "";
        this.userSex = "";
        this.userAge = 0;
    }
}

export default User;