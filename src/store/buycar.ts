
const BuyCar = {
  namespaced: true,
  state: {
    buycarlist: [{
      id: 1,
      name: "小米10 pro",
      num: 1
    }],
    product: [
      {
        id: 1,
        name: "小米10 pro",
        num: 9
      },
      {
        id: 2,
        name: "华为mate 30",
        num: 3
      }
    ]
  },
  mutations: {
    changeBuycarList(state, list):void{
      state.buycarlist = list
    },
  },
  actions: {
  },
  modules: {
  },
}
export { BuyCar }