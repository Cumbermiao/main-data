<template>
  <div class="chart2">
    <div ref="chart" :style="{height: height + 'px'}"></div>
  </div>
</template>
<script>
import Vue from 'vue';
import echarts from 'echarts';
import 'echarts/map/js/china';
require('../extensions/graphx');

export default {
  props: {
    height: {
      default: 0,
      type: Number
    },
    options: {
      default: null,
      type: Object
    },
    notMerge: {
      type: Boolean,
      default: true
    }
  },
  data() {
    return {
      chartIns: null
    }
  },
  resize() {
    if (this.chartIns) {
      this.chartIns.resize();
    }
  },
  beforeDestroy () {
    window.removeEventListener('resize', this.resize)
  },
  mounted () {
    window.addEventListener('resize', this.resize)
    if (this.options) {
      this.chartIns = echarts.init(this.$refs.chart);
      this.chartIns.setOption(this.options, this.notMerge);
    }
  },
  watch: {
    options: {
      handler(nOpt) {
        if (!this.chartIns) {
          this.chartIns = echarts.init(this.$refs.chart);
        }
        this.chartIns.setOption(nOpt, this.notMerge)
      },
      deep: true
    }
  }
}
</script>
