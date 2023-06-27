<script setup lang="ts">
import { ref } from 'vue';

// 定义表格数据
const tableData = ref([]);

</script>

<template>
    <div class="my-order">
        <h5 class="section-title">{{ "订单列表" }}</h5>
        <el-table :data="tableData" style="width: 100%">
            <el-table-column prop="date" label="订单编号" width="180" />
            <el-table-column prop="name" label="订单内容" width="180" />
            <el-table-column prop="address" label="订单发起人" />
            <el-table-column prop="address" label="订单日期" />
            <el-table-column prop="address" label="订单状态" />
        </el-table>
    </div>
</template>

<style lang="scss" scoped>
.my-order {

    .section-title {
        color: #333;
        font-size: 16px;
        font-weight: 700;
        margin: 5px 0 10px;
    }
}
</style>