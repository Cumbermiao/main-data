<template>
    <div class="interface" :style="`transform:rotate(90deg);top:${top}px;left:${left}px;`">
        221/332
        <!-- <div class="left-arrow" :style="`right:60px;transform:rotate(${arrowRotate}deg);transform-origin:right center`"> -->
        <!-- transform:rotate(60deg);transform-origin:right center -->
        <!-- <arrow :fromX='width' :toX='0' :width='width' :index='200'></arrow> -->
        <!-- </div> -->
        <!-- <div class="right-arrow" :style="`left:60px; transform:rotate(-${arrowRotate}deg);transform-origin:left center`"> -->
        <!-- transform:rotate(-60deg);transform-origin:left center -->
        <!-- <arrow :fromX='0' :toX='width' :width='width' :index='201'></arrow> -->
        <!-- </div> -->
    </div>
</template>
<script>
import arrow from './arrow'
export default {
    data() {
        return {
            rotate1: 170,
            rotate2: 190,
            radius: 300,//out-circle的半径
            rotate: 60
        }
    },
    components: {
        arrow
    },
    computed: {
        arrowRotate() {
            return (180 - this.rotate) / 2
        },
        top() {
            return this.y - 11
        },
        left() {
            return this.x - 35
        },
        x() {
            return 150 - 150 * Math.cos(((this.rotate2 - this.rotate1) / 2 + this.rotate1) * Math.PI / 180)
        },
        y() {
            return 150 - 150 * Math.sin(((this.rotate2 - this.rotate1) / 2 + this.rotate1) * Math.PI / 180)
        },
        x2() {
            return 300 - 30 - 300 * Math.cos(this.rotate2 * Math.PI / 180)
        },
        y2() {
            return 300 - 30 - 300 * Math.sin(this.rotate2 * Math.PI / 180)
        },
        width() {
            var x = Math.pow((this.x2 - this.x - 150), 2)

            var y = Math.pow((this.y2 - this.y - 150), 2)

            return Math.sqrt(x + y)
        }
    },
    methods: {
        midPoint() {
            var val = { top: this.top, left: this.left }
            this.$emit('midPoint', )
        }
    },
    updated() {
        this.midPoint();
    },
    mounted() {
        this.midPoint();
        console.log('this.width')
        console.log(this.x)
        console.log(this.y)
        console.log(this.x2)
        console.log(this.y2)
        console.log(this.width)
        // console.log(Math.pow((this.x2 - this.x), 2))
        // console.log(Math.pow((this.y2 - this.y), 2))
    }

    // mounted() {
    //     var can = document.getElementById('can')
    //     var oCan = can.getContext('2d');

    //     oCan.moveTo(250, 250);
    //     // 创建开始点 
    //     oCan.quadraticCurveTo(100, 300, 50, 150);    // 画出的曲线大小和控制点有直接关系,可以调整控制点的坐标来进行查看(曲线就是两个切线之间的弧)        
    //     // oCan.arc( 250 , 250 , 2 , 0 , 2 * Math.PI , true ); //    辅助 
    //     // oCan.arc(100, 300, 2, 0, 2 * Math.PI, true); //    辅助 
    //     // oCan.arc(50, 150, 2, 0, 2 * Math.PI, true);     //    辅助 
    //     // oCan.closePath();
    //     oCan.stroke();
    // }
}
</script>
<style scoped>
.interface {
    width: 60px;
    height: 22px;
    position: absolute;
}

.left-arrow,
.right-arrow {
    position: absolute;
    top: 0;
}
</style>
