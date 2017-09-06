<template>
    <div class="content">
        <p class="title">
            {{title}}
            <span>更新时间：{{updateTime}}</span>
        </p>
        <p class="point">
            <span>{{point}}</span> 分</p>
        <chart :series='series' :xAxis='xAxis'></chart>
    </div>
</template>
<script>
import chart from '../../components/healthChart'
import arrow from '../../utils/Func'
import axios from '../../utils/axios'
export default {
    data() {
        return {
            title: '数据健康度',
            updateTime: '2017.07.10 19:21',
            point: 93,
            xAxis: [],//横坐标
            series: []//数据
        }
    },
    components: {
        chart
    },
    mounted() {
        axios.post('main-data/caltDataHealth')
            .then((res) => {
                this.point = res.dataSet.score
                this.updateTime = res.dataSet.date
            })
            .catch((err) => {
                // alert(err)
            })

        axios.post('main-data/dataHealthTrend')
            .then((res) => {
                var data = res.data.dataSet
                var that = this
                data.forEach((item)=>{
                    that.xAxis.push(item.DAY)
                    that.series.push(item.ZFS)
                })

            })
            .catch((err) => {
                // alert(err)
            })
    }
}
</script>
<style scoped>
.content {
    color: #b0ecf0;
    display: inline-block;
    width: 400px;
    height: 350px;
    background: radial-gradient(at left bottom, #19d1b8, #1dc6da);
    box-sizing: border-box;
}

.title>span {
    float: right;
    font-size: 14px;
}

.point {
    text-align: center;
}

.point span {
    font-size: 60px;
    color: #fff;
    font-weight: 100;
    vertical-align: middle;
}
</style>
