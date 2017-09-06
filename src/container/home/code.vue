<template>
    <div class="content">
        <p class="title"> {{title}}</p>
        <div>
            <p class="ptitle">对标表数/总表数(张)</p>
            <p class="pcontent">{{mappingCodingCounts}}/{{totalTablesCount}}</p>
        </div>
        <div>
            <p class="ptitle">总记录数(条)</p>
            <p class="pcontent">{{totalRecordsCounts}}</p>
        </div>
        <div>
            <p class="ptitle">总记录数日增量</p>
            <chart :width='width' :height='height' :option='option'></chart>

        </div>
    </div>
</template>
<script>

import chart from '../../components/chart'
import axios from '../../utils/axios'
export default {
    props: ['isChart'],
    components: {
        chart
    },
    data() {
        return {
            height: 100,
            width: 300,
            title: '代码标准',
            series: [],
            xAxis: [],
            totalTablesCount:0,
            totalRecordsCounts:0,
            mappingCodingCounts:0
            // option: {
            //     xAxis: {
            //         data: ['7月', '2日', '3日', '4日', '5日', '6日', '7日',],
            //         // show: false,
            //         boundaryGap: false,
            //         //坐标轴轴线
            //         axisLine: {
            //             lineStyle: {
            //                 color: "#fff",
            //                 width: 0.2
            //             },
            //             show: false
            //         },
            //         //坐标刻度
            //         axisTick: {
            //             show: false
            //         },
            //         //分割线
            //         splitLine: {
            //             show: true,
            //             lineStyle: {
            //                 color: '#c9c9c9'
            //             }
            //         },
            //     },
            //     yAxis: {
            //         show: false
            //     },
            //     tooltip: {
            //         formatter: '{c}',
            //         trigger: 'axis'
            //     },
            //     series: [{
            //         type: 'line',
            //         symbolSize: 3,
            //         smooth: false,
            //         data: [220, 182, 191, 234, 290, 330, 310],
            //         lineStyle: {
            //             noraml: {
            //                 width: 3
            //             }
            //         },
            //         hoverAnimation: true
            //     }],
            //     color: ['#19d1b8']
            // }
        }
    },
    computed:{
        option(){
            return{
                xAxis: {
                    data:this.xAxis,
                    // show: false,
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
                    //分割线
                    splitLine: {
                        show: true,
                        lineStyle: {
                            color: '#c9c9c9'
                        }
                    },
                },
                yAxis: {
                    show: false
                },
                tooltip: {
                    formatter: '{c}',
                    trigger: 'axis'
                },
                series: [{
                    type: 'line',
                    symbolSize: 3,
                    smooth: false,
                    data: this.series,
                    lineStyle: {
                        noraml: {
                            width: 3
                        }
                    },
                    hoverAnimation: true
                }],
                color: ['#19d1b8']
            }
                    
        }
    },
    mounted() {

        axios.post('main-data/getCodingStandards')
            .then((err) => {
                this.totalTablesCount=res.data.dataSet.totalTablesCount
                this.totalRecordsCounts=res.data.dataSet.totalRecordsCounts
                this.mappingCodingCounts= res.data.dataSet.mappingCodingCounts
                var data = res.data.dataSet.totalRecordsIncrement
                // var data = [{ '2017-1': 0 }, { '2017-1': 0 }, { '2017-1': 0 }]
                var that = this
                data.forEach((item) => {
                    for (var i in item) {
                        that.xAxis.push(item.i)
                        that.series.push(item.item[i])
                    }

                })
                console.log(this.xAxis)
                console.log(this.series)
            })
            .catch((err) => {

                // alert(err)
            })
    }
}
</script>
<style scoped>
.content {
    color: #555;
    width: 400px;
    height: 350px;
    background: #fff;
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
}

.ptitle {
    color: #999;
    font-size: 14px;
}

.pcontent {
    font-size: 22px;
    font-weight: 500;
    text-align: right;
}

.content>div {
    padding: 8px 20px;
    border-bottom: 1px solid #c9c9c9;
    height: 80px;
    box-sizing: border-box;
}

.content>div:last-child {
    border: none;
}
</style>
