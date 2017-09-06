<template>
    <div class="content">
        <p class="title"> {{title}}</p>
        <div>
            <p class="ptitle">系统数量(个)</p>
            <p class="pcontent">{{totalSysCount}}</p>
        </div>
        <div>
            <p class="ptitle">接口数量(个)</p>
            <p class="pcontent">{{totalJkCount}}</p>
        </div>
        <div>
            <p class="ptitle">近一天吞吐量(条)</p>
            <p class="pcontent">{{totalSjCount}}</p>
        </div>
    </div>
</template>
<script>
import axios from '../../utils/axios'
export default {
    data() {
        return {
            title: '业务系统集成',
            totalJkCount: 0,
            totalSysCount: 0,
            totalSjCount: 0
        }
    },
    mounted() {
        axios.post('main-data/getbusSysInfoYsj')
            .then((res) => {
                this.totalJkCount = res.data.dataSet.totalJkCount
                this.totalSysCount = res.data.dataSet.totalSysCount
                this.totalSjCount =res.data.dataSet.totalSjCount
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
