const state = {
  carts:[]
}

const mutations = {
  addToCart(state, newCart) {
    const isInCart =
      state.carts.findIndex(t => t.id === newCart.id) === -1 ? false : true
    if (isInCart) {
      state.carts.find(t => t.id === newCart.id).count=newCart.count
      state.carts.find(t => t.id === newCart.id).allPrice=newCart.allPrice
    } else {
      state.carts.push(newCart)
    }
  },
  getCountNum(state, num) {
    state.carts
  }
}
const getters = {
  getAllPrice(state){
    return state.carts;
  },
  getFoodNum(state) {
    return function(id) {
      return state.carts.find(t => t.id === id)
        ? state.carts.find(t => t.id === id).count
        : 0
    }
  },
  getTotalObj(state) {
    return state.carts.reduce(
      (obj, food) => ({
        allCount: obj.allCount + food.count,
        total: obj.total + food.price * food.count
      }),
      {
        allCount: 0,
        total: 0
      }
    )
  }
}
const carts = {
  state,
  mutations,
  getters
}

export default carts
