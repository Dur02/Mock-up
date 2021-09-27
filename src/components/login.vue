<template>
  <a-layout class="layout">
    <a-layout-header class="header">

    </a-layout-header>

    <a-layout-content>
      <a-row class="Test_area">
        <a-col :span="6" offset="9">
          <div class="Test">
            <p>Test</p>
          </div>
        </a-col>
      </a-row>

      <a-row class="Title_area">
        <a-col :span="14" offset="5">
          <div class="Title">
            Smart Inspection System
          </div>
        </a-col>
      </a-row>

      <a-row class="Btn_area">
        <a-col :span="14" offset="5">
          <a-button class="Btn" type="primary" @click="toFormA">Login</a-button>
        </a-col>
      </a-row>
    </a-layout-content>

    <a-layout-footer class="footer">
      <a-row class="footer_row">
        <a-col :span="24">
          <img src="@/assets/login.png" class="log_img"/>
        </a-col>
      </a-row>
    </a-layout-footer>
  </a-layout>

</template>

<script>
export default {
  name: "login",
  methods:{
    toFormA () {
      this.$router.push('/FormA')
      // this.$store.commit("changeA")
    }
  }
}
</script>

<style scoped>
.layout{
  height: 100vh;
  background-color: white;
}
.header{
  background-color: white;
}
.footer{
  background-color: white;
  padding: 0px;
}
.footer_row{

}
.log_img{
  width:100%;
}
.Test_area{
  width: 100%;
  text-align: center;
  margin: 10% auto;
  /*border: 1px solid #000;*/
}
.Test{
  background-color: yellow;
  height: 90px;
}
.Title_area{
  font-size: 18px;
  font-weight: bold;
}
.Title{
  text-align: center;
}
.Btn_area{
  width: 100%;
  text-align: center;
  margin: 10% auto;
  /*border: 1px solid #000;*/
}
</style>