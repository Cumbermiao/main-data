<template>
    <div id="solved">
        <p class="title"> {{title}}
            <span>截至: 2017.07.10 10:12</span>
        </p>
        <div class="list">
            <section>
                <span class="count"> 共计
                    <span>238,341</span> 件</span>
                <chart :width='width' :height='height' :option='option'></chart>
            </section>
            <section>
                <span>问题类型</span>
                <span class="date">处理时间</span>
                <ul>
                    <li v-for="item in list" :key="item">
                        <p class="date">2017.06.23 00:07:32</p>
                        <p class="desc">
                            <span class="red">【技术属性缺失】 </span>数据库中【表名(中文名)】.【CZLX(操作类型)】 技术属性缺失技术属性缺失技术属性缺失</p>
                    </li>
                </ul>
            </section>
        </div>
    </div>
</template>
<script>
import chart from '../../components/chart'
import axios from '../../utils/axios'
export default {
    data() {
        return {
            title: '已处理问题',
            height: 200,
            width: 400,
            list:[1,1,1,1,1],
            option: {
                xAxis: {
                    data: ['2017-7月', '2日', '3日', '4日', '5日', '6日', '7日',],
                    boundaryGap: false,
                    //坐标轴轴线
                    axisLine: {
                        lineStyle: {
                            color: "#fff",
                            width: 0.2
                        },
                        show: false
                    },
                    //坐标刻度
                    axisTick: {
                        show: false
                    },
                },
                yAxis: {
                    show: false
                },
                tooltip: {
                    formatter: '{b}:<br/>{c}',
                    backgroundColor: '#a389d4',
                    trigger: 'axis'
                },
                series: [{
                    type: 'line',
                    symbol: 'circle',
                    symbolSize: 5,
                    data: [220, 182, 191, 234, 290, 330, 310],
                    itemStyle: {

                    },
                    lineStyle: {
                        normal: {
                            color: {
                                type: 'linear',
                                x: 0,
                                y: 0,
                                x2: 0,
                                y2: 1,
                                colorStops: [{
                                    offset: 0, color: '#88d1ce' // 0% 处的颜色
                                }, {
                                    offset: 1, color: '#6e48e1' // 100% 处的颜色
                                }],
                                globalCoord: false,// 缺省为 false

                            }
                        }
                    },
                    areaStyle: {
                        normal: {
                            color: {
                                type: 'linear',
                                x: 0,
                                y: 0,
                                x2: 0,
                                y2: 1,
                                colorStops: [{
                                    offset: 0, color: '#88d1ce' // 0% 处的颜色
                                }, {
                                    offset: 1, color: '#6e48e1',// 100% 处的颜色
                                }],
                                globalCoord: false // 缺省为 false
                            }
                        }
                    }
                }],
                color: '#fff'
            }
        }
    },
    components: {
        chart
    },
    mounted(){
        axios.post('main-data/queryAlreadyHandleList')
        .then((res)=>{
            this.list = res.data.dataSet
        })
    }
}
</script>
<style scoped>
.title {
    color: #555;
}

.title span {
    float: right;
    color: #999;
    font-size: 14px;
}

.list {
    display: flex;
    justify-content: space-between;
}

section {
    padding: 0 20px;
}

.count span {
    font-size: 20px;
}

section:last-child {
    margin-left: 20px;
    flex-grow: 1;
}

.date {
    float: right;
    color: #999;
    width: 160px;
}

.desc {
    width: 600px;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
}
.desc span{
    color: #f44236;
}
section>ul{
    margin-top: 20px;
    border-top: 1px solid #c9c9c9;
    padding:  20px 0;
}
section>ul>li{
    height: 30px;
    line-height: 30px;
}
</style>
