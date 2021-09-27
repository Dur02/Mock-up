<template>

  <a-menu mode="horizontal" class="navbar">
    <a-row class="navbar_row">
      <a-col :span="4" class="navbar_title">
        <i class="iconfont icon-fanhui" @click="back"></i>
      </a-col>
      <a-col :span="16" class="navbar_title">
        <span>{{navTitle}}</span>
      </a-col>
      <a-col :span="4" class="navbar_title">
        <i class="iconfont icon-fasong" :class="{'send_disable':!sendFun,'send_enable':sendFun}" @click="Submit"></i>
      </a-col>
    </a-row>
  </a-menu>

  <a-menu mode="horizontal" class="navbar2">
    <a-row class="navbar_row">
      <a-col :span="8" class="navbar_title" :class="{'active':activeA}">
        <i class="iconfont icon-biaodan" @click="toActiveA"><span>A</span></i>
      </a-col>
      <a-col :span="8" class="navbar_title" :class="{'active':planActive}">
        <i class="iconfont icon-jihua" @click="toPlanActive"></i>
      </a-col>
      <a-col :span="8" class="navbar_title" :class="{'active':activeB}">
        <i class="iconfont icon-biaodan" @click="toActiveB"><span>B</span></i>
      </a-col>
    </a-row>
  </a-menu>

</template>

<script>
export default {
  name: "navbar",
  data () {
    return {
      sendFun:false,
    }
  },
  methods: {
    toActiveA () {
      if (this.$route.fullPath === '/Plan' ) {
        this.$router.push('/FormA')
      }

    },
    toPlanActive () {
      // console.log(this.$route)
      if (this.$route.path === '/FormB' ) {
        this.$router.push('/Plan')
      }
    },
    back () {
      if (this.$route.fullPath === '/FormA'){
        this.$router.push('/Home')
      }else if (this.$route.fullPath === '/Plan' ){
        this.$router.push('/FormA')
      }else if (this.$route.path === '/FormB' ){
        this.$router.push('/Plan')
      }
    },
    Submit() {
      if (this.$route.path === '/FormB'){
        this.sendFun = true
      }
      if (this.sendFun === true){
        this.$store.commit('loading')
        setTimeout(this.StopLoading,3000)
      }
    },
    StopLoading () {
      this.$store.commit('loaded')
    }
  },
  props:{
    activeA:String,
    activeB:String,
    planActive:String,
    navTitle:String,
  }
}
</script>

<style scoped>
.active{
  color: red;
}
.navbar,.navbar2{
  /*width: 100vw;*/
  height: 50px;
  /*border:1px solid #404040;*/
  border: none;
}
.navbar2{
  /*background-color: #0077aa;*/
  border-bottom: 1px solid #e7e7e7;
}
.navbar_row{
  width: 100%;
}
.navbar_title{
  text-align: center;
}
.send_disable{
  color: rgba(0,0,0,0.8);
}
.send_enable{
  color: rgba(0,0,0,1);
}
.icon-biaodan span{
  font-size: 4px;
}
</style>