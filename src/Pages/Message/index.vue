<template>
    <div class="right-header">首页</div>
    <div class="right-news">
        <el-card class="large-card">
            <template #header>
                <div class="news-header">
                    <div class="header-first">公告 & 新闻</div>
                    <div>查看全部</div>
                </div>
            </template>
            <div class="news-detail">
                <div class="detail-title">2023年秋季编程大赛即将开始</div>
                <div class="detail-main">比赛将于10月15日举行，欢迎所有学生参加！</div>
                <div class="detail-time">2023-09-30</div>
            </div>
            <div class="news-detail">
                <div class="detail-title">2023年秋季编程大赛即将开始</div>
                <div class="detail-main">比赛将于10月15日举行，欢迎所有学生参加！</div>
                <div class="detail-time">2023-09-30</div>
            </div>
            <div class="news-detail">
                <div class="detail-title">2023年秋季编程大赛即将开始</div>
                <div class="detail-main">比赛将于10月15日举行，欢迎所有学生参加！</div>
                <div class="detail-time">2023-09-30</div>
            </div>
        </el-card>
        <el-card class="small-card">
            <template #header>
                <div class="smallcard-title">每日一题</div>
            </template>
            <div class="title-name">两数之和</div>
            <div class="title-detail">给定一个 n 个元素有序的（升序）整型数组 nums 和一个目标值 target ，写一个函数搜索 nums 中的
                target，如果目标值存在返回下标，否则返回
                -1。</div>
            <div class="title-tag">
                <el-tag style="margin-right: 10px;margin-bottom: 20px;" type="success">简单</el-tag>
                <el-tag style="margin-right: 10px;margin-bottom: 20px;" type="primary">数组</el-tag>
            </div>
            <div class="title-button">
                <el-button style="width: 100%;" type="primary">开始挑战</el-button>
            </div>
        </el-card>
    </div>
    <div class="next-content">
        <el-card class="content-smallcard">
            <template #header>
                <div class="small-title">
                    <div style="font-weight: bold;">用户排名</div>
                    <div style="color: rgb(59, 130, 246);"
                        onmouseover="this.style.borderBottom='1px solid rgb(59, 130, 246)'"
                        onmouseout="this.style.borderBottom='1px solid transparent'">
                        查看全部
                    </div>
                </div>
            </template>
            <div class="user-rank">
                <div class="user-left">
                    <div class="user-tag">1</div>
                    <el-avatar :src="img"></el-avatar>
                    <div class="user-content">
                        <div class="user-name">王大牛</div>
                        <div class="user-detail">已解决 256 题</div>
                    </div>
                </div>
                <div class="user-right">
                    98.5%
                </div>
            </div>
            <div class="user-rank">
                <div class="user-left">
                    <div class="user-tag">1</div>
                    <el-avatar :src="img"></el-avatar>
                    <div class="user-content">
                        <div class="user-name">王大牛</div>
                        <div class="user-detail">已解决 256 题</div>
                    </div>
                </div>
                <div class="user-right">
                    98.5%
                </div>
            </div>
            <div class="user-rank">
                <div class="user-left">
                    <div class="user-tag">1</div>
                    <el-avatar :src="img"></el-avatar>
                    <div class="user-content">
                        <div class="user-name">王大牛</div>
                        <div class="user-detail">已解决 256 题</div>
                    </div>
                </div>
                <div class="user-right">
                    98.5%
                </div>
            </div>
            <div class="user-rank">
                <div class="user-left">
                    <div class="user-tag">1</div>
                    <el-avatar :src="img"></el-avatar>
                    <div class="user-content">
                        <div class="user-name">王大牛</div>
                        <div class="user-detail">已解决 256 题</div>
                    </div>
                </div>
                <div class="user-right">
                    98.5%
                </div>
            </div>
            <div class="user-rank">
                <div class="user-left">
                    <div class="user-tag">1</div>
                    <el-avatar :src="img"></el-avatar>
                    <div class="user-content">
                        <div class="user-name">王大牛</div>
                        <div class="user-detail">已解决 256 题</div>
                    </div>
                </div>
                <div class="user-right">
                    98.5%
                </div>
            </div>
        </el-card>

        <!-- 中间右侧的大卡片 -->
        <el-card class="content-largecard">
            <template #header>
                <div style="display: flex;justify-content: space-between;">
                    <div style="font-weight: bold;">推荐题单</div>
                    <div style="color: rgb(59, 130, 246);"
                        onmouseover="this.style.borderBottom='1px solid rgb(59, 130, 246)'"
                        onmouseout="this.style.borderBottom='1px solid transparent'">查看全部</div>
                </div>
            </template>
            <div class="large-content">
                <el-card class="test-paper" shadow="hover">
                    <div class="first-row">
                        <div>算法入门必刷课</div>
                        <div>官方题单</div>
                    </div>
                    <div class="second-row">
                        <div>50题 难度：简单-中等</div>
                        <div>已完成：0/50</div>
                    </div>
                    <div class="third-row">
                        <el-tag type="primary">数组</el-tag>
                        <el-tag type="success" style="margin: 0px 10px;">链表</el-tag>
                        <el-tag type="danger">排序</el-tag>
                    </div>
                </el-card>
                <el-card class="test-paper" shadow="hover">
                    <div class="first-row">
                        <div>动态规划</div>
                        <div>官方题单</div>
                    </div>
                    <div class="second-row">
                        <div>50题 难度：中等-困难</div>
                        <div>已完成：0/30</div>
                    </div>
                    <div class="third-row">
                        <el-tag type="primary">DP</el-tag>
                        <el-tag type="success" style="margin: 0px 10px;">算法</el-tag>
                    </div>
                </el-card>
                <el-card class="test-paper" shadow="hover">
                    <div class="first-row">
                        <div>每日一题精选</div>
                        <div>官方题单</div>
                    </div>
                    <div class="second-row">
                        <div>50题 难度：中等-困难</div>
                        <div>已完成：0/30</div>
                    </div>
                    <div class="third-row">
                        <el-tag type="primary">数组</el-tag>
                        <el-tag type="danger" style="margin: 0px 10px;">字符串</el-tag>
                    </div>
                </el-card>
                <el-card class="test-paper" shadow="hover">
                    <div class="first-row">
                        <div>图论算法集锦</div>
                        <div>官方题单</div>
                    </div>
                    <div class="second-row">
                        <div>50题 难度：中等-困难</div>
                        <div>已完成：0/30</div>
                    </div>
                    <div class="third-row">
                        <el-tag type="primary">图论</el-tag>
                        <el-tag type="success" style="margin: 0px 10px;">BFS/DFS</el-tag>
                    </div>
                </el-card>
            </div>
        </el-card>
    </div>
    <div class="right-bottom">
        <el-card class="bottom-content">
            <template #header>
                <div style="display: flex;justify-content: space-between;">
                    <div style="font-weight: bold;">最新题目</div>
                    <div style="color: rgb(59, 130, 246);"
                        onmouseover="this.style.borderBottom='1px solid rgb(59, 130, 246)'"
                        onmouseout="this.style.borderBottom='1px solid transparent'">查看全部</div>
                </div>
            </template>
            <el-table :data="topicList" style="width: 100%;margin-bottom: 20px;">
                <el-table-column prop="ID" label="ID" width="180" />
                <el-table-column prop="name" label="题目" width="180" />
                <el-table-column prop="difficulty" label="难度" width="180" />
                <el-table-column prop="tag" label="标签" />
                <el-table-column prop="passRate" label="通过率" />
            </el-table>
            <el-pagination style="margin-left:25%;" background layout="prev, pager, next" :total="1000" />
        </el-card>
    </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import img from '../../assets/self-img.png'
const topicList = ref([
    {
        ID: '1001',
        name: '两数之和',
        difficulty: '简单',
        tag: ['数组', '哈希表'],
        passRate: '75.2%'
    },
    {
        ID: '1002',
        name: '二分查找',
        difficulty: '中等',
        tag: ['数组', '二分法'],
        passRate: '65.8%'
    },
    {
        ID: '1003',
        name: '最长回文子串',
        difficulty: '中等',
        tag: ['字符串', '动态规划'],
        passRate: '58.3%'
    },
    {
        ID: '1004',
        name: '合并K个排序链表',
        difficulty: '困难',
        tag: ['链表', '堆'],
        passRate: '42.1%'
    },
    {
        ID: '1005',
        name: 'LRU缓存机制',
        difficulty: '中等',
        tag: ['设计', '哈希表'],
        passRate: '51.7%'
    }
])

</script>

<style scoped lang="scss">
.right-header {
    height: 32px;
    font-size: 24px;
    font-weight: bold;
    margin-bottom: 10px;
}

.right-news {
    width: 100%;
    display: flex;

    .large-card {
        flex: 70%;
        margin-right: 10px;
        border-radius: 10px;

        .news-header {
            display: flex;
            justify-content: space-between;

            .header-first {
                font-weight: bold;
                font-size: 20px;
            }
        }

        .news-detail {
            border-left: 4px rgb(59, 130, 246) solid;
            margin-top: 20px;

            .detail-title {
                font-size: 16px;
                font-weight: 600;
                margin-bottom: 5px;
                margin-left: 10px;
            }

            .detail-main {
                margin-bottom: 5px;
                margin-left: 10px;
            }

            .detail-time {
                margin-left: 10px;
            }
        }
    }

    .small-card {
        flex: 30%;

        .smallcard-title {
            font-weight: bold;
        }

        .title-name {
            color: rgb(59, 130, 246);
            font-size: 16px;
            margin-bottom: 12px;
        }

        .title-detail {
            font-size: 14px;
            color: rgb(107, 114, 128);
            margin-bottom: 12px;
        }

    }
}

.next-content {
    margin-top: 20px;
    display: flex;

    .content-smallcard {
        margin-right: 20px;
        flex: 30%;
        border-radius: 10px;
        padding: 10px;

        .small-title {
            display: flex;
            justify-content: space-between;
        }

        .user-rank {
            margin-top: 10px;
            width: 100%;
            display: flex;
            justify-content: space-between;

            .user-left {
                display: flex;
                justify-items: center;

                .user-tag {
                    background-color: skyblue;
                    width: 30px;
                    height: 30px;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    border-radius: 30px;
                    margin-right: 10px;
                    margin-top: 5px;
                }

                .user-content {
                    margin-left: 10px;
                }
            }

            .user-right {
                color: rgb(59, 130, 246);
            }
        }
    }

    .content-largecard {
        flex: 70%;
        border-radius: 10px;
        padding: 10px;

        // display: flex;
        .large-content {
            display: grid;
            grid-template-columns: repeat(2, 1fr);
            gap: 16px;

            .test-paper {

                .first-row {
                    display: flex;
                    justify-content: space-between;
                }

                .second-row {
                    display: flex;
                    justify-content: space-between;
                    margin: 10px 0px;
                }
            }
        }

    }
}

.right-bottom {
    .bottom-content {
        margin: 20px 0px;
        border-radius: 10px;

    }
}
</style>