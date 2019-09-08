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
          <hr>
          <div class="item__inputs">
            <div class="item__quantity">
              <div class="left" @click='quantity > 1 ? quantity-- : quantity = 1'><font-awesome-i icon="chevron-left"/></div>
              <input v-model='quantity' disabled type="text" name="" id="" value="">
              <div class="right" @click='quantity++'><font-awesome-i icon="chevron-right"/></div>  
            </div>
            <div>
              <button class="item__button item__button--green" @click='addItem'><font-awesome-i icon="shopping-cart" class=""/> ADD TO CART</button>
              <button class="item__button"><font-awesome-i icon="heart" class=""/></button>
            </div>
          </div>
        </div>
    </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';
import { library } from '@fortawesome/fontawesome-svg-core';
import {faShoppingCart, faHeart,faChevronRight, faChevronLeft} from '@fortawesome/free-solid-svg-icons';

library.add(faShoppingCart, faHeart, faChevronRight, faChevronLeft);

export default {
  name: 'item-view',
  data(){
    return{
      data: [],
      id: this.$route.params.id,
      quantity: 1
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
      itemBuy.quantity = this.quantity;
      itemBuy.isAdded = true;
      this.updateCart(itemBuy);
      }
    }
  }
</script>

<style scoped lang="scss">
  .item{
    margin: 130px auto 80px auto;
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
      font-size: 1em;
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
      box-sizing: border-box;
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
    &__inputs{
      display: flex;
      box-sizing: border-box;
      justify-content: space-between;
    }
    &__quantity{
      display: flex;
      & input{
        font-size: 1.1em;
        height: 100%;
        text-align: center;
        outline: 0;
        border: none;
        background: none;
        color: #000;
        border-bottom: $cart-border;
        border-top: $cart-border;
        box-sizing: border-box;
      }
     & button{
       
     } 
    }
  }
  .right, .left{
    padding: 0;
    height: 100%;
    border: none;
    display: flex;
    align-items: center;
    padding: 0 15px;
    border: $cart-border;
    cursor: pointer;
    box-sizing: border-box;
  }
  .right{
    margin-right: 10px;
  }

  hr{
    margin: 40px auto;
    color: $greyish;
  }

  @media screen and (max-width: 800px){
    .item{
      flex-direction: column;
      &__image {
        margin-bottom: 20px;
      }
      &__description{
        line-height: 30px;
      }
      &__inputs{
        flex-direction: column;
      }
      &__quantity{
        min-height: 48px;
        margin-bottom: 20px;
        & input{
          width: 100%;
        }
      }
    }
  } 
  .right{
    margin: 0;
  }
</style>
