<template>
    <div class="container-nav">
        <div class="container-center">
            <div class="center-left">
                <div class="left-active">乐扣</div>
                <div class="left-child" :class="{ active: activeNav === 'message' }" @click="passToHome">首页</div>
                <div class="left-child" :class="{ active: activeNav === 'problems' }" @click="passToBank">题库</div>
                <div class="left-child" :class="{ active: activeNav === 'contest' }" @click="passToContest">比赛</div>
                <div class="left-child" :class="{ active: activeNav === 'sheet' }" @click="passToSheet">题单</div>
            </div>
            <div class="center-right">
                <el-input placeholder="搜索题目" prefix-icon="Search" style="width: 240px"></el-input>
                <div class="right-self" @click="router.push('/home/profile')">
                    <el-image :src="user.avater" fit="cover"
                        style="margin-right: 10px;width: 40px; height: 40px;border-radius: 50%;"></el-image>
                    <div class="right-name">{{ user.name }}</div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import img from '@/assets/self-img.png'
import { onMounted, ref, watch } from 'vue';
import { useRoute, useRouter } from 'vue-router';
const router = useRouter()

const passToContest = () => {
    router.push('/home/contest')
}
const passToHome = () => {
    router.push('/home/message')
}
const passToBank = () => {
    router.push('/home/problems')
}
const passToSheet = () => {
    router.push('/home/sheet')
}

let leftChildren: any
onMounted(async () => {
    leftChildren = document.querySelectorAll('.left-child')
    leftChildren.forEach((item: any) => {
        item.addEventListener('click', () => {
            leftChildren.forEach((i: any) => i.classList.remove('active'))
            item.classList.add('active')
        })
    })
})

// user message
const user = ref({
    name: '程序员小明',
    avater: img,
})

const route = useRoute()
const activeNav: any = ref('message')
const navItems = [
    { key: 'message', label: '首页', path: '/home/message' },
    { key: 'problems', label: '题库', path: '/home/problems' },
    { key: 'sheet', label: '题单', path: '/home/sheet' },
    { key: 'contest', label: '比赛', path: '/home/contest' },
    { key: 'profile', label: '个人中心', path: '/home/profile' }
]
watch(() => route.path, (newPath) => {
    const matchedItem = navItems.find(item => newPath.startsWith(item.path))
    if (matchedItem) activeNav.value = matchedItem.key
}, { immediate: true })

</script>

<style scoped lang="scss">
.container-nav {
    height: 50px;
    display: flex;
    justify-content: center;
    align-items: center;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    background-color: white;
    z-index: 1000;

    .container-center {
        height: 50px;
        width: 100%;
        padding: 0px 20px;
        display: flex;
        justify-content: space-between;

        .center-left {
            display: flex;
            align-items: center;

            .left-active {
                font-size: 30px;
                font-weight: bold;
                color: rgb(59, 130, 246)
            }

            .active {
                color: rgb(59, 130, 246);
                font-weight: bold;
                background: rgba(59, 130, 246, 0.1);
                border-bottom: 1px solid rgb(59, 130, 246);
            }

            div {
                margin-right: 20px;
            }
        }

        .center-right {
            display: flex;
            align-items: center;

            .el-input {
                margin-right: 40px;
            }

            .right-self {
                display: flex;
                align-items: center;
            }
        }
    }
}
</style>