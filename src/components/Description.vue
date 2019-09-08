<template>
  <div class="description__wrapper">
    <div class="description__cell">
      <div class="description__icon">
        <img src="@/assets/icons/description-icons/diamond@1X.png" alt="SPecial offers">
      </div>
      <div>
        <h6>special offers</h6>
        <p>Shop Big Save Big</p>
      </div>
    </div>
    <div class="description__cell">
      <div class="description__icon">
        <img src="@/assets/icons/description-icons/plane 2@1X.png" alt="FreeDelivery">
      </div>
      <div>
        <h6>free delivery</h6>
        <p>On Orders Above $99</p>
      </div>
    </div>
    <div class="description__cell">
      <div class="description__icon">
        <img src="@/assets/icons/description-icons/share@1X.png" alt="30 days Return">
      </div>
      <div>
        <h6>30 days return</h6>
        <p>Policy We Offer</p>
      </div>
    </div>
    <div class="description__cell">
      <div class="description__icon">
        <img src="@/assets/icons/description-icons/rocket@1X.png" alt="Fastest shipping">
      </div>
      <div>
        <h6>fastest shipping</h6>
        <p>2 Days Express</p>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: 'descrition',
  data(){
    return{

    }
  }
}
</script>

<style scoped lang="scss">
  .description{
      &__wrapper{
      background-color: $greyish;
      display: flex;
      flex-direction: row;
      justify-content: space-around;
    }
    &__cell{
      padding: 50px 0;
      font-family: $PoppinsFont;
      & h6{
        text-transform: uppercase;
        font-weight: 800;
        letter-spacing: 3px;
      }
      & p{
        line-height: 30px;
      }
    }
    &__icon{
      min-height: 40px;
      margin-bottom: 30px;
    }
  }

  @media screen and (max-width: 400px){
    .description{
      &__wrapper{
        flex-direction: column;
      }
    }
  }
</style>
