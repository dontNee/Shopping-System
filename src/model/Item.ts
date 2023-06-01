class Item {

    // 物品ID
    itemId: string;

    // 物品类型
    itemType: string;

    // 物品名称
    itemName: string;

    // 物品缩略图路径
    itemImageUrl: string;

    // 物品价格
    itemPrice: number;

    // 物品信息
    itemInfo: string;

    constructor() {
        // 初始化对象
        this.itemId = "";
        this.itemType = "";
        this.itemName = "";
        this.itemImageUrl = "";
        this.itemPrice = 0;
        this.itemInfo = "";
    }
}

export default Item;