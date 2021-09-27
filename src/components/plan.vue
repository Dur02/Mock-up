<template>
  <a-layout class="layout_a" layout="vertical">
    <a-layout-header class="header_a">
      <navbar plan-active="true" nav-title="Floor Plan"></navbar>
    </a-layout-header>


    <a-layout-content class="content_a">
      <a-row>
        <a-col :span="24">
          <img src="@/assets/FloorPlanA.png"/>
        </a-col>
      </a-row>
      <a-row>
        <a-col :span="24" style="text-align: center">
          <p>{{this.PlanA}}</p>
        </a-col>
      </a-row>

      <a-row>
        <a-col :span="24" style="text-align: center">
          <a-button type="primary" @click="ToFormB(this.PlanA)">Mark Inspection Spot</a-button>
        </a-col>
      </a-row>

      <a-row>
        <a-col :span="24">
          <img src="@/assets/FloorPlanB.png"/>
        </a-col>
      </a-row>

      <a-row>
        <a-col :span="24" style="text-align: center">
          <p>{{this.PlanB}}</p>
        </a-col>
      </a-row>

      <a-row>
        <a-col :span="24" style="text-align: center">
          <a-button type="primary" @click="ToFormB(this.PlanB)">Mark Inspection Spot</a-button>
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
  name: "plan",
  data(){
    return{
      choice:"",
      PlanA:"Floor Plan A",
      PlanB:"Floor Plan B",
    }
  },
  components:{
    navbar
  },
  methods:{
    ToFormB (String) {
      this.$router.push({
        path: '/FormB',
        query:{
          floorPlanName: String
        }
      })
    }
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
.content_a img{
  /*width: 80vw;*/
  /*margin-left: 10vw;*/
  width: 100%;
}
.footer_a{
  background-color: white;
  display: none;
}
</style>