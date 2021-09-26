<template>
  <a-layout class="layout_a">
    <a-layout-header class="header_a">
      <navbar></navbar>
    </a-layout-header>

    <a-layout-content>

    </a-layout-content>

    <a-layout-footer class="footer_a">

    </a-layout-footer>
  </a-layout>
</template>

<script>
import Navbar from "@/components/navbar";
export default {
  name: "formA",
  components: {Navbar}
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
}
.footer_a{
  background-color: white;
}
</style>