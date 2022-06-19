<template>
  <div id="container-product-relate">
    <h3>Related Products</h3>
    <img class="img-custom" alt="1" src="./assets/images-product-relate/reco_1.jpg">
    <img class="img-custom" alt="2" src="./assets/images-product-relate/reco_2.jpg">
    <img class="img-custom" alt="3" src="./assets/images-product-relate/reco_3.jpg">
  </div>
</template>

<script>
  export default {
    props: ['mountParcel', 'otherProp'],
  }
  console.log("mountParcel ", mountParcel)
  console.log("otherProp ", otherProp)
</script>

<style>
#container-product-relate{
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  width: 200px;
  display: inline-block;
}
.img-custom{
  width: 100%;
  height: auto;
  object-fit: scale-down;
}
</style>