<template>
  <a-layout class="layout_a" layout="vertical">
    <a-layout-header class="header_a">
      <navbar plan-active="true" nav-title="Floor Plan"></navbar>
    </a-layout-header>

    <a-layout-content class="content_a">

    </a-layout-content>

    <a-layout-footer class="footer_a">

    </a-layout-footer>
  </a-layout>

</template>

<script>
import navbar from "@/components/navbar";
export default {
  name: "plan",
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
}
.header_a{
  background-color: white;
  /*border: 1px solid black;*/
  height: 100px;
  padding: 0px;
}
.footer_a{
  background-color: white;
  display: none;
}
</style>