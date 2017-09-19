<template>
  <div class="container">
    <Titles title="数据运行监控"></Titles>
    <div class="row">
      <div class="column">
        <div class="card data-health">
          <div class="card_head">
            <h3>数据健康度</h3>
            <span class="update_date">
              更新时间：2017.07.21
            </span>
          </div>
          <div class="card_body">
            <div class="data-health__score">
              <span class="num">93</span><sup>分</sup>
            </div>
            <chart2 :height="120" :options="healthOpt" />
          </div>
        </div>
        <div class="card biz-comp">
          <div class="card_head">
            <h3>业务系统集成</h3>
          </div>
          <div class="card_body">
            <ul>
              <li>
                <div>系统数量 (个)</div>
                <div class="num">22</div>
              </li>
              <li>
                <div>接口数量 (个)</div>
                <div class="num">545</div>
              </li>
              <li>
                <div>近一天数据吞吐量 (个)</div>
                <div class="num">23,456,112</div>
              </li>
            </ul>
          </div>
        </div>
        <div class="card code-standard">
          <div class="card_head">
            <h3>代码标准</h3>
          </div>
          <div class="card_body">
            <ul>
              <li>
                <div>对标表数 / 总表数 (张)</div>
                <div class="num">22</div>
              </li>
              <li>
                <div>总记录数 (条)</div>
                <div class="num">545</div>
              </li>
              <li>
                <div>总记录数日增量</div>
                <div>
                  <chart2 style="margin-top:-100px;" :height="200" :options="codeOpt" />
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div class="column">
        <div class="card data-extend">
          <div class="card_head">
            <h3>数据拓扑</h3>
          </div>
          <div class="card_body">
            <chart2 :height="720" :options="extendOpt" />
          </div>
        </div>
      </div>
      <div class="column">
        <div class="card main-data">
          <div class="card_head">
            <h3>主数据</h3>
          </div>
          <div class="card_body">
            <ul>
              <li>
                <div>有效表 / 总表数 (张)</div>
                <div class="num">100 / 500</div>
              </li>
              <li>
                <div>总记录数 (条)</div>
                <div class="num">582,345</div>
              </li>
              <li>
                <div>总记录数日增量</div>
                <div>
                  <chart2 :height="100" :options="mainOpt" />
                </div>
              </li>
            </ul>
          </div>
        </div>
        <div class="card qa">
          <div class="card_head">
            <h3>待处理问题</h3>
            <span class="update_date">
              截止: 2017.07.10 10:42
            </span>
          </div>
          <div class="card_body">
            <div class="text-center mt-30">
              <span><span class="rect_1 mr-10"></span>非常紧急</span>
              <span class="ml-20"><span class="rect_2 mr-10"></span>一般紧急</span>
            </div>
            <ul class="mt-25">
              <li>
                <div>
                  <div>元数据技术属性规范性检测</div>
                  <div>问题数 (个)</div>
                </div>
                <div class="num">2</div>
                <div><div class="arrow"></div></div>
              </li>
              <li>
                <div>
                  <div>元数据技术属性规范性检测</div>
                  <div>问题数 (个)</div>
                </div>
                <div class="num">2</div>
                <div><div class="arrow"></div></div>
              </li>
              <li>
                <div>
                  <div>元数据技术属性规范性检测</div>
                  <div>问题数 (个)</div>
                </div>
                <div class="num">13</div>
                <div><div class="arrow"></div></div>
              </li>
              <li>
                <div>
                  <div>元数据技术属性规范性检测</div>
                  <div>问题数 (个)</div>
                </div>
                <div class="num">2</div>
                <div><div class="arrow"></div></div>
              </li>
              <li>
                <div>
                  <div>元数据技术属性规范性检测</div>
                  <div>问题数 (个)</div>
                </div>
                <div class="num">2</div>
                <div><div class="arrow"></div></div>
              </li>
              <li>
                <div>
                  <div>元数据技术属性规范性检测</div>
                  <div>问题数 (个)</div>
                </div>
                <div class="num">2</div>
                <div><div class="arrow"></div></div>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div class="column">
        <div class="card history">
          <div class="card_head">
            <h3>历史数据</h3>
          </div>
          <div class="card_body">
            <ul>
              <li>
                <div>有效表 / 总表数 (张)</div>
                <div class="num">100 / 500</div>
              </li>
              <li>
                <div>总记录数 (条)</div>
                <div class="num">582,345</div>
              </li>
            </ul>
          </div>
        </div>
        <div class="card qa-commit">
          <div class="card_head">
            <h3>已处理问题</h3>
            <span class="update_date">
              截止: 2017.07.10 10:42
            </span>
          </div>
          <div class="card_body">
            <div class="qa-total">
              共计 <span class="num">238,41</span> 件
            </div>
            <div class="qa-chart">
              <chart2 :height="155" :options="qaOpt" />
            </div>
            <div class="qa-list">
              <div>
                <div>问题类型</div>
                <div>处理时间</div>
              </div>
              <div>
                <div>
                  <em>【字段类型(长度)不一致】</em>问题描述问题描述问题描述问题描述问题描述问题描述问题描述问题描述...
                </div>
                <div>
                  2017.06.23 00:07:32
                </div>
              </div>
              <div>
                <div>
                  <em>【字段类型(长度)不一致】</em>问题描述问题描述问题描述问题描述问题描述问题描述问题描述问题描述...
                </div>
                <div>
                  2017.06.23 00:07:32
                </div>
              </div>
              <div>
                <div>
                  <em>【字段类型(长度)不一致】</em>问题描述问题描述问题描述问题描述问题描述问题描述问题描述问题描述...
                </div>
                <div>
                  2017.06.23 00:07:32
                </div>
              </div>
              <div>
                <div>
                  <em>【字段类型(长度)不一致】</em>问题描述问题描述问题描述问题描述问题描述问题描述问题描述问题描述...
                </div>
                <div>
                  2017.06.23 00:07:32
                </div>
              </div>
              <div>
                <div>
                  <em>【字段类型(长度)不一致】</em>问题描述问题描述问题描述问题描述问题描述问题描述问题描述问题描述...
                </div>
                <div>
                  2017.06.23 00:07:32
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import Titles from '@/components/Titles';
import Chart2 from '@/components/Chart2';
export default {
  components: {
    Titles,
    Chart2
  },
  data() {
    return {
      healthOpt: {
        grid: {
          bottom: 45,
          top: 20,
          left: 10,
          right: 10
        },
        xAxis: {
            show: true,
            type: 'category',
            data: ['7月', '2日', '3日', '4日', '5日', '6日', '7日'],
            axisLine: {
              show: false
            },
            axisTick: {
              show: false
            },
            axisLabel: {
              color: 'white',
              margin: 30
            }
        },
        yAxis: {
            show: false,
            type: 'value'
        },
        series: [{
            type: 'line',
            smooth: true,
            hoverAnimation: false,
            symbol: 'circle',
            symbolSize: 10,
            itemStyle: {
              normal: {
                color: 'white'
              }
            },
            lineStyle: {
              normal: {
                width: 1,
                color: 'white'
              }
            },
            markPoint: {
              symbol: 'roundRect',
              symbolOffset: [0, '-60%'],
              symbolSize: 50,
              label: {
                normal: {
                  color: 'black',
                  formatter: '{bold|{c}}',
                  rich: {
                    bold: {
                      color: 'black',
                      align: 'center',
                      fontWeight: 'bold'
                    }
                  }
                }
              },
              itemStyle: {
                normal: {
                  color: 'white'
                }
              },
              data: [{
                name: '最小值',
                type: 'min'
              }]
            },
            data: [111,423, 130, 200, 1121, 89, 541]
        }]
      },
      codeOpt: {
        grid: {
          top:100,
          left: 0,
          right: 0
        },
        xAxis: {
            show: false,
            type: 'category',
            data: ['', '', '', '', '07.21', '', '', '', '', ''],
            axisLine: {
              show: false
            },
            axisTick: {
              show: false
            },
            splitLine: {
              show: true
            }
        },
        yAxis: {
            show: false,
            type: 'value'
        },
        series: [{
            type: 'line',
            showSymbol: false,
            hoverAnimation: false,
            lineStyle: {
              normal: {
                width: 3,
                color: {
                  type: 'linear',
                  x: 0,
                  y: 0,
                  x2: 1,
                  y2: 1,
                  colorStops: [{
                      offset: 0, color: '#1DC4E9' // 0% 处的颜色
                  }, {
                      offset: 1, color: '#1DE9B6' // 100% 处的颜色
                  }],
                  globalCoord: false // 缺省为 false
                }
              }
            },
            markPoint: {
              symbol: 'roundRect',
              symbolOffset: [0, '-60%'],
              symbolSize: 50,
              label: {
                normal: {
                  color: 'black',
                  formatter: '{b}\n{bold|{c}}',
                  rich: {
                    bold: {
                      color: 'black',
                      align: 'center',
                      fontWeight: 'bold'
                    }
                  }
                }
              },
              itemStyle: {
                normal: {
                  color: '#E6B03F'
                }
              },
              data: [{
                name: '07.21',
                type: 'max'
              }]
            },
            data: [11,423, 30, 200, 1121, 13, 541, 152, 10]
        }]
      },
      mainOpt: {
        grid: {
          top:0,
          left: 0,
          right: 0
        },
        xAxis: {
          show: false,
          type: 'category',
          data: ['', '', '', '', '', '', '', '', '', ''],
          axisLine: {
            show: false
          },
          axisTick: {
            show: false
          },
          splitLine: {
            show: true
          }
        },
        yAxis: {
            show: false,
            type: 'value'
        },
        series: [{
            type: 'line',
            showSymbol: false,
            hoverAnimation: false,
            lineStyle: {
              normal: {
                width: 3,
                color: {
                  type: 'linear',
                  x: 0,
                  y: 0,
                  x2: 1,
                  y2: 1,
                  colorStops: [{
                      offset: 0, color: '#1DC4E9' // 0% 处的颜色
                  }, {
                      offset: 1, color: '#1DE9B6' // 100% 处的颜色
                  }],
                  globalCoord: false // 缺省为 false
                }
              }
            },
            data: [111,423, 30, 200, 121, 13, 541, 152, 10]
        }]
      },
      qaOpt: {
        grid: {
          top:40,
          bottom: 20,
          left: 20,
          right: 20
        },
        xAxis: {
            show: true,
            type: 'category',
            data: ['7月', '', '', '', '2017年', '', '', '', '6月'],
            axisLine: {
              show: true,
              lineStyle: {
                color: 'rgba(234,234,234,0.23)'
              }
            },
            axisTick: {
              show: false
            }
        },
        yAxis: {
            show: false,
            type: 'value'
        },
        series: [{
            type: 'line',
            showSymbol: false,
            hoverAnimation: false,
            lineStyle: {
              normal: {
                width: 3,
                color: {
                  type: 'linear',
                  x: 0,
                  y: 0,
                  x2: 1,
                  y2: 1,
                  colorStops: [{
                      offset: 0, color: '#6E45E2' // 0% 处的颜色
                  }, {
                      offset: 1, color: '#88D3CE' // 100% 处的颜色
                  }],
                  globalCoord: false // 缺省为 false
                }
              }
            },
            areaStyle: {
              normal: {
                color: {
                  type: 'linear',
                  x: 0,
                  y: 1,
                  x2: 1,
                  y2: 0,
                  colorStops: [{
                    offset: 0, color: '#1a236b' // 0% 处的颜色
                  }, {
                    offset: 1, color: '#234271' // 100% 处的颜色
                  }],
                  globalCoord: false // 缺省为 false
                }
              }
            },
            markPoint: {
              symbol: 'roundRect',
              symbolOffset: [0, '-60%'],
              symbolSize: 50,
              label: {
                normal: {
                  color: 'black',
                  formatter: '{b}\n{bold|{c}}',
                  rich: {
                    bold: {
                      color: 'black',
                      align: 'center',
                      fontWeight: 'bold'
                    }
                  }
                }
              },
              itemStyle: {
                normal: {
                  color: '#E6B03F'
                }
              },
              data: [{
                name: '2017.04',
                type: 'max'
              }]
            },
            data: [110,150, 200, 300, 521, 813, 941, 1152, 1510]
        }]
      },
      extendOpt: {
        series: [{
          type: 'graphx',
          legend: [{
            data: ['center', 'other']
          }],
          data: [],
          links: [{
            source: 0,
            target: 1,
            label: {
              normal: {
                show: true,
                formatter: '10/20',
                fontSize: 12
              }
            }
          }, {
            source: 0,
            target: 2,
            label: {
              normal: {
                show: true,
                formatter: '30/20',
                fontSize: 12
              }
            }
          }, {
            source: 3,
            target: 8,
            label: {
              normal: {
                show: true,
                formatter: '30/20',
                fontSize: 12
              }
            },
            lineStyle: {
              normal: {
                width: 3,
                color: '#F4C22B'
              }
            }
          }],
          lineStyle: {
            normal: {
              opacity: 0.9,
              width: 1,
              curveness: 0.3
            }
          }
        }]
      },
      x: 360,
      y: 360,
      r: 100
    }
  },
  computed: {
    centerSys() {
      return {
        value: 143,
        symbolSize: 143,
        name: '主数据系统',
        category: 'center',
        x: 360,
        y: 360,
        itemStyle: {
          normal: {
            color: '#04A9F5'
          }
        },
        label: {
          normal: {
            fontSize: 20
          }
        }
      }
    },
    sys() {
      return ['一卡通', '离校系统', '组织管理系统', '统战管理系统', '校友管理系统', '外事管理系统', '邮件管理系统', '办公管理系统', '档案管理系统', '校医院管理系统', '统一身份论证管理系统', '信息门户', '支付通系统', '科技管理系统', '本科学工系统', '迎新系统', '财务系统'];
    }
  },
  watch: {
    sys(nSys) {
      this.getSystems();
    }
  },
  methods: {
    getSystems() {
      const count = this.sys.length;
      const r = this.r;
      const x = this.x;
      const y = this.y;
      const tick =  Math.floor(360 / count);
      const data = [];
      for (let i = 0; i < count; i++) {
        data.push({
          x: Math.round(x + Math.sin(tick * i) * r),
          y: Math.round(y - Math.cos(tick * i) * r),
          name: this.sys[i],
          value: 40,
          symbolSize: Math.random() * 50 + 40,
          category: 'other',
          itemStyle: {
            normal: {
              color: '#AAAEB3'
            }
          },
          label: {
            normal: {
              position: 'bottom'
            }
          }
        })
      }
      data.unshift(this.centerSys);
      this.extendOpt.series[0].data = data;
    }
  },
  created() {
    document.title = "数据运行监控"
    this.getSystems();
  }
}
</script>
<style lang="scss" scoped>
@import '../style/scss/dataanalysis';
</style>
