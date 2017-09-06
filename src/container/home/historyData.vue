<template>
    <div class="content">
        <p class="title"> {{title}}</p>
        <div>
            <p class="ptitle">对标表数/总表数(张)</p>
            <p class="pcontent">{{mappingCodingCounts}}/{{tableCount}}</p>
        </div>
        <div>
            <p class="ptitle">总记录数(条)</p>
            <p class="pcontent">{{recordCount}}</p>
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
            title: '历史数据',
            series: [],
            xAxis: [],
            tableCount:0,
            recordCount:0,
            mappingCodingCounts:0
          
        }
    },
  
    mounted() {

        axios.post('main-data/getHistoryData')
            .then((err) => {
                this.tableCount=res.data.dataSet.tableCount
                this.recordCount=res.data.dataSet.recordCount
                // this.mappingCodingCounts= res.dataSet.mappingCodingCounts

              
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
