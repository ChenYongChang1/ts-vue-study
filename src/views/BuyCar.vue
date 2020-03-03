<template>
  <div class="buycar">
    <div class="lists">
      <div class="item" v-for="(item, index) in buycarlist" :key="item.id">
        <div class="num">
          {{index + 1}}
        </div>
        <div>
          {{item.name}}
        </div>
        <div class="num">
          <div class="changenum">+</div>
          <a-input-number id="inputNumber" :min="0" :max="99" v-model="item.num"  @change="changeNum"/>
          <div class="changenum">-</div>
        </div>
        <div>
          
        </div>
      </div>
    </div>  
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import { Product } from '../interfaces/buycarInterface'
@Component
export default class Buycarlist extends Vue {
    buycarlist: Product[]=[
      {
        id:1,
        name:'小米10 pro',
        num:0,
      }
    ]
    changeNum(val:number){
      console.log(val);
    }
  }
</script>


<style lang="less" scoped>
.buycar{
  width: 100%;
  .lists{
    width: 100%;
    .item{
      width: 100%;
      height: 30px;
      display: flex;
      border-bottom: solid 1px gainsboro;
      box-sizing: border-box;
      & > div{
        min-width: 80px;
        flex: 1;
        line-height: 30px;
        text-align: center;
      }
      .num{
        display: flex;
        & > .changenum{
          width: 50px;
          height: 30px;
          line-height: 30px;
          text-align: center;
          background: gainsboro;
          cursor: pointer;
        }
      }
    }
  }
}
</style>