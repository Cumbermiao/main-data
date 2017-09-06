<template>
    <div :style="`height:${height}px;width:${width}px;`">

    </div>
</template>
<script>
import echarts from 'echarts'

let chart = null;
export default {
    data() {
        return {
            height: 200,
            width: 400
        }
    },
    props:['xAxis','series'],
    mounted() {

        chart = echarts.init(this.$el);
        var option = {
            xAxis: {
                // data: ['7月', '2日', '3日', '4日', '5日', '6日', '7日',],
                data:this.xAxis,
                boundaryGap:false,
                //坐标轴轴线
                axisLine: {
                    lineStyle: {
                        color: "#fff",
                        width:0.2
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
                        color: '#b0ecf0'
                    }
                },
            },
            yAxis: {
                show: false
            },
            tooltip: {
                formatter: '{c}'
            },
            series: [{
                type: 'line',
                symbolSize:10,
                smooth: true,
                // data: [220, 182, 191, 234, 290, 330, 310]
                data:this.series
            }],
            tooltip:{
                trigger: 'axis',
                formatter:'{c}'
            },
            color: '#fff'
        }
        chart.setOption(option);

    }
}
</script>
