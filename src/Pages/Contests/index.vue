<template>
    <el-card class="right-contest">
        <div class="contest-title" style="font-weight: bold;font-size: 24px;">比赛</div>
        <div class="contest-bread" style="margin: 30px 0px;">首页 > 比赛</div>
        <div class="contest-menu">
            <div class="menu-left">
                <el-select v-model="StateDefault" placeholder="所有状态">
                    <el-option v-for="item in Stateoptions" :key="item.value" :label="item.label" :value="item.value" />
                </el-select>
                <el-select v-model="RulesDefault" placeholder="所有状态">
                    <el-option v-for="item in RulesOptions" :key="item.value" :label="item.label" :value="item.value" />
                </el-select>
            </div>
            <div class="menu-right">
                <el-select v-model="TimeDefaults" placeholder="所有状态">
                    <el-option v-for="item in TimesOptions" :key="item.value" :label="item.label" :value="item.value" />
                </el-select>
            </div>
        </div>
        <el-card class="contest-list" style="margin-bottom: 15px;margin-top: 10px;; border-radius: 10px;"
            v-for="item in contestList">
            <div class="contest-left">
                <div class="contest-title" style="display: flex;align-items: center;">
                    <div class="title-content" style="margin-right: 10px;font-size: 16px;font-weight: bold;">{{
                        item.name }}
                    </div>
                    <div class="title-tag">
                        <el-tag round v-if="item.status === '进行中'" type="success">
                            进行中
                        </el-tag>
                        <el-tag round v-else-if="item.status === '未开始'" type="primary">
                            未开始
                        </el-tag>
                        <el-tag round v-else-if="item.status === '已结束'" type="info">
                            已结束
                        </el-tag>
                    </div>
                </div>
                <div class="contest-detail" style="display: flex;align-items: center; margin: 10px 0px;">
                    <div class="detail-time" style="display: flex;margin-right: 10px;">
                        <div class="detail-icon">
                            <el-icon>
                                <Calendar />
                            </el-icon>
                        </div>
                        <div class="detail-content">
                            {{ item.startTime }} ~ {{ item.endTime }}
                        </div>
                    </div>
                    <div class="detail-number" style="display: flex;">
                        <div class="detail-icon">
                            <el-icon>
                                <UserFilled />
                            </el-icon>
                        </div>
                        <div class="detail-conten">
                            参赛人数：{{ item.participants }}
                        </div>
                    </div>
                </div>
                <div class="contest-rules" style="display: flex;">
                    <div class="rules-icon">
                        <el-icon>
                            <QuestionFilled />
                        </el-icon>
                    </div>
                    <div class="rules-detail">
                        {{ item.rule }}
                    </div>
                </div>
            </div>
            <div class="contest-right"  style="margin: 10px 0px;display: flex;justify-content: flex-end;">
                <el-button round style="width: 200px;" v-if="item.status === '进行中'" type="success">
                    进入比赛
                </el-button>
                <el-button round style="width: 200px;" v-else-if="item.status === '未开始'" type="primary">
                    报名参赛
                </el-button>
                <el-button round style="width: 200px;" v-else-if="item.status === '已结束'" type="info">
                    查看结果
                </el-button>
            </div>
        </el-card>
        <el-pagination style="margin-left: 25%;margin-top: 30px;" background layout="prev, pager, next" :total="1000" />
    </el-card>
</template>

<script setup lang="ts">
import { ref } from 'vue';
const StateDefault = ref('所有状态')
const RulesDefault = ref('所有规则')
const TimeDefaults = ref('时间（最新）')
const Stateoptions = [
    {
        value: 'Option1',
        label: '所有状态',
    },
    {
        value: 'Option2',
        label: '未开始',
    },
    {
        value: 'Option3',
        label: '进行中',
    },
    {
        value: 'Option4',
        label: '已结束',
    },
]
const RulesOptions = [
    {
        value: 'Option1',
        label: 'ACM/ICPC',
    },
    {
        value: 'Option2',
        label: 'OI',
    },
]
const TimesOptions = [
    {
        value: 'Option1',
        label: '时间（最新）',
    },
    {
        value: 'Option2',
        label: '时间（最早）',
    },
    {
        value: 'Option3',
        label: '参赛人数（多到少）',
    },
    {
        value: 'Option4',
        label: '参赛人数（少到多）',
    },
]
const contestList = [
    {
        id: "1",
        name: "2023年秋季招新编程大赛",
        status: "进行中",
        rule: "ACM/ICPC，共5道题目，限时4小时，每道题目有多个测试用例",
        startTime: "2023-10-15 14:00",
        endTime: "2023-10-15 18:00",
        participants: "128",
        buttonText: "进入比赛",
        difficulty: "中等"
    },
    {
        id: "2",
        name: "算法进阶训练赛",
        status: "未开始",
        rule: "ACM/ICPC，共6道题目，限时3小时，难度中等偏上",
        startTime: "2023-10-20 19:00",
        endTime: "2023-10-20 22:00",
        participants: "56",
        buttonText: "报名参赛",
        difficulty: "中等偏上"
    },
    {
        id: "3",
        name: "2023年夏季编程挑战赛",
        status: "已结束",
        rule: "ACM/ICPC，共8道题目，限时5小时，难度递增",
        startTime: "2023-07-10 10:00",
        endTime: "2023-07-10 15:00",
        participants: "210",
        buttonText: "查看结果",
        difficulty: "高"
    },
    {
        id: "4",
        name: "数据结构专题训练赛",
        status: "未开始",
        rule: "ACM/ICPC，共4道题目，限时3小时，专注于数据结构应用",
        startTime: "2023-11-05 14:00",
        endTime: "2023-11-05 17:00",
        participants: "42",
        buttonText: "报名参赛",
        difficulty: "中等"
    }
]

</script>

<style scoped lang="scss">
.right-contest {
    padding: 10px;

    .contest-menu {
        display: flex;
        justify-content: space-between;

        .menu-left {
            .el-select {
                width: 100px;
                margin-right: 10px;
            }
        }

        .menu-right {
            .el-select {
                width: 150px;
            }
        }
    }
}
</style>