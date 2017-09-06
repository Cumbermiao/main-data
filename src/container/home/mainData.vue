<template>
    <div class="content">
        <p class="title"> {{title}}</p>
        <div>
            <p class="ptitle">有效表/总表数(张)</p>
            <p class="pcontent">{{validTables}}/{{totalTables}}</p>
        </div>
        <div>
            <p class="ptitle">总记录数(条)</p>
            <p class="pcontent">{{totalRecords}}</p>
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
            title: '主数据',
            series: [],
            xAxis: [],
            totalTablesCount:0,
            totalRecordsCounts:0,
            mappingCodingCounts:0
           
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

        axios.post('main-data/getZsjOverView')
            .then((err) => {
                this.totalTables=res.data.dataSet.totalTables
                this.totalRecords=res.data.dataSet.totalRecords
                this.validTables= res.data.dataSet.validTables
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
