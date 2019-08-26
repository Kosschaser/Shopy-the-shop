<template>
    <div class="item container">
        <div class="item__section item__image">
          <img :src="item.url" alt="">
        </div>
        <div class="item__section">
          <p class="item__name">{{item.name}}</p>
          <p class="item__price">$ {{item.price}}</p>
          <p class="item__description">Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Possimus consectetur eum at, eos dolorem in cum aperiam quo laboriosam
            dolores, impedit eius nobis similique consequatur neque!
            Possimus, id illo suscipit?</p>
            <div>
              <button class="item__button item__button--green" @click='addItem'><font-awesome-i icon="shopping-cart" class=""/> ADD TO CART</button>
              <button class="item__button"><font-awesome-i icon="heart" class=""/></button>
            </div>

        </div>
    </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';
import { library } from '@fortawesome/fontawesome-svg-core';
import {faShoppingCart, faHeart} from '@fortawesome/free-solid-svg-icons';

library.add(faShoppingCart, faHeart);

export default {
  name: 'item-view',
  data(){
    return{
      data: [],
      id: this.$route.params.id
    }
  },
  created(){
    if (this.allProducts.length == 0) {
        this.fetchProducts();
    }else{
      return;
    }
  },
  computed:{
    ...mapGetters(['allProducts']),
    item: function(){
      return this.allProducts.find((el)=>el.id == this.id);
    }
  },
  watch:{

  },
  methods:{
    ...mapActions(['fetchProducts', 'updateCart']),
    addItem(){
      const item = this.allProducts.find((el)=>el.id == this.id);
      let itemBuy = Object.assign({}, item);
      itemBuy.quantity = 1;
      itemBuy.isAdded = true;
      this.updateCart(itemBuy);
      }
    }
  }
</script>

<style scoped lang="scss">
  .item{
    margin: 180px auto 80px auto;
    display: flex;
    font-family: $PoppinsFont;
    &__section{
      flex-basis: 50%;
      text-align: left;
    }
    &__image{
        display: flex;
        justify-content: center;
    }
    &__name{
      font-size: 2em;
      font-weight: 800;
      margin-bottom: 20px;
    }
    &__price{
      font-size: 1.8em;
      color:$green;
      font-style: italic;
      margin-bottom: 20px;
    }
    &__description{
      text-align: justify;
      margin-bottom: 20px;
    }
    &__button{
      font-family: $PoppinsFont;
      padding: 10px 14px;
      margin-right: 10px;
      font-size: 1.1em;
      color: #fff;
      border: $cart-border;
      outline: 0;
      background-color: #fff;
      color: #000;
      transition: .2s all ease;
      cursor: pointer;
      &--green{
        background-color: $green;
        color: #fff;
        &:hover{
          color: $green;
          background-color: #fff;
        }
      }
    }
  }
</style>
