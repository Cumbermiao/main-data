<template>
    <div class="content">
        <p class="title"> {{title}}
            <span>截至: {{date}}</span>
        </p>
        <p class="status">
            <span class="ptitle">非常紧急</span>
            <span class="mtitle">一般紧急</span>
        </p>
        <div v-for="item in count" :key="item" class="detail">
            <span class="ptitle">集成接口运行情况{{item.MC}}</span>
            <span>问题数(个)</span>
            <span class="count"><span>13{{item.COUNT}} </span> &#x3000; > </span>            
        </div>
        
    </div>
</template>
<script>
import axios from '../../utils/axios'
export default {
    data() {
        return {
            title: '待处理问题',
            date:'',
            count:[1,1,1,1,1,1]
        }
    },
    mounted(){
        axios.post('main-data/homePageWaitHandleProblemCount')
        .then((res)=>{
            // this.date = res.data.dataSet.date
            // this.count = res.data.dataSet.list
        })
    }
}
</script>
<style scoped>
.content{
    color: #555;
}
.title {
    color: #555;
}

.title span {
    float: right;
    color: #c9c9c9;
    font-size: 14px;
}
.status{
    text-align: center;
    height: 90px;
    line-height: 90px;
}
.ptitle,.mtitle{
    position: relative;
    margin: 0 40px ;
}
.ptitle:before{
    content:'';
    width: 8px;
    height: 8px;
    background-color: #f44236;
    position: absolute;
    left: -20px;
    top:  calc(50% - 4px);
    border-radius:50%;
}
.mtitle::before{
    content:'';
    width: 8px;
    height: 8px;
    position: absolute;
    left: -20px;
    top:  calc(50% - 4px);
    border-radius:50%;
    background: #f4c638
}
.detail{
    padding: 0 20px;
    display: flex;
    justify-content: space-between;
    height: 90px;
    line-height: 90px;
    border-top: 1px solid #c9c9c9;
}
.detail span:nth-of-type(2){
    font-size: 14px;
    color: #999;
}
.count span{
    font-size: 22px;
}
</style>
