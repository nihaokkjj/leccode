<template>
    <el-card style="border-radius: 15px;padding: 10px;">
        <div class="card-top">
            首页 > 个人中心
        </div>
        <div class="card-personal"
            style="display: flex;justify-content: space-between;border-bottom: 1px solid rgb(243, 244, 246);padding-bottom: 20px;">
            <div class="p-left" style="display: flex;margin-top: 24px;">
                <el-avatar size="large" :src="userInfo.avatar" style="margin-right: 15px;">
                </el-avatar>
                <div>
                    <div style="font-weight: bold;font-size: 20px;margin-bottom: 10px;">{{ userInfo.username }}</div>
                    <div style="margin-bottom: 20px;color: rgb(107, 114, 128);">{{ userInfo.bio }}</div>
                    <div>
                        <el-button icon="Edit" style="border-radius: 10px;">编辑个人信息</el-button>
                    </div>
                </div>

            </div>
            <div class="p-right" style="display: flex;align-items: center;justify-content: center;">
                <div class="show-detail">
                    <div style="font-weight: bold;color: rgb(59, 130, 246);font-size: 20px;display: flex;justify-content: center;"
                        class="show-number">{{ userInfo.stats.solved
                        }}</div>
                    <div class="show-content">已解题</div>
                </div>
                <div class="show-detail" style="margin: 0px 10px;">
                    <div style="font-weight: bold;color: rgb(99, 102, 241);font-size: 20px;" class="show-number">Lv.{{
                        userInfo.stats.level }}</div>
                    <div class="show-content" style="display: flex;justify-content: center;">等级</div>
                </div>
                <div class="show-detail">
                    <div style="font-weight: bold;color: rgb(245, 158, 11);font-size: 20px;" class="show-number">#{{
                        userInfo.stats.rank
                        }}</div>
                    <div class="show-content" style="display: flex;justify-content: center;">排名</div>
                </div>
            </div>
        </div>
        <div class="problem-all" style="margin-top: 20px;">
            <div class="problem-title" style="font-size: 20px;font-weight: bold;">
                做题统计
            </div>
            <div class="problem-shape" style="display: flex;">
                <div class="shape-left"
                    style="margin-top: 20px;margin-right: 10px;flex: 1;padding: 10px;background-color:rgb(249, 250, 251);border-radius: 20px;">
                    <div style="font-weight: bold;">难度分布</div>
                    <div ref="chartDom" style="width: 100%; height: 300px;margin-top: -20px;margin-right: 20px;"></div>
                </div>
                <div class="shape-right"
                    style="padding: 10px;margin-top: 20px;flex: 1;background-color:rgb(249, 250, 251);border-radius: 20px;">
                    <div style="font-weight: bold;margin-bottom: 10px;">做题热力图</div>
                    <div class="right-detail" style="display: flex;justify-content: space-between;">
                        <div>近一年做题活跃度</div>
                        <div>共完成 156 题</div>
                    </div>
                    <div ref="dataDom" style="width: 100%; height: 300px;margin-top: -20px;margin-right: 20px;"></div>
                </div>
            </div>
        </div>
        <el-tabs style="margin-top: 20px;" v-model="activeName" class="demo-tabs">
            <el-tab-pane label="提交记录" name="first">
                <div style="display: flex;justify-content:space-between;">
                    <div>
                        <el-select v-model="submitValue" placeholder="Select" style="width: 100px">
                            <el-option v-for="item in submitOptions" :key="item.value" :label="item.label"
                                :value="item.value" />
                        </el-select>
                        <el-select v-model="difficultyDefault" placeholder="Select"
                            style="width: 100px;margin: 0px 10px;">
                            <el-option v-for="item in difficultyOptions" :key="item.value" :label="item.label"
                                :value="item.value" />
                        </el-select>
                        <el-select v-model="selectedLanguage" placeholder="Select" style="width: 100px">
                            <el-option v-for="item in languageOptions" :key="item.value" :label="item.label"
                                :value="item.value" />
                        </el-select>
                    </div>
                    <div>
                        <el-select v-model="selectedSort" placeholder="Select" style="width: 150px">
                            <el-option v-for="item in sortOptions" :key="item.value" :label="item.label"
                                :value="item.value" />
                        </el-select>
                    </div>
                </div>
                <el-table :data="SubRecord" style="width: 100%;margin-top: 20px;" stripe>
                    <el-table-column prop="date" label="提交时间" align="center" width="100px" />
                    <el-table-column prop="title" label="题目名称" width="150" />
                    <el-table-column prop="language" label="编程语言" align="center" />
                    <el-table-column prop="result" label="判题结果" align="center" width="130px">
                        <template #default="{ row }">
                            <el-tag :type="getResultType(row.result)" size="small">
                                <el-icon v-if="row.result === '通过'">
                                    <CircleCheck />
                                </el-icon>
                                <el-icon v-else-if="row.result === '答案错误'">
                                    <CircleClose />
                                </el-icon>
                                <el-icon v-else>
                                    <Warning />
                                </el-icon>
                                {{ row.result }}
                            </el-tag>
                        </template>
                    </el-table-column>
                    <el-table-column prop="runtime" label="运行时间" align="center" />
                    <el-table-column prop="memory" label="内存使用" align="center" />
                    <el-table-column prop="operation" label="操作" align="center">
                        <template #default="{ row }">
                            <el-button type="text" @click="">
                                {{ row.operation }}
                            </el-button>
                        </template>
                    </el-table-column>
                </el-table>
            </el-tab-pane>
            <el-tab-pane label="参与的比赛" name="second">
                <el-table :data="contestData" style="width: 100%" :header-cell-style="{ background: '#FAFAFA' }">
                    <el-table-column prop="name" label="比赛名称">
                        <template #default="{ row }">
                            <span style="color: #409EFF; cursor: pointer">{{ row.name }}</span>
                        </template>
                    </el-table-column>
                    <el-table-column prop="time" label="比赛时间" width="220" />
                    <el-table-column prop="rank" label="排名" align="center" />
                    <el-table-column prop="solved" label="解题数" align="center" />
                    <el-table-column prop="penalty" label="罚时" align="center" />
                    <el-table-column label="操作" align="center">
                        <template #default="{ row }">
                            <el-button type="text" @click="">
                                {{ row.operation }}
                            </el-button>
                        </template>
                    </el-table-column>
                </el-table>
            </el-tab-pane>
            <el-tab-pane label="创建的题单" name="third">
                <div style="display: flex;">
                    <el-card style="border-radius: 20px;width: 30%;;margin-top: 10px;margin-right: 20px;" shadow="hover"
                        v-for="item in listDatas">
                        <div
                            style="margin-bottom: 10px;display: flex; justify-content: space-between;align-items: center;">
                            <div style="font-weight: bold;">{{ item.title }}</div>
                            <el-tag :type="toColor(item.visibility)">{{ item.visibility }}</el-tag>
                        </div>
                        <div class="card-desc">{{ item.description }}</div>
                        <div style="margin-top: 15px;display: flex;color:gray;font-size: 14px;">
                            <div style="display: flex;margin-right: 10px;align-items: center;">
                                <el-icon style="margin-right: 10px;">
                                    <MoreFilled />
                                </el-icon>
                                {{ item.problem_count }}题
                            </div>
                            <div style="display: flex;align-items: center;">
                                <el-icon style="margin-right: 5px;">
                                    <View />
                                </el-icon>
                                {{ item.view_count }}次浏览
                            </div>
                        </div>
                        <div style="margin-top: 10px;">
                            <el-tag size="small" style="margin-right: 5px;" type="info" v-for="tag in item.tags">
                                {{ tag }}
                            </el-tag>
                        </div>
                        <div
                            style="display: flex;justify-content:space-between;margin-top: 15px;font-size: 14px;color: gray;">
                            <div>
                                <el-icon>
                                    <Calendar />
                                </el-icon>
                                {{ item.created_at }} 创建
                            </div>
                            <div>
                                <el-button icon="Edit"></el-button>
                                <el-button icon="Share"></el-button>
                            </div>
                        </div>
                    </el-card>
                    <el-card style="border-radius: 20px;width: 30%;;margin-top: 10px;margin-right: 20px;"
                        shadow="hover">
                        <div style="display: flex;justify-content: center;align-items: center;">
                            <div>
                                <el-button style="margin-left: 20px;margin-top: 100%;margin-bottom: 15px;" circle icon="Plus"></el-button>
                                <div>创建新题单</div>
                            </div>
                        </div>

                    </el-card>
                </div>
            </el-tab-pane>
        </el-tabs>
    </el-card>
</template>

<script setup lang="ts">

import { onMounted, ref } from 'vue'
import img from '../../assets/self-img.png'
import * as echarts from 'echarts'
const toColor = (state: any) => {
    const map: any = {
        'public': 'primary',
        'private': 'info'
    }
    return map[state]
}

const listDatas = ref([
    {
        id: 1,
        title: "算法入门必刷题",
        description: "收集了经典的算法入门题目，适合初学者循序渐进地学习基础算法知识",
        visibility: "public",
        view_count: 1248,
        problem_count: 15,
        tags: ["数组", "链表", "排序", "二分查找"],
        created_at: "2023-06-01",
        operations: ["edit", "share"]
    },
    {
        id: 2,
        title: "动态规划专题",
        description: "从基础到进阶的动态规划题目集合，包含经典DP问题和变种题型",
        visibility: "private",
        view_count: 0,
        problem_count: 8,
        tags: ["动态规划", "背包问题", "子序列"],
        created_at: "2023-05-15",
        operations: ["edit", "share"]
    }
])

const SubRecord = ref([
    {
        date: '2023-06-15 14:32',
        title: '二分查找',
        language: 'C++',
        result: '通过',
        runtime: '4ms',
        memory: '7.2MB',
        operation: '查看代码'
    },
    {
        date: '2023-06-15 13:45',
        title: '两数之和',
        language: 'Python',
        result: '通过',
        runtime: '36ms',
        memory: '14.3MB',
        operation: '查看代码'
    },
    {
        date: '2023-06-14 21:18',
        title: '合并两个有序链表',
        language: 'Java',
        result: '答案错误',
        runtime: '-',
        memory: '-',
        operation: '查看代码'
    },
    {
        date: '2023-06-14 20:05',
        title: '有效的括号',
        language: 'JavaScript',
        result: '超时',
        runtime: '-',
        memory: '-',
        operation: '查看代码'
    },
    {
        date: '2023-06-13 16:22',
        title: '最长回文子串',
        language: 'C++',
        result: '通过',
        runtime: '12ms',
        memory: '9.8MB',
        operation: '查看代码'
    }
])

const getResultType = (result: any) => {
    const map: any = {
        '通过': 'success',
        '答案错误': 'danger',
        '超时': 'warning'
    }
    return map[result] || ''
}

const contestData = ref([
    {
        name: '2023年春季编程大赛',
        time: '2023-05-20 14:00-17:00',
        rank: '5/64',
        solved: '5/5',
        penalty: '78分钟',
        operation: '查看详情'
    },
    {
        name: '算法入门训练赛',
        time: '2023-04-15 19:00-21:00',
        rank: '3/42',
        solved: '3/4',
        penalty: '35分钟',
        operation: '查看详情'
    },
    {
        name: '科技工作室招新考核',
        time: '2023-03-10 10:00-12:00',
        rank: '8/56',
        solved: '2/4',
        penalty: '102分钟',
        operation: '查看详情'
    }
])

const activeName = ref('first')
const submitValue = ref('all')
const submitOptions = ref([
    {
        value: 'all',
        label: '全部结果',
        style: {
            backgroundColor: '#409EFF',
            color: 'white'
        }
    },
    {
        value: 'accepted',
        label: '通过'
    },
    {
        value: 'wrong_answer',
        label: '答案错误'
    },
    {
        value: 'timeout',
        label: '超时'
    },
    {
        value: 'memory_exceeded',
        label: '超内存'
    },
    {
        value: 'runtime_error',
        label: '运行时错误'
    },
    {
        value: 'compile_error',
        label: '编译错误'
    }
])

const difficultyDefault = ref('all')
const difficultyOptions = ref([
    {
        value: 'all',
        label: '全部难度',
        style: {  // 选中项特殊样式
            backgroundColor: '#409EFF', // Element主蓝色
            color: 'white',
            fontWeight: 'bold'
        }
    },
    {
        value: 'easy',
        label: '简单'
    },
    {
        value: 'medium',
        label: '中等'
    },
    {
        value: 'hard',
        label: '困难'
    }
])
const selectedLanguage = ref('all')
const languageOptions = ref([
    {
        value: 'all',
        label: '全部语言',
        style: { // 选中项特殊样式
            backgroundColor: '#409EFF', // Element主蓝色
            color: 'white'
        }
    },
    {
        value: 'cpp',
        label: 'C++'
    },
    {
        value: 'java',
        label: 'Java'
    },
    {
        value: 'python',
        label: 'Python'
    },
    {
        value: 'javascript',
        label: 'JavaScript'
    },
    {
        value: 'go',
        label: 'Go'
    }
])
const selectedSort = ref('time_newest')
const sortOptions = ref([
    {
        value: 'time_newest',
        label: '时间（最新）',
        style: { // 选中项特殊样式
            backgroundColor: '#409EFF', // Element主蓝色
            color: 'white'
        }
    },
    {
        value: 'time_oldest',
        label: '时间（最旧）'
    },
    {
        value: 'runtime_asc',
        label: '运行时间（升序）'
    },
    {
        value: 'memory_asc',
        label: '内存使用（升序）'
    }
])

const userInfo: any = {
    username: "程序员小明",
    avatar: img,
    bio: "热爱编程，擅长算法，正在学习前端开发",
    stats: {
        solved: 156,
        level: 3,
        rank: 128
    }
}

const solveProblem = [
    {
        level: "简单",
        count: 24,
        color: "#67C23A"
    },
    {
        level: "中等",
        count: 16,
        color: "#E6A23C"
    },
    {
        level: "困难",
        count: 2,
        color: "#F56C6C"
    }
]
const solveLevel = solveProblem.map(item => item.level)
const solveNumber = solveProblem.map(item => item.count)
const chartDom = ref(null)
const dataDom = ref(null)

const options = {
    tooltip: {
        formatter: (params: { value: any[] }) => {
            return `${params.value[0]}月 周${['日', '一', '二', '三', '四', '五', '六'][params.value[1]]}<br/>
              做题量: <strong>${params.value[2] || 0}</strong>`
        }
    },
    xAxis: {
        type: 'category',
        data: ['1月', '2月', '3月', '4月', '5月'],
        axisLabel: {
            color: '#666',
            fontSize: 12
        },
        axisLine: {
            lineStyle: {
                color: '#E0E0E0'
            }
        }
    },
    yAxis: {
        type: 'category',
        data: ['周日', '周一', '周二', '周三', '周四', '周五', '周六'],
        axisLabel: {
            color: '#666',
            fontSize: 12,
            formatter: (val: string) => val.replace('周', '')
        }
    },
    visualMap: {
        min: 0,
        max: 10,
        calculable: true,
        orient: 'horizontal',
        left: 'center',
        bottom: 25,
        textStyle: {
            color: '#666'
        },
        inRange: {
            color: ['#FFFFFF', '#E8F5E9', '#C8E6C9', '#81C784', '#4CAF50', '#2E7D32']
        }
    },
    series: [{
        name: '做题量',
        type: 'heatmap',
        data: generateData(),
        label: {
            show: false
        },
        itemStyle: {
            borderColor: 'rgba(255,255,255,0.8)',
            borderWidth: 1,
            borderRadius: 2
        },
        emphasis: {
            itemStyle: {
                shadowBlur: 8,
                shadowColor: 'rgba(0,0,0,0.15)'
            }
        }
    }]
};

function generateData() {
    const data: any = [];
    const monthNames = ['1月', '2月', '3月', '4月', '5月'];

    // 模拟真实学习行为
    monthNames.forEach((_, monthIdx) => {
        for (let dayIdx = 0; dayIdx < 7; dayIdx++) {
            // 周末活跃度+30%
            const isWeekend = dayIdx === 0 || dayIdx === 6; // 周日=0, 周六=6
            let count = Math.floor(Math.random() * 7);

            if (isWeekend) count = Math.min(10, count + 3);

            // 3月冲刺期活跃度翻倍
            if (monthIdx === 2) count = Math.min(10, count * 2);

            data.push([monthIdx, dayIdx, count]);
        }
    });

    return data;
}

onMounted(() => {
    const myChart = echarts.init(chartDom.value)
    myChart.setOption({
        xAxis: { type: 'category', data: solveLevel },
        yAxis: { type: 'value' },
        series: [{
            data: solveNumber.map((num, index) => ({
                value: num,
                itemStyle: { color: solveProblem[index].color }
            })), type: 'bar'
        }]
    })

    const exerseChart = echarts.init(dataDom.value)
    exerseChart.setOption(options)
})
</script>

<style scoped lang="scss">
.card-desc {
    font-size: 15px;
    color: gray;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    /* 限制两行 */
    -webkit-box-orient: vertical;
    overflow: hidden;
    text-overflow: ellipsis;
    line-height: 1.5;
    /* 行高建议值 */
    max-height: 3em;
    /* 两行高度 = 1.5 x 2 */
}
</style>