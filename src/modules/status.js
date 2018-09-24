const state = {
  ticketShow:false,
  favourable:false,
  popup:false,
  active:0,
  allPrice:0,
  cartScale:false,
  count:0,
  details:false
};

const mutations = {
  changeStatus(state, status) {
    Object.assign(state, status);
  }
}

const status = {
  state,
  mutations,
}

export default status
