<template>
    <div :style="`height:${height}px;width:${width}px;`">

    </div>
</template>
<script>
import echarts from 'echarts'

let chart = null;
export default {
    data() {
        return {
            // height: 100,
            // width: 300
        }
    },
    props: ['option','height','width'],
    mounted() {
        console.log(this.option)
        chart = echarts.init(this.$el);
        if (this.option) {
            chart.setOption(this.option);
        }
    },
    watch: {
        option(nOpt) {
            if (chart != null) {
                chart.setOption(nOpt, true);
            }
        }
    }
}
</script>
