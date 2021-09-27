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
        <i class="iconfont icon-fasong send_disable"></i>
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

    }
  },
  methods: {
    toActiveA () {
      if (this.$route.fullPath === '/Plan' ) {
        this.$router.push('/FormA')
      }

    },
    toPlanActive () {
      if (this.$route.fullPath === '/FormB' ) {
        this.$router.push('/Plan')
      }

    },
    back () {
      if (this.$route.fullPath === '/FormA'){
        this.$router.push('/Home')
      }else if (this.$route.fullPath === '/Plan' ){
        this.$router.push('/FormA')
      }else if (this.$route.fullPath === '/FormB' ){
        this.$router.push('/Plan')
      }
    }
  },
  props:{
    activeA:String,
    activeB:String,
    planActive:String,
    navTitle:String
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
  color: rgba(0,119,170,0.8);
}
.icon-biaodan span{
  font-size: 4px;
}
</style>