<template>
  <div>
    <div class="input">
      <div>watchName: {{watchName}}</div>
      <div>computed: {{computedTempName}}</div>
      <a-input placeholder="请输入名字" v-model="tempName" style="width:220px" />
      <a-select style="width:220px" v-model="tempSelectedId">
        <!-- defaultValue="lucy"  -->
        <a-select-option :value="item.id" v-for="item in department" :key="item.id">{{item.name}}</a-select-option>
      </a-select>
      <a-button type="primary" style="width:220px" @click="query">查询</a-button>
    </div>
  </div>
</template>

<script lang="ts">
import { Vue, Component, Prop, Watch } from "vue-property-decorator";
import { State, Getter, Action, Mutation, namespace } from "vuex-class";
// let informationfee = namespace("informationfee");

@Component
export default class Form extends Vue {
  @Prop({ type: String, default: "" })
  name!: string;

  @Prop({ type: Number, default: 1 })
  selected!: number;

  @Prop({ type: Array, default: () => [] })
  department!: { id: number; name: string };

  tempName: string = this.name;
  tempSelectedId: number = this.selected;
  watchName: string = '';

  // @State(state => state.login.studentInfo)
  // studentInfo: any;
  // @informationfee.Mutation("changeAddCourseFree")
  // changeAddCourseFree: any;

  mounted(){
    this.startComponents()
  }

  @Watch('tempName',)
  watchTempName(val: string) {
     if(val && val.length > 3){
       console.log(val,'val',State)
       this.watchName = val
     }
  }

  get computedTempName(){
    return '->'+this.watchName+'<-'
  }

  startComponents(){
    console.log('begin components');
  }

  query() {
    this.$emit("query", {
      name: this.tempName,
      tempSelectedId: this.tempSelectedId
    });
  }

  
}
</script>

<style lang="less" scoped>
.input {
  display: flex;
}
</style>