<template>
  <div>
    <h1>Hello {{name}}</h1>
  </div>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  data(){
    return {
      name: 'Hello TypeScript'
    }
  }
});
</script>

<style scoped>
h1{
  color: red;
}
</style>