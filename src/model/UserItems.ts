import Item from './Item';

class UserItems extends Item {

    // 用户ID
    userId: string;

    // 用户姓名
    userName: string;

    // 物品数量
    itemCount: number;

    constructor() {
        // 定义物品类
        super();
        // 初始化数据
        this.userId = "";
        this.userName = "";
        this.itemCount = 0;
    }

    initData(data: any) {
        if (!data) {
            return;
        }
        // 用户ID
        this.userId = data.userId ? data.userId : "";
        // 用户姓名
        this.userName = data.userName ? data.userName : "";
        // 物品数量
        this.itemCount = data.itemCount ? data.itemCount : "";
        // 物品ID
        this.itemId = data.itemId ? data.itemId : "";
        // 物品类型
        this.itemType = data.itemType ? data.itemType : "";
        // 物品名称
        this.itemName = data.itemName ? data.itemName : "";
        // 物品图片路径
        this.itemImageUrl = data.itemImageUrl ? data.itemImageUrl : "";
        // 物品价格
        this.itemPrice = data.itemPrice ? data.itemPrice : 0;
        // 物品信息
        this.itemInfo = data.itemInfo ? data.itemInfo : "";
        // 返回
        return this;
    }

    logInfo() {
        // 结果
        let result = "";
        // 遍历当前对象
        for (const key in this) {
            // 连接字符串
            result = result.concat(key, ":", this[key] as string, ",");
        }
        return result;
    }
}

export default UserItems;