<template>
    <div class="card">
      <div class="card__image" v-images-loaded='imgLoading'>
        <pulse-loader
        class='imgLoader'
        :loading="isImgLoading"
        :color="loaderColor"
        :size="loaderSize">
        </pulse-loader>
        <router-link :to="'/item/' + data.id">
          <img :src="data.url" alt="" v-show='!isImgLoading'>
        </router-link>
      </div>
      <div class="card__name">
        <div>{{data.name}}</div>
        <div>$ {{data.price}}</div>
      </div>
      <div class="card__buttons">
        <div class="button__container" @click='addItem'>
          <font-awesome-i icon="shopping-cart" class="button"/>
        </div>
        <div class="button__container">
          <font-awesome-i icon="heart" class="button"/>
        </div>
      </div>
    </div>
</template>

<script>
import { library } from '@fortawesome/fontawesome-svg-core';
import {faShoppingCart, faHeart} from '@fortawesome/free-solid-svg-icons';
import { mapActions, mapGetters } from 'vuex';
import imagesLoaded from 'vue-images-loaded';
import PulseLoader from 'vue-spinner/src/PulseLoader.vue'

library.add(faShoppingCart, faHeart);

export default {
  name: 'products-item',
  props: ['data'],
  directives: {
    imagesLoaded
  },
  components:{
    PulseLoader
  },
  data(){
    return{
      loaderColor: 'green',
      loaderSize: '60px',
      isImgLoading: true,

    }
  },
  mounted(){

  },
  computed: mapGetters(['isPageLoading']),
  beforeDestroy(){

  },
  methods:{
    ...mapActions(['updateCart']),
    addItem(){
      let itemBuy = Object.assign({}, this.data);
      itemBuy.quantity = 1;
      itemBuy.isAdded = true;
      this.updateCart(itemBuy);
    },
    imgLoading(){
      this.isImgLoading = false;
      }
    }
  }
</script>

<style scoped lang="scss">
  .card{
    position: relative;
    font-family: $PoppinsFont;
    &__image{
      overflow: hidden;
      border-radius: 15px;
      line-height: 0px;
      min-height: 400px;
      & img{
        transition: .2s ease all;
        width: 100%;
        height: 100%
      }
    }
    &__name{
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      line-height: 20px;
    }
    &__buttons{
      position: absolute;
      display: flex;
      flex-direction: column;
      top: 0;
      right: -15px;
      opacity: 0;
      transition: .2s ease all;
    }
    &:hover &__buttons{
      right: 0;
      opacity: 1;
    }
    &:hover &__image img{
      transform: scale(1.1);
    }
  }
  .button{
    transition: .3s ease all;
    color: #ffffff;
    &__container{
      padding: 10px;
      background-color: $green;
      margin-right: 10px;
      margin-top: 10px;
      cursor: pointer;
      &:hover .button{
        color: #b51f51;
      }
    }
  }
  .imgLoader{
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
  }
</style>
