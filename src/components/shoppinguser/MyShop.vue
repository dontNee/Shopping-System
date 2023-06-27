<script setup lang="ts">
import Api from '../../api/index';
import { ElMessage } from 'element-plus';
import { reactive, ref, inject, onMounted } from 'vue';
import { useStore } from 'vuex';
// 商品类型选项
const goodTypeOptions = reactive([
    {
        value: "水果",
        label: "水果"
    },
    {
        value: "家具",
        label: "家具"
    },
    {
        value: "其他",
        label: "其他"
    }
]);
// 定义表单模型
const formModel = reactive({
    // 图片地址
    imgUrl: "",
    // 商品名称
    goodName: "",
    // 商品类型
    goodType: "",
    // 商品描述
    goodDesc: ""
});
// 定义表格数据
const tableData = ref([]);

// 注入通用属性
const common: any = inject("common");
// 上传图片成功事件
function handleUploadSuccess(response: any, uploadFile: any) {
    // 成功
    if (response && response.statusCode == common.SUCCESS_CODE) {
        formModel.imgUrl = response.responseVo.downloadPath;
    }
}


// vuex
const store = useStore();
// 添加商品
function handleAddGoods() {
    // 获取用户Id
    const userId = store.state.user.currentUser ? store.state.user.currentUser.userId : "";
    // 用户Id为空时，不能上传
    if (!userId) {
        return ElMessage.warning("获取当前用户失败，请重新登录");
    }
    // 参数
    let params = {
        // 商品名称
        goodName: formModel.goodName,
        // 商品类型
        goodType: formModel.goodType,
        // 商品图片地址
        goodImgUrl: formModel.imgUrl,
        // 商品拥有者
        goodOwnerId: userId,
        // 商品描述
        goodDesc: formModel.goodDesc
    };
    // 回调
    let callback = (result: any) => {
        // 成功
        if (result && result.statusCode == common.SUCCESS_CODE) {
            // 重置表单
            resetForm();
            // 重新获取商品
            initGoods();
        }
    };
    // 添加商品
    Api.addGoods(params, callback);
}

// 获取商品
function initGoods() {
    // 获取用户Id
    const userId = store.state.user.currentUser ? store.state.user.currentUser.userId : "";
    // 用户Id为空时，不能上传
    if (!userId) {
        return;
    }
    // 获取用户商品参数
    let params = {
        // 用户Id
        userId: userId
    };
    // 回调
    let callback = (result: any) => {
        // 成功
        if (result && result.statusCode == common.SUCCESS_CODE) {
            // 初始化商品列表
            tableData.value = result.responseVo;
        }
    };
    // 获取用户商品
    Api.getGoodsByUser(params, callback);
}

// 获取上传空间
const uploadRef = ref();
// 重置表单
function resetForm() {
    // 初始化表单数据
    Object.assign(formModel, {
        // 图片地址
        imgUrl: "",
        // 商品名称
        goodName: "",
        // 商品类型
        goodType: "",
        // 商品描述
        goodDesc: ""
    });
    // 清除上传的文件列表
    uploadRef.value!.clearFiles();
}

onMounted(() => {
    // 初始化商品
    initGoods();
})
</script>

<template>
    <div class="my-shop">
        <h5 class="section-title">{{ "添加商品" }}</h5>
        <div class="upload-goods">
            <el-form :model="formModel" :inline="true" label-width="80px">
                <el-row>
                    <el-form-item label="商品名称">
                        <el-input v-model="formModel.goodName"></el-input>
                    </el-form-item>
                    <el-form-item label="商品类型">
                        <el-select v-model="formModel.goodType">
                            <el-option v-for="item in goodTypeOptions"
                                :key="item.value"
                                :label="item.label" 
                                :value="item.value"
                            ></el-option>
                        </el-select>
                    </el-form-item>
                </el-row>
                <el-row>
                    <el-form-item label="商品描述">
                        <el-input type="textarea" 
                            v-model="formModel.goodDesc"
                            :rows="3" 
                            :maxlength="100"
                            resize="none"
                            :show-word-limit="true"
                            style="width: 196px;"
                        ></el-input>
                    </el-form-item>
                </el-row>
                <el-row>
                    <el-form-item label="商品图片">
                        <el-upload
                            ref="uploadRef"
                            class="goods-img-uploader"
                            action="http://43.138.104.32:80/api/good/uploadImg"
                            :on-success="handleUploadSuccess"    
                        >
                            <img v-if="formModel.imgUrl" :src="formModel.imgUrl" class="avatar" />
                            <el-icon v-else class="avatar-uploader-icon">
                                <Plus />
                            </el-icon>
                        </el-upload>
                    </el-form-item>
                </el-row>
                <el-row class="form-ctrls">
                    <el-button type="warning" class="btn-add" @click="handleAddGoods">{{ "添加商品" }}</el-button>
                </el-row>
            </el-form>
        </div>
        <h5 class="section-title">{{ "商品列表" }}</h5>
        <!-- 表格 -->
        <el-table :data="tableData" style="width: 100%" max-height="200">
            <el-table-column 
                prop="goodId" 
                label="商品主键"
                :show-overflow-tooltip="true"
            />
            <el-table-column
                prop="goodName" 
                label="商品名称"
                :show-overflow-tooltip="true"
            />
            <el-table-column 
                prop="goodPrice" 
                label="商品价格" 
                :show-overflow-tooltip="true"
            />
            <el-table-column 
                prop="goodDesc" 
                label="商品描述" 
                :show-overflow-tooltip="true"
            />
            <el-table-column label="操作" />
        </el-table>
    </div>
</template>

<style lang="scss" scoped>
.my-shop {
    .upload-goods {
        padding: 20px 0;
        background-color: #fff;

        .goods-img-uploader {

            :deep(.el-upload) {
                border: 1px dashed var(--el-border-color);
                border-radius: 6px;
                cursor: pointer;
                position: relative;
                overflow: hidden;
                transition: var(--el-transition-duration-fast);

                &:hover {
                    border-color: var(--el-color-primary);
                }
            }
        }

        .avatar-uploader-icon, img {
            width: 74px;
            height: 74px;
        }

        .form-ctrls {
            padding: 0 80px;
            .btn-add {
                font-weight: 700;
                width: 196px;
                height: 35px;
            }
        }
    }

    .section-title {
        color: #333;
        font-size: 16px;
        font-weight: 700;
        margin: 5px 0 10px;
    }
}
</style>