<template>
    <div class="sjtp" click='myclc'>
        <div class="out-circle">
            <canvas id="myCan" width="600px" height="600px">
                
                <w-arrow @midPoint='midPoint'></w-arrow>
            </canvas>
            <div class="mid-circle">
                <dbArrow v-for='(item,index) in ballArr' :index='index' :key="item" :rotate='(index+1) * (360/ballArr.length)'></dbArrow>
                <div class="third-circle">
                    <div class="main-data">主数据系统</div>
                    <!-- <div style="width:10px;height:10px;background:red;position:absolute;left:300px;top:150px;"></div> -->
                    
                </div>

            </div>

            <sys-ball click='myclc' @ballPoint='ballPoint' v-for="(item,index) in ballArr" :key="item" :index='index' :rotate='index * (360/ballArr.length)' :radius='radiusArr[item%3]' :bgColor='bgColorArr[item%3]'></sys-ball>
        </div>

        <!-- <d-arrow ></d-arrow> -->
    </div>
</template>
<script>
import SysBall from './sysBall'
import arrow from './arrow'
import dbArrow from './dbArrow'
import dArrow from './dArrow'
import wArrow from './wArrow'
import drawArrow from '../utils/Func'
export default {
    data() {
        return {
            ballArr: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24],
            // ,25,26,27,28,29,30,31,32,33,34,35,36
            // ballArr:[1],
            bgColorArr: ['#f44236', '#a389d4', '#aaaeb3'],
            radiusArr: [20, 25, 30]
        }
    },
    components: {
        SysBall,
        arrow,
        dbArrow,
        dArrow,
        wArrow
    },
    methods: {
        midPoint(){
            drawArrow()
        },
        myclc() {
            alert('dddd')
        }
    },
    mounted() {
        var myCan = document.getElementById('myCan')
        var ctx = myCan.getContext('2d')
    }
}
</script>
<style scoped>
.sjtp {
    height: 1200px;
    background: #fff;
    position: relative;
    margin-top: 20px;
}

.out-circle {
    /* border: 1px solid #999; */
    position: absolute;
    width: 600px;
    height: 600px;
    border-radius: 50%;
    left: calc(50% - 300px);
    top: calc(50% - 300px);
}

.third-circle {
    position: absolute;
    width: 300px;
    height: 300px;
    border-radius: 50%;
    left: calc(50% - 150px);
    top: calc(50% - 150px);
    border: 1px solid #999;
}

.mid-circle {
    width: 420px;
    height: 420px;
    /* border: 1px solid #999; */
    position: absolute;
    border-radius: 50%;
    left: calc(50% - 210px);
    top: calc(50% - 210px);
}

.main-data {
    width: 140px;
    height: 140px;
    background: radial-gradient(at left bottom, #19d1b8, #1dc6da);
    border-radius: 50%;
    box-shadow: 0 10px 10px #aaa;
    position: absolute;
    left: calc(50% - 70px);
    top: calc(50% - 70px);
    line-height: 140px;
    color: #fff;
    text-align: center;
    font-size: 20px;
}

#myCan {
    position: absolute;
    left: calc(50% - 300px);
    top: calc(50% - 300px);
}
</style>
