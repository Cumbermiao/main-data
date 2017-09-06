<template>
    <div class="interface" :style="`transform:rotate(${rotate}deg);top:${y}px;left:${x}px`">
        <div :style="`transform:scale(${scale},${scale})`">{{toSys}}/{{toMain}}</div>
        <div class="left-arrow" :style="`right:${lWidth+5}px`">
            <arrow :fromX='40' :toX='0' :width='40' :index='index'></arrow>
        </div>
        <div class="right-arrow" :style="`left:${rWidth+5}px`">
            <arrow :fromX='0' :toX='100' :width='100' :index='100+index'></arrow>
        </div>
    </div>
</template>
<script>
import arrow from './arrow'
export default {
    data() {
        return {
            toSys: 11,
            toMain: 25,
            lWidth:40,
            rWidth:40
        }
    },
    props:['rotate','index'],
    components: {
        arrow
    },
    computed:{
       x() {

            return 211 - 30 - 210 * Math.cos(this.rotate * Math.PI / 180)
        },
        y() {
            return 211 -10 - 210 * Math.sin(this.rotate * Math.PI / 180)
        },
        scale(){
            if(this.rotate>90&&this.rotate<=270){
                return -1
            }else{
                return 1
            }
        }
    }
}
</script>
<style scoped>
.interface {
    color: #333;
    position: absolute;
    width: 50px;
    /* box-sizing: border-box; */

    height: 22px;
    /* left: -30px; */
    /* top: calc(50% - 11px); */
}
.left-arrow,.right-arrow{
    position: absolute;
    top: 0;
}
/* .left-arrow{
    left: -80px;
}
.right-arrow{
    right: -80px;
} */
</style>
