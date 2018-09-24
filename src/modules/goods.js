import axios from 'axios'

const state = {
  goods: []
}

const mutations = {
  getGoods(state, goods) {
    state.goods.push(...goods)
  }
}

const actions = {
  getGoods({ commit }) {
    const uri = 'https://raw.githubusercontent.com/zlluGitHub/vue-elm-app/master/api/db.jsonhttps://raw.githubusercontent.com/zlluGitHub/vue-elm-app/master/api/db.json'
    axios.get(uri).then(res => {
      commit('getGoods', res.data.goods)
    })
  }
}

const getters = {
  goodsNameList(state) {
    return state.goods.map(t => t.name)
  }
}

const goods = {
  state,
  mutations,
  actions,
  getters
}

export default goods
