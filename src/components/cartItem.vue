<template>
  <div class="cart__item">
    <h6>
      <img :src="data.url" alt="" class="thumbnail">
      <div>{{data.name}}</div>
    </h6>
    <div>Color & Size</div>
    <div>{{data.quantity}}</div>
    <div>${{data.price}}</div>
    <div>
      <button
      @click='removeItem'
      >TEXT</button>
      <div></div>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';

export default {
  name: 'products-cart-item',
  props: ['data'],
  data(){
    return{

    }
  },
  mounted(){

  },
  beforeDestroy(){

  },
  methods:{
    ...mapActions(['removeIteminCart']),
    removeItem(){
      this.removeIteminCart(this.data.id);
      }
    }
  }
</script>

<style scoped lang="scss">
.cart__item{
  display: flex;
  width: 100%;
  justify-content: space-between;
  min-height: 60px;
  & > div{
    flex-basis: 0;
    flex-grow: 1;
    padding: 1% 0;
    justify-content: center;
  }
  & h6{
    flex-basis: 30%;
    display: flex;
    align-items: center;
    justify-content: flex-start;
  }
  & > div, h6{
    border: $cart-border;
    display: flex;
    align-items: center;
  }
}
.thumbnail{
  width: 80px;
  height: 100px;
  margin: 1em 1.5em;
}
</style>
