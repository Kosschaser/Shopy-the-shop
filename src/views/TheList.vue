<template>
  <div>
    <div class="controls__wrapper container">
      <div class="controls__item">
        <label>Items per page</label>
        <select v-model='pageSize'>
          <option selected value="3">3</option>
          <option value="5">5</option>
          <option value="10">10</option>
        </select>
      </div>
      <div class="controls__item">
        <label for="">Sort by</label>
        <select v-model='sortBy' name="" id="">
          <option selected disabled value="">---</option>
          <option value="toExp">Cheap to expensive</option>
          <option value="toChp">Expensive to cheap</option>
          <option value="name">Name</option>
        </select>
      </div>
      <button
      @click='page = 0; sortProducts({sortBy, pageSize});'
      class="refresh-btn controls__item">Apply</button>
    </div>
    <div class="main__wrapper container">
      <prod-item
      v-for='prod in finalPage'
      :data='prod'
      :key='prod.id'></prod-item>
    </div>
    <div>
      <button
      class="controls__pagination"
      :disabled='page == 0'
      @click='prevPage'
      ><font-awesome-i icon="chevron-left"/></button>
      <button
      class="controls__pagination"
      :disabled='page + 1 >= allPages'
      @click='nextPage'
      ><font-awesome-i icon="chevron-right"/></button>
    </div>
  </div>
</template>

<script>

import prodItem from '@/components/products/item.vue'
import { mapGetters, mapActions } from 'vuex';
import { library } from '@fortawesome/fontawesome-svg-core';
import {faChevronRight, faChevronLeft} from '@fortawesome/free-solid-svg-icons';

library.add(faChevronRight, faChevronLeft);

export default {
  name: 'products-list',
  data(){
    return{
      page: 0,
      pageSize: 3,
      sortBy: ''
    }
  },
  components:{
    prodItem: prodItem
  },
  computed:
    mapGetters(['allProducts', 'allPages', 'isPageLoading', 'finalPage']),
  watch:{

  },
  created(){
    this.initProducts();
    this.setPages();
  },
  beforeDestroy(){
    this.sortProducts({srt:'', sz: 3}); //reset the list of products
  },
  methods:{
    ...mapActions(['initProducts', 'setPages', 'sortProducts']),
    nextPage(){
      this.page++;
      this.initProducts(this.page, this.pageSize);
      const topScroll = document.querySelector('.description__wrapper');
      window.scroll(0, (topScroll.offsetTop + topScroll.offsetHeight));
    },
    prevPage(){
      this.page--;
      this.initProducts(this.page, this.pageSize);
      const topScroll = document.querySelector('.description__wrapper');
      window.scroll(0, (topScroll.offsetTop + topScroll.offsetHeight));
      }
    }
  }
</script>

<style scoped lang="scss">
  .main{
    &__wrapper{
      display: grid;
      grid-template-columns: repeat(auto-fill, 300px);
      grid-gap: 1rem;
      justify-content: space-between;
      margin: 50px auto;
    }
  }
  .refresh-btn{
    background-color: $green;
    color: #fff;
    border: none;
    outline: 0;
    padding: 5px 10px;
    border-radius: 5px;
    cursor: pointer;
  }
  .controls{
    &__wrapper{
      display: flex;
      justify-content: flex-end;
      align-items: center;
      margin-top: 30px;
    }
    &__item{
      margin-left: 15px;
      & label{
        margin-right: 15px;
      }
    }
    &__pagination{
      margin: 0 15px 50px 15px;
      cursor: pointer;
      background-color: #fff;
      font-size: 3em;
      color: $green;
      border-radius: 10px;
      border: 4px solid $green;
      transition: .2s ease all;
      &:hover{
        transform: scale(1.1);
      }
      &:disabled{
        opacity: .6;
        transform: none;
      }
    }
  }

    @media screen and (max-width: 400px){
    .main{
      &__wrapper{
        justify-content: center;
      }
    }
  }
</style>
