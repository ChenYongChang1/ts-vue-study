<template>
  <div class="buycar">
    <div class="product">
      <div class="item" v-for="(item, index) in product" :key="item.id">
        <div>{{item.name}}</div>
        <div>数量：{{item.num}}个，</div>
        <div class="add" @click="insertBuycarList(index)">添加</div>
      </div>
    </div>
    <div class="lists">
      <div class="item" v-for="(item, index) in buycarlist" :key="item.id">
        <div class="num">{{index + 1}}</div>
        <div>{{item.name}}</div>
        <div class="num">
          <div class="changenum" @click="changeNum(index, 'jia')">+</div>
          <a-input-number id="inputNumber" v-model="item.num" />
          <div class="changenum" @click="changeNum(index, 'jian')">-</div>
        </div>
        <div @click="remove(index)">删除</div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import { Product } from "../interfaces/buycarInterface";
import { namespace } from 'vuex-class'

const buycarStore = namespace('BuyCar')


@Component
export default class Buycarlist extends Vue {
  // buycarlist: Product[] = [
  //   {
  //     id: 1,
  //     name: "小米10 pro",
  //     num: 1
  //   }
  // ];
  // product: Product[] = [
  //   {
  //     id: 1,
  //     name: "小米10 pro",
  //     num: 9
  //   },

  //   {
  //     id: 2,
  //     name: "华为mate 30",
  //     num: 3
  //   }
  // ];
  
 
  @buycarStore.State(state => state.buycarlist)
  buycarlist: any;

  @buycarStore.State(state => state.product)
  product: any;

  mounted(){
    console.log(this.product);
  }

  insertBuycarList(index: number) {
    if (this.product[index].num > 0) {
      this.product[index].num--;

      if (this.buycarlist.some((item: Product) => item.id == this.product[index].id)) {
        (this.buycarlist.find(
          item => item.id == this.product[index].id
        ) as Product).num++;
      } else {
        let pushObj: Product = JSON.parse(JSON.stringify(this.product[index]));
        pushObj.num = 1;
        this.buycarlist.push(pushObj);
      }
      if (this.product[index].num <= 0) {
        this.product.splice(index, 1);
      }
    }
  }
  changeNum(val: number, type: string) {
    if (type == "jia") {
      if (
        this.product.some(item => item.id == this.buycarlist[val].id) &&
        (this.product.find(
          item => item.id == this.buycarlist[val].id
        ) as Product).num > 0
      ) {
        (this.product.find(
          item => item.id == this.buycarlist[val].id
        ) as Product).num--;
        this.buycarlist[val].num++;
        this.checkProduct();
      }
    } else {
      if (this.buycarlist[val].num > 1) {
        if (this.product.some(item => item.id == this.buycarlist[val].id)) {
          (this.product.find(
            item => item.id == this.buycarlist[val].id
          ) as Product).num += 1;
        } else {
          let pushObj: Product = JSON.parse(
            JSON.stringify(this.buycarlist[val])
          );
          pushObj.num = 1;
          this.product.push(pushObj);
        }
        this.buycarlist[val].num--;
      }
    }
  }
  checkProduct() {
    this.product.forEach((item, index) => {
      if (item.num <= 0) {
        this.product.splice(index, 1);
      }
    });
  }
  remove(index: number) {
    let mess: Product = this.buycarlist.splice(index, 1)[0];
    if (this.product.some(item => item.id == mess.id)) {
      (this.product.find(item => item.id == mess.id) as Product).num +=
        mess.num;
    } else {
      console.log('push');
      let pushObj: Product = JSON.parse(JSON.stringify(mess));
      this.product.push(pushObj);
    }
    console.log(mess);
  }
}
</script>


<style lang="less" scoped>
.buycar {
  width: 100%;
  .product {
    width: 100%;
    .item {
      width: 300px;
      display: flex;
      .add {
        width: 60px;
        cursor: pointer;
        background: gainsboro;
        text-align: center;
      }
    }
  }
  .lists {
    width: 100%;
    .item {
      width: 100%;
      height: 30px;
      display: flex;
      border-bottom: solid 1px gainsboro;
      box-sizing: border-box;
      & > div {
        min-width: 80px;
        flex: 1;
        line-height: 30px;
        text-align: center;
      }
      .num {
        display: flex;
        & > .changenum {
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