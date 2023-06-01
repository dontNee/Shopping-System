<script setup lang="ts">
import PictureZoom from './PictureZoom.vue'
import ShoppingForm from './ShoppingForm.vue'
import PictureScroll from './PictureScroll.vue'
</script>

<template>
    <div class="detail-bodys">
        <el-container class="shopping-content-container">
            
            <el-main>

                <el-row>

                    <el-col :span="8">
                        <picture-zoom></picture-zoom>
                    </el-col>
                    
                    <el-col :span="10">
                        <shopping-form></shopping-form>
                    </el-col>

                    <el-col :span="6">
                        <picture-scroll></picture-scroll>
                    </el-col>
                </el-row>
            </el-main>

        </el-container>
    </div>
</template>

<style lang="scss" scoped>
.detail-bodys {

    :deep(.el-main) {
        overflow: hidden;
        min-height: 600px;
    }
}
</style>