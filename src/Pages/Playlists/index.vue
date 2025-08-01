<template>
    <el-card>
        <div class="card-top" style="display: flex;justify-content: space-between;">
            <div class="card-left">
                <div class="left-top" style="display: flex;align-items: center;">
                    <div class="fitst-title" style="font-weight: bold; font-size: 20px;margin-right: 20px;">题单</div>
                    <div class="fitst-title">首页 > 题单</div>
                </div>
                <div class="left-bottom" style="display: flex; margin-top: 20px;">
                    <div>
                        类型：
                        <el-select v-model="typeDefault" placeholder="Select" style="width: 100px;margin-right: 20px;">
                            <el-option v-for="item in typeOptions" :key="item.value" :label="item.label"
                                :value="item.value" />
                        </el-select>
                    </div>
                    <div>
                        标签：
                        <el-select v-model="tagDefault" placeholder="Select" style="width: 100px">
                            <el-option v-for="item in tagOptions" :key="item.value" :label="item.label"
                                :value="item.value" />
                        </el-select>
                    </div>
                </div>
            </div>
            <div class="card-right">
                <div style="display: flex; justify-content: flex-end;margin-bottom: 10px;">
                    <el-button type="primary" icon="Plus" style="border-radius: 13px;">
                        创建题单
                    </el-button>
                </div>

                <el-input placeholder="搜索题单" prefix-icon="Search">
                </el-input>
            </div>
        </div>
        <div class="card-bottom" style="margin-top: 15px;">
            <div class="tab-container">
                <el-tabs v-model="activeTab" @tab-change="filterQuestionSets">
                    <el-tab-pane label="全部题单" name="all"></el-tab-pane>
                    <el-tab-pane label="我创建的" name="mine"></el-tab-pane>
                    <el-tab-pane label="官方题单" name="official"></el-tab-pane>
                </el-tabs>
            </div>
            <div class="card-grid">
                <el-card style="border-radius: 15px;" v-for="set in filteredSets" :key="set.id" shadow="hover"
                    class="question-card">
                    <div class="card-title" style="display: flex;justify-content: space-between;">
                        <div class="title-left" style="font-weight: bold;">
                            {{ set.title }}
                        </div>
                        <el-tag :type="judgeTag(set.visibility)" class="title-right">
                            {{ judgeState(set.visibility) }}
                        </el-tag>
                    </div>
                    <div class="card-detail" style="margin: 10px 0px;font-size: 14px;color: rgb(107, 114, 128);">
                        {{ set.desc }}
                    </div>
                    <div class="card-tag" style="margin-bottom: 10px;">
                        <el-tag v-for="tag in set.tags" style="margin-right: 10px;">{{ tag }}</el-tag>
                    </div>
                    <div class="card-content" style="display: flex;justify-content: space-between;">
                        <div v-if="set.creator === 'official'" style="display: flex;align-items: center;">
                            <el-icon style="margin-right: 5px;">
                                <UserFilled />
                            </el-icon>
                            官方
                        </div>
                        <div v-else-if="set.creator === 'user'" style="display: flex;align-items: center;">
                            <el-icon style="margin-right: 5px;">
                                <UserFilled />
                            </el-icon>
                            我
                        </div>
                        <div style="display: flex;align-items: center;">
                            <el-icon style="margin-right: 5px;">
                                <MoreFilled />
                            </el-icon>
                            {{ set.count }}题
                        </div>
                    </div>
                    <template #footer>
                        <div class="card-footer" style="height: 15px;display: flex;justify-content: space-evenly;margin-top: -10px;margin-bottom: 5px;">
                            <div>
                                <el-button text class="footer-action">
                                    <span>查看</span>
                                </el-button>
                            </div>

                            <div>
                                <el-button text class="footer-action">
                                    <el-icon>
                                        <Share />
                                    </el-icon>
                                </el-button>
                            </div>

                            <div v-if="set.creator === 'user'">
                                <el-button text class="footer-action">
                                    <el-icon>
                                        <Delete />
                                    </el-icon>
                                </el-button>
                            </div>


                        </div>
                    </template>
                </el-card>
            </div>
        </div>
    </el-card>
</template>

<script setup lang="ts">
import { onMounted, ref } from 'vue';

// 写类型的定义
interface QuestionSet {
    id: number
    title: string
    desc: string,
    tags: Array<string>
    creator: string
    count: number
    visibility: string
    difficulty: string
}
const judgeState = (state: any) => {
    const map = {
        'public': '公开',
        'private': '私有'
    }
    return map[state as 'public' | 'private']
}
const judgeTag = (state: any) => {
    const map = {
        'public': 'success',
        'private': 'info'
    }
    return map[state as 'public' | 'private']
}
const activeTab = ref('all') // 默认选中"全部题单"
const filteredSets = ref<QuestionSet[]>([])
const dataStructureSets = ref([
    {
        id: 101,
        title: '数据结构基础通关',
        desc: '数组、链表、栈和队列等线性结构的经典题目集合',
        tags: ['数组', '链表', '栈', '队列'],
        creator: 'official',
        count: 45,
        visibility: 'public',
        difficulty: 'easy'
    },
    {
        id: 102,
        title: '二叉树精讲题集',
        desc: '涵盖二叉树遍历、重建、性质判断等高频考点',
        tags: ['二叉树', '递归'],
        creator: 'official',
        count: 36,
        visibility: 'public',
        difficulty: 'medium'
    },
    {
        id: 103,
        title: '图论实战训练',
        desc: 'DFS/BFS/最短路径/最小生成树等图论算法实战',
        tags: ['图论', 'DFS', 'BFS'],
        creator: 'user',
        count: 28,
        visibility: 'private',
        difficulty: 'hard'
    },
    {
        id: 104,
        title: '哈希表应用大全',
        desc: '通过实际问题掌握哈希表的巧妙用法',
        tags: ['哈希表', '字符串'],
        creator: 'official',
        count: 22,
        visibility: 'public',
        difficulty: 'medium'
    },
    {
        id: 105,
        title: '高级数据结构进阶',
        desc: '跳表、并查集、Trie树等高级数据结构实战',
        tags: ['高级数据结构'],
        creator: 'user',
        count: 18,
        visibility: 'private',
        difficulty: 'hard'
    },
    {
        id: 106,
        title: '堆结构专项突破',
        desc: '堆排序、TopK问题、优先级队列等堆结构应用',
        tags: ['堆', '排序'],
        creator: 'official',
        count: 15,
        visibility: 'public',
        difficulty: 'medium'
    }
])
const filterQuestionSets = () => {
    (filteredSets.value as any) = dataStructureSets.value.filter(set => {
        if (activeTab.value === 'all') return true
        if (activeTab.value === 'mine') return set.creator === 'user'
        if (activeTab.value === 'official') return set.creator === 'official'
    })
}

onMounted(() => {
    filterQuestionSets()
})
const typeDefault = ref('全部')
const typeOptions = ref([
    {
        value: 'all',
        label: '全部',
        // 用于自定义样式
        style: {
            backgroundColor: '#409EFF',
            color: 'white'
        }
    },
    {
        value: 'public',
        label: '公开'
    },
    {
        value: 'private',
        label: '私有'
    }
])
const tagDefault = ref('全部')
const tagOptions = ref([
    {
        value: 'all',
        label: '全部',
        // 用于自定义样式
        style: {
            backgroundColor: '#409EFF',
            color: 'white'
        }
    },
    {
        value: 'algorithm',
        label: '算法'
    },
    {
        value: 'data_structure',
        label: '数据结构'
    },
    {
        value: 'dp',
        label: '动态规划'
    },
    {
        value: 'greedy',
        label: '贪心'
    },
    {
        value: 'search',
        label: '搜索'
    }
])
</script>

<style scoped lang="scss">
.card-grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 20px;
    padding: 20px;
}

.card-detail {
    height: calc(14px * 1.5 * 2);
    /* 标准化属性 (W3C规范) */
    line-clamp: 2;
    box-orient: vertical;

    /* 兼容性写法 (Webkit/Blink) */
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;

    /* 必要辅助属性 */
    overflow: hidden;
    text-overflow: ellipsis;

    /* 精确高度控制 */
    height: calc(14px * 1.5 * 2);
    /* 字体大小14px × 行高1.5 × 2行 */
}
</style>