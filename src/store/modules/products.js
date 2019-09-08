

const state = {
  products:[],
  pageProducts:[],
  pagination:{
    pages: 0,
    pageSize: 3
  },
  isloading: true
};

const getters = {
  allProducts: (state) => {
    return state.products
  },
  allPages:(state)=>{
    return state.pagination.pages
  },
  isPageLoading:(state)=>{
    return state.isloading;
  },
  finalPage:(state)=>{
    return state.pageProducts;
  }
};

const actions = {
   async fetchProducts({ commit }){
    commit('SET_LOADING');
    return fetch(`https://firestore.googleapis.com/v1beta1/projects/fire-vue-test-d9ad1/databases/(default)/documents/products`)
    .then(
      function(response) {
        if (response.status !== 200) {
            return;
          }
          return response.json()
    .then(function(data) {
      const dataLink = data.documents;
      let result = [];
      for(let i=0;i< dataLink.length;i++){
        result.push({
          id: dataLink[i].name.substring(dataLink[i].name.length - 20), //assign the last 20 chars of the url as id
          url: dataLink[i].fields.img_url.stringValue,
          name: dataLink[i].fields.name.stringValue,
          price: dataLink[i].fields.price.integerValue
        })
      }
          commit('SET_PRODS', result)
          });
        }
      )
      .catch(function(err) {
        console.log(err);
      });
  },
  async setPages({commit, state, dispatch}){
    if(state.products.length == 0){
      return dispatch('fetchProducts').then(()=>{
        const allPages = state.products.length/state.pagination.pageSize;
        commit('SET_PAGES', allPages);
      })
    }else{
      const allPages = state.products.length/state.pagination.pageSize;
      commit('SET_PAGES', allPages);
    }

  },
  async initProducts({ commit, state, dispatch }, page = 0){
    if(state.products.length == 0){
      return dispatch('fetchProducts').then(()=>{
        const currPage = page * state.pagination.pageSize;
        const endPage = currPage + state.pagination.pageSize;
        const finalPage = state.products.slice(currPage, endPage);
        // console.log(finalPage, currPage, endPage);
        commit('SET_VIEWPAGE', finalPage);
      })
    }else{
      const currPage = page * state.pagination.pageSize;
      const endPage = currPage + state.pagination.pageSize;
      const finalPage = state.products.slice(currPage, endPage);
      commit('SET_VIEWPAGE', finalPage);
    }
  },
  sortProducts({ commit, state, dispatch }, data){
    const prods = state.products;
    const sorter = data.sortBy || '---';
    const pageSize = data.pageSize || 3;
    if(sorter){
      if(sorter == 'toExp'){
        prods.sort((a,b)=>{
          return a.price - b.price;
        })
      }
      if(sorter == 'toChp'){
        prods.sort((a,b)=>{
          return b.price - a.price;
        })
      }
      if(sorter == 'name'){
        prods.sort((a,b)=>{
          if(a.name > b.name){
            return 1;
          }
          if(a.name < b.name){
            return -1;
          }
          return 0;
        })
      }
    }
    commit('SET_PRODS', prods);
    commit('SET_PAGESIZE', pageSize);
    dispatch('setPages')
    dispatch('initProducts');
  }
};

const mutations = {
    SET_PRODS: (state, prods) => {
      state.products = prods;
      state.isloading = false;
    },
    SET_PAGES: (state, pages) => (state.pagination.pages = pages),
    SET_PAGESIZE: (state, size) => (state.pagination.pageSize = size),
    SET_VIEWPAGE: (state, result) => (state.pageProducts = result),
    SET_LOADING: (state)=>{
      state.isloading = true;
    }
};

export default {
  state,
  getters,
  actions,
  mutations
}
