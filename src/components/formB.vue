<template>

  <a-spin v-show="$store.state.load === 1" class="loading"></a-spin>
  <a-layout class="layout_a" layout="vertical">

    <a-layout-header class="header_a">
      <navbar active-b="true" nav-title="Job Report - Part B"></navbar>
    </a-layout-header>


    <a-layout-content class="content_a">
      <a-row>
        <a-col :span="24">
          <p>{{$route.query.floorPlanName}}</p>
        </a-col>
      </a-row>

    </a-layout-content>

    <a-layout-footer class="footer_a">

    </a-layout-footer>

  </a-layout>
</template>

<script>
import navbar from "@/components/navbar";
export default {
  name: "formB",
  components:{
    navbar
  }
}
</script>

<style scoped>
.layout_a{
  /*width: 100vw;*/
  background-color: white;
  height: 100vh;
  z-index: 1;
}
.header_a{
  background-color: white;
  /*border: 1px solid black;*/
  height: 100px;
  padding: 0px;
}
.content_a img{
  /*width: 80vw;*/
  /*margin-left: 10vw;*/
  width: 100%;
}
.footer_a{
  background-color: white;
  display: none;
}
.loading{
  height: 100vh;
  position: fixed;
  width: 100vw;
  z-index: 999;
  /*background-color: rgba(0,0,0,0.1);*/
  /*margin-top: 50vh;*/
  padding-top: 50vh;
}
</style>