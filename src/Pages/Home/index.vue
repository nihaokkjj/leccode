<template>
    <div class="container-home">
        <div class="home-left">
            <el-card>
                <template #header>
                    <div>功能导航</div>
                </template>
                <el-menu :default-active="activeIndex" @select="handlerSelect" router>
                    <el-menu-item index="1" :route="{ path: '/home/message' }">
                        <template #title>
                            <el-icon>
                                <HomeFilled />
                            </el-icon>
                            <span>首页</span>
                        </template>
                    </el-menu-item>
                    <el-menu-item index="2" :route="{ path: '/home/problems' }">
                        <template #title>
                            <el-icon>
                                <MoreFilled />
                            </el-icon>
                            <span>题目列表</span>
                        </template>
                    </el-menu-item>
                    <el-menu-item index="3" :route="{ path: '/home/sheet' }">
                        <template #title>
                            <el-icon>
                                <Files />
                            </el-icon>
                            <span>我的题单</span>
                        </template>
                    </el-menu-item>
                    <el-menu-item index="4" :route="{ path: '/home/contest' }">
                        <template #title>
                            <el-icon>
                                <Medal />
                            </el-icon>
                            <span>比赛</span>
                        </template>
                    </el-menu-item>
                    <el-menu-item index="5" :route="{ path: '/home/profile' }">
                        <template #title>
                            <el-icon>
                                <User />
                            </el-icon>
                            <span>个人中心</span>
                        </template>
                    </el-menu-item>
                </el-menu>

                <template #footer>
                    <div style="margin-bottom: 10px;">我的统计</div>
                    <div class="home-detail">
                        <div class="show-detail">
                            <div style="font-weight: bold; color: rgb(59, 130, 246);" class="show-number">42</div>
                            <div class="show-content">已解题</div>
                        </div>
                        <div class="show-detail">
                            <div style="font-weight: bold;color: rgb(99, 102, 241)" class="show-number">128</div>
                            <div class="show-content">总提交</div>
                        </div>
                    </div>
                </template>
            </el-card>
        </div>

        <div class="home-right">
            <router-view></router-view>
        </div>
    </div>
</template>

<script setup lang="ts">
import { ref, watch } from 'vue';
import { useRoute, useRouter } from 'vue-router';
const router = useRouter()
const route = useRoute()
const activeIndex: any = ref("0")
watch(() => route.meta.menuIndex, (newIndex) => {
    console.log(route.meta.menuIndex)
    if (newIndex) activeIndex.value = newIndex
}, { immediate: true })
const handlerSelect = (index:any) => {
    activeIndex.value = index
}
</script>

<style scoped lang="scss">
.container-home {
    padding: 20px;
    width: 100%;
    height: 100%;
    display: flex;

    .home-left {
        width: 176px;
        margin-right: 30px;

        .el-card {
            border-radius: 10px;

            .el-menu {
                border: 0px;
            }

            .home-detail {
                display: flex;
                justify-content: center;
                align-items: center;

                .show-detail {
                    margin-right: 10px;
                    background-color: rgb(229, 231, 235);
                    border-radius: 10px;
                    padding: 10px 5px;
                    width: 100px;

                    .show-number {
                        font-size: 18px;
                        display: flex;
                        justify-content: center;
                        margin-bottom: 6px;
                    }

                    .show-content {
                        display: flex;
                        justify-content: center;
                        font-size: 14px;
                    }
                }
            }
        }
    }

    .home-right {
        width: calc(100% - 176px);
    }
}
</style>