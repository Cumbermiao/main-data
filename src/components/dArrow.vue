<template>
    <div>
        <div class="interface">toSys1/toSys2</div>
        <div class="left-arrow" :style="`right:45px`">
            <arrow :fromX='width' :toX='0' :width='width' :index='200'></arrow>
        </div>
        <div class="right-arrow" :style="`left:45px`">
            <arrow :fromX='0' :toX='width' :width='width' :index='201'></arrow>
        </div>
    </div>
</template>
<script>
import arrow from './arrow'
export default {
    data() {
        return {
            rotate1: 150,
            rotate2: 210,
            radius: 300//out-circle的半径
        }
    },
    components:{
        arrow
    },
    computed: {
        x() {
            return 150 - 150 * Math.cos((this.rotate2 - this.rotate1) * Math.PI / 180)
        },
        y() {
            return 150 - 150 * Math.sin((this.rotate2 - this.rotate1) * Math.PI / 180)
        },
        x2() {
            return 300  - 30- 300 * Math.cos(this.rotate2 * Math.PI / 180)
        },
        y2(){
            return 300  -30- 300 * Math.sin(this.rotate2* Math.PI / 180)
        },
        width() {
            var x = Math.pow(this.x2-this.x,2)
            var y = Math.pow(this.y2-this.y,2)
            return Math.sqrt(x+y)
        }
    }

}