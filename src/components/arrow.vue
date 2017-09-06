<template>
    <canvas :id="`myCan${index}`" :width="width+'px'" :height="height+'px'">

    </canvas>
</template>
<script>
import drawArrow from '../utils/Func'
export default {
    data() {
        return {
            // width: 70,
            height: 10,

        }
    },
    props:['index','fromX','toX','width'],
    mounted() {
        var myCanvas = document.getElementById(`myCan${this.index}`)

        var ctx = myCanvas.getContext('2d')

        drawArrow(ctx,this.fromX, 5, this.toX, 5,30, 20, 2, '#aaaeb3');
    }
}
</script>
<style scoped>

</style>
