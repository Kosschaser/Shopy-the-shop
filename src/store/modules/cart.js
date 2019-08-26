

const state = {
  cart:[]
};

const getters = {
  cartList: (state)=> state.cart
};

const actions = {
  updateCart:({commit}, item)=>{
    commit('UPDATE_CART', item);
  },
  removeIteminCart:({commit}, id)=>{
    commit('REMOVE_ITEM', id);
  }
};

const mutations = {
  UPDATE_CART:(state, item)=>{
    const itemToAdd = state.cart.find(i => i.id == item.id);
    if(itemToAdd){
      if(item.isAdded){
        itemToAdd.quantity += item.quantity;
      }else{
        itemToAdd.quantity = item.quantity;
      }
    }else{
      state.cart.push(item);
    }
  },
  REMOVE_ITEM:(id)=>{
    const itemToRemove = state.cart.find(i => i.id == id);
    state.cart.splice(state.cart.indexOf(itemToRemove), 1);
  }
};

export default {
  state,
  getters,
  actions,
  mutations
}
