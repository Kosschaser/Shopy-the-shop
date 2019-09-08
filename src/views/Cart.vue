<template>
  <div class="cart">
    <div v-if='cartList.length == 0' class="container cart__empty"> <!--Check if cart is empty -->
      <div>Your cart is empty! Please proceed to the <router-link to="/">main page</router-link></div>
    </div>
    <div v-else class="cart__wrap container">
      <div class="cart__header">
        <div class="cart__header--main">Products</div>
        <div class="cart__header--sec">Quantity</div>
        <div class="cart__header--sec">Price</div>
        <div class="cart__header--sec">Total</div>
      </div>
      <cart-item
      v-for='item in cartList'
      :data='item'
      :key='item.id'>
      </cart-item>
      <div class="cart__checkout">
        <div class="cart__sum">TOTAL: $ {{cartTotalPrice}}</div>
        <div>
          <button class="cart__checkout__button">CONTINUE SHOPPING</button>
          <button class="cart__checkout__button--green cart__checkout__button">PROCEED TO CHEKOUT</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
import {eventBus} from '@/main';
import cartItem from '@/components/cartItem'

export default {
  name: 'cart',
  data(){
    return{
      upperScroll: 9999
    }
  },
  components: {
    cartItem: cartItem
  },
  methods:{

  },
  computed:
    mapGetters(['cartList', 'cartTotalPrice'])
  ,
  mounted(){
    eventBus.$emit('ScrlTop', this.upperScroll); //prevent header from transitioning
  }
}
</script>

<style scoped lang="scss">
.cart{
  padding-top: 46px;
  display: flex;
  flex-grow: 1;
      margin: 5em auto;
  font-family: $PoppinsFont;
  &__empty{
    display: flex;
    width: 100%;
    justify-content: center;
    align-self: center;
    font-size: 4em;
  }
  &__wrap{
    display: flex;

    align-content: flex-start;
    flex-wrap: wrap;
  }
  &__header{
    display: flex;
    width: 100%;
    justify-content: space-between;
    min-height: 60px;
    &  div{
      border: $cart-border;
      display: flex;
      align-items: center;
      justify-content: center;
    }
      &--main{
      flex-basis: 50%;
    }
    &--sec{
      flex-basis: 16.6%;
    }
  }
  &__checkout{
    border: $cart-border;
    border-top: none;
    width: 100%;
    display: flex;
    justify-content: flex-end;
    align-items: flex-end;
    padding: 20px 0;
    flex-direction: column;
    &__button{
      font-family: $PoppinsFont;
      padding: 10px 14px;
      margin-right: 20px;
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
  }
  &__sum{
    margin: 0 20px 20px 0;
    font-size: 1.3em;
  }
}

@media screen and (max-width: 400px){
  .cart{
    &__header{
      display: none;
    }
    &__empty{
      font-size: 1.2em;
    }
  }
}
</style>
