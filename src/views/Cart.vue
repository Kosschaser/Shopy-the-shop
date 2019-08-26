<template>
  <div class="cart">
    <div v-if='cartList.length == 0' class="container cart__empty"> <!--Check if cart is empty -->
      <div>Your cart is empty! Please proceed to the <router-link to="/">main page</router-link></div>
    </div>
    <div v-else class="cart__wrap container">
      <div class="cart__header">
        <h6>Products</h6>
        <div>Color & Size</div>
        <div>Quantity</div>
        <div>Price</div>
        <div>Total</div>
      </div>
      <cart-item
      v-for='item in cartList'
      :data='item'
      :key='item.id'>
      </cart-item>
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
    mapGetters(['cartList'])
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
  &__empty{
    display: flex;
    width: 100%;
    justify-content: center;
    align-self: center;
    font-size: 4em;
  }
  &__wrap{
    display: flex;
    margin: 5em auto;
    align-content: flex-start;
    flex-wrap: wrap;
  }
  &__header{
    display: flex;
    width: 100%;
    justify-content: space-between;
    min-height: 60px;
    & > div{
      flex-basis: 0;
      flex-grow: 1;
    }
    & h6{
      flex-basis: 30%;
    }
    & > div, h6{
      border: $cart-border;
      display: flex;
      align-items: center;
      justify-content: center;
    }
  }
}
</style>
