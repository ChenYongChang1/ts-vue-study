<template>
  <div id="app">
    <Hello />
    <Form :department="department" @query="query"></Form>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import HelloWorld from "./components/HelloWorld.vue";
import Hello from "./components/Hello.vue";
import Form from "./components/Form.vue";
interface queryObj {
  id: number;
  name: string;
}

@Component({
  components: {
    Hello,
    Form
  }
})
export default class App extends Vue {
  department: queryObj[] = [
    {
      id: 1,
      name: "javascript"
    },
    {
      id: 2,
      name: "python"
    }
  ];
  query(obj: queryObj) {
    console.log(obj);
  }
}
</script>

<style lang="less">
</style>
