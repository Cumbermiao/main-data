<template>
    <div class="sys-ball"  @click='sysHover($event)' :style="`top:${y}px;left:${x}px;width:${2*radius}px;height:${2*radius}px;background:${bgColor};transform:rotate(${rotate}deg);`">
        <!---->
        <div class="ptitle" :style="`transform:scale(${scale},${scale})`">本科生管理教务系统</div>
        <!-- <div class="arrow"><arrow :index='index'></arrow></div> -->
    </div>
</template>
<script>
import arrow from './arrow'
export default {
    data() {
        return {
            //rotate: 0,//角度
            //bgColor: 'red',//
            //radius: 25,//半径
            // scale:1
        }
    },
    components:{
        arrow
    },
    props:['rotate','radius','bgColor','index'],
    computed: {
        x() {

            return 300 - this.radius - 300 * Math.cos(this.rotate * Math.PI / 180)
        },
        y() {
            return 300 - this.radius - 300 * Math.sin(this.rotate * Math.PI / 180)
        },
        scale(){
            if(this.rotate>90&&this.rotate<=270){
                return -1
            }else{
                return 1
            }
        }
    },
    methods:{
        sysHover(e){
            alert('xxxxxx')
        },
        ballPoint(){
            var val ={
                top:this.y,
                left:this.x
            }
            this.$emit('ballPoint',val)
        }
    },
    mounted() {

        console.log('xxxxx')
        console.log(this.rotate)
        console.log(this.bgColor)
        console.log(this.radius)
    }
}
</script>
<style scoped>
.sys-ball {
    border-radius: 50%;
    position: absolute;
}
.sys-ball:hover{
    box-shadow: 0 0 20px gray;
    cursor: pointer;
    font-size: 18px;
}
.ptitle{
    width: 200px;
    height: 26px;
    position: absolute;
    left: -200px;
    top: calc(50% - 13px);
    text-align: center;
    overflow: hidden;
}

.arrow{
    position: absolute;
    right: -100px;
    top: calc(50% - 10px);
}
</style>
