<template>
    <div id="home">
        <section class="sec1">
            <data-health></data-health>
            <busi-sys></busi-sys>
            <v-code :isChart='isChart'></v-code>
        </section>

        <section class="sec2">
            <div class="unsolve">
                <unsolve></unsolve>
            </div>
            <div>
                <v-code :isChart='isChart'></v-code>
                <v-code style="margin-top:20px;" :isChart='isChart'></v-code>
            </div>
        </section>

        <section style="margin-top:20px;background:#fff;">
            <solved></solved>
        </section>

        <section>
            <!-- <sjtp></sjtp> -->
        </section>
    </div>
</template>
<script>
import DataHealth from './dataHealth.vue'
import BusiSys from './busiSys'
import Code from './code'
import Unsolve from './unSolve'
import solved from './solved'
// import sjtp from '../components/sjtp'
export default {
    components: {
        DataHealth,
        BusiSys,
        vCode: Code,
        Unsolve,
        solved,
        // sjtp
    },
    data() {
        return {
            isChart: true
        }
    }
}
</script>
<style scoped>
#home {
    margin-top: 20px;

}

.sec1,.sec2 {
    width: 100%;
    margin-top: 20px;
    display: flex;
    justify-content: space-between;
}

.unsolve {
    width: calc((100% - 1200px) / 2 + 800px);
    background-color: #fff;
}
.count span{
    font-size: 20px;
}
</style>
