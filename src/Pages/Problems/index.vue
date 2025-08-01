<template>
    <el-card shadow="false" class="problems-lists">
        <div class="problem-title">
            <div style="font-size: 20px; font-weight: bold;margin-bottom: 10px;">题库</div>
            <div style="margin-bottom: 20px;">首页 > 题库</div>
        </div>
        <div class="problem-choose" style="display: flex;justify-content: space-between;">
            <div class="choose-left">
                <el-input style="width: 200px;margin-right: 10px;" placeholder="搜索相关的题目"></el-input>
                <el-select v-model="difficultyDefault" placeholder="Select" style="width: 100px;margin-right: 10px;">
                    <el-option v-for="item in difficultyOptions" :key="item.value" :label="item.label"
                        :value="item.value" />
                </el-select>
                <el-select v-model="categoryDefault" placeholder="Select" style="width: 100px;margin-right: 10px;">
                    <el-option v-for="item in categoryOptions" :key="item.value" :label="item.label"
                        :value="item.value" />
                </el-select>
                <el-select v-model="tagDefault" placeholder="Select" style="width: 100px">
                    <el-option v-for="item in tagsOptions" :key="item" :label="item" :value="item" />
                </el-select>
            </div>
            <div class="choose-right">
                排序：
                <el-select v-model="sortDefault" placeholder="Select" style="width: 100px">
                    <el-option v-for="item in sortOptions" :key="item.value" :label="item.label" :value="item.value" />
                </el-select>
            </div>
        </div>
        <el-table :data="tableData" style="width: 100%">
            <el-table-column prop="id" label="题号" width="100" />
            <el-table-column prop="title" label="题目名称" width="200" />
            <el-table-column prop="difficulty" label="题型" width="180">
                <template #default="{ row }">
                    <el-tag :type="getDifficultyType(row.difficulty)">
                        {{ row.difficulty }}
                    </el-tag>
                </template>
            </el-table-column>
            <el-table-column prop="tags" label="标签" width="180" />
            <el-table-column prop="passRate" label="通过率" width="180" />
            <el-table-column label="操作" width="180">
                <template #default>
                    <el-button style="font-size: 20px;" type="text">
                        <el-icon @click="changeCollection($event.target)">
                            <Star/>
                        </el-icon>
                    </el-button>
                    <el-button style="font-size: 20px;" type="text" icon="Plus" />
                </template>
            </el-table-column>
        </el-table>
    </el-card>
</template>

<script setup lang="ts">
import { ref } from 'vue';

const difficultyDefault = ref('难度')
const difficultyOptions = ref([
    { value: 'easy', label: '简单' },
    { value: 'medium', label: '中等' },
    { value: 'hard', label: '困难' }
])
const categoryDefault = ref('题型')
const categoryOptions = ref([
    { value: 'basic', label: '基本编程题' },
    { value: 'simulation', label: '模拟题' },
    { value: 'algorithm', label: '算法题' }
])
const tagDefault = ref('标签')
const tagsOptions = ref([
    '标签',
    '数组',
    '字符串',
    '链表',
    '树',
    '图',
    '动态规划',
    '贪心',
    '二分查找'
])
const sortDefault = ref('排序')
const sortOptions = ref([
    { value: 'id_asc', label: '题号 (升序)' },  // 默认选中项（蓝底白字）
    { value: 'id_desc', label: '题号 (降序)' },
    { value: 'difficulty_asc', label: '难度 (简单到困难)' },
    { value: 'difficulty_desc', label: '难度 (困难到简单)' },
    { value: 'pass_rate_asc', label: '通过率 (低到高)' },
    { value: 'pass_rate_desc', label: '通过率 (高到低)' }
])
const tableData = ref([
    {
        id: 1,
        title: '两数之和',
        difficulty: '简单',
        type: '基本编程题',
        tags: ['数组', '哈希表'],
        passRate: '78.5%'
    },
    {
        id: 2,
        title: '两数相加',
        difficulty: '中等',
        type: '算法题',
        tags: ['链表', '数学'],
        passRate: '65.2%'
    },
    {
        id: 3,
        title: '无重复字符的最长子串',
        difficulty: '中等',
        type: '算法题',
        tags: ['字符串', '滑动窗口'],
        passRate: '58.7%'
    },
    {
        id: 4,
        title: '寻找两个正序数组的中位数',
        difficulty: '困难',
        type: '算法题',
        tags: ['数组', '二分查找'],
        passRate: '42.3%'
    },
    {
        id: 5,
        title: '最长回文子串',
        difficulty: '中等',
        type: '算法题',
        tags: ['字符串', '动态规划'],
        passRate: '51.8%'
    },
    {
        id: 6,
        title: 'Z 字形变换',
        difficulty: '中等',
        type: '模拟题',
        tags: ['字符串', '模拟'],
        passRate: '47.6%'
    },
    {
        id: 7,
        title: '整数反转',
        difficulty: '简单',
        type: '基本编程题',
        tags: ['数学'],
        passRate: '72.1%'
    },
    {
        id: 8,
        title: '字符串转换整数 (atoi)',
        difficulty: '中等',
        type: '模拟题',
        tags: ['字符串'],
        passRate: '48.9%'
    },
    {
        id: 9,
        title: '回文数',
        difficulty: '简单',
        type: '基本编程题',
        tags: ['数学'],
        passRate: '81.3%'
    },
    {
        id: 10,
        title: '正则表达式匹配',
        difficulty: '困难',
        type: '算法题',
        tags: ['字符串', '动态规划'],
        passRate: '35.8%'
    }
])

const getDifficultyType = (difficulty: '简单' | '中等' | '困难'): 'success' | 'warning' | 'danger' | '' => {
    const map: Record<'简单' | '中等' | '困难', 'success' | 'warning' | 'danger'> = {
        '简单': 'success',
        '中等': 'warning',
        '困难': 'danger'
    }
    return map[difficulty] || ''
}

const changeCollection = (el: any) => {
    const color = el.style.backgroundColor === 'orange' ? null : 'orange'
    el.style.backgroundColor = color
}
</script>

<style scoped lang="scss"></style>