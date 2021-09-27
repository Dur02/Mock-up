<template>
  <a-layout class="layout_a" layout="vertical">
    <a-layout-header class="header_a">
      <navbar active-a="true" nav-title="Job Report - Part A"></navbar>
    </a-layout-header>

    <a-layout-content class="content_a">
      <a-form layout="vertical">
        <a-form-item>
          <a-radio-group :disabled="readOnly">
            <a-radio class="formA_radio" :value="1">Option A</a-radio>
            <a-radio class="formA_radio" :value="2">Option B</a-radio>
            <a-radio class="formA_radio" :value="3">Option C</a-radio>
            <a-radio class="formA_radio" :value="4">
              More...
              <a-input v-if="value === 4" style="width: 100px; margin-left: 10px" />
            </a-radio>
          </a-radio-group>
        </a-form-item>
        <a-form-item label="Activity name">
          <a-input :disabled="readOnly" />
        </a-form-item>

        <a-form-item>
          <a-radio-group :disabled="readOnly">
            <a-radio class="formA_radio" :value="1">Option A</a-radio>
            <a-radio class="formA_radio" :value="2">Option B</a-radio>
            <a-radio class="formA_radio" :value="3">Option C</a-radio>
            <a-radio class="formA_radio" :value="4">
              More...
              <a-input v-if="value === 4" style="width: 100px; margin-left: 10px" />
            </a-radio>
          </a-radio-group>
        </a-form-item>
        <a-form-item label="Activity name">
          <a-input :disabled="readOnly" />
        </a-form-item>

        <a-form-item>
          <a-radio-group :disabled="readOnly">
            <a-radio class="formA_radio" :value="1">Option A</a-radio>
            <a-radio class="formA_radio" :value="2">Option B</a-radio>
            <a-radio class="formA_radio" :value="3">Option C</a-radio>
            <a-radio class="formA_radio" :value="4">
              More...
              <a-input v-if="value === 4" style="width: 100px; margin-left: 10px" />
            </a-radio>
          </a-radio-group>
        </a-form-item>
        <a-form-item label="Activity name">
          <a-input :disabled="readOnly" />
        </a-form-item>

        <a-form-item>
          <a-radio-group :disabled="readOnly">
            <a-radio class="formA_radio" ::value="1">Option A</a-radio>
            <a-radio class="formA_radio" :value="2">Option B</a-radio>
            <a-radio class="formA_radio" :value="3">Option C</a-radio>
            <a-radio class="formA_radio" :value="4">
              More...
              <a-input v-if="value === 4" style="width: 100px; margin-left: 10px" />
            </a-radio>
          </a-radio-group>
        </a-form-item>
        <a-form-item label="Activity name">
          <a-input :disabled="readOnly" />
        </a-form-item>

      </a-form>

      <a-row class="btn_group_a">
        <a-col :span="6" offset="3">
          <a-button type="primary" @click="disable_form">Save Only</a-button>
        </a-col>
        <a-col :span="8" offset="3">
          <a-button type="dashed" @click="toPlan">Mark as Completed</a-button>
        </a-col>
      </a-row>

    </a-layout-content>

<!--      <a-space class="btn_group_a">-->

<!--        <a-button type="dashed">Mark as Completed</a-button>-->
<!--      </a-space>-->

    <a-layout-footer class="footer_a">

    </a-layout-footer>
  </a-layout>
</template>

<script>
import navbar from "@/components/navbar";
import { defineComponent, reactive, ref } from 'vue';
export default {
  name: "formA",
  data () {
    return {
      readOnly:false,
    }
  },
  components: {
    navbar
  },
  methods: {
    disable_form () {
      if (this.readOnly === false){
        this.readOnly = true
      }else {
        this.readOnly = false
      }
    },
    toPlan () {
      this.$router.push("/Plan")
    }
  },
  setup() {
    const value = ref(1);
    const radioStyle = reactive({
      display: 'block',
      height: '30px',
      lineHeight: '30px',
    });
    return {
      value,
      radioStyle,
    };
  },
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
.content_a form{
  width: 80vw;
  margin-left: 10vw;
}
.footer_a{
  background-color: white;
  display: none;
}
.btn_group_a{
  /*margin-left: 7vw;*/
  width: 100vw;
}
.formA_radio{
  display: block;
}
</style>