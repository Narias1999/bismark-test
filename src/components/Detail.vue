<template>
  <section>
    <h2>detalle</h2>
    <div v-if="detail">
      <h3>{{detail.name}}</h3>
      <div class="data">
        <div class="left">
          <span class="price">$ {{formatCurrency(detail.price)}}</span>
          <p class="description">{{detail.description}}</p>
        </div>
        <div class="rigth">
          <span class="quantity">{{detail.quantity}}</span>
          <div class="controls">
            <a class="button" @click="$emit('less')">-</a>
            <a class="button" @click="$emit('add')">+</a>
          </div>
        </div>
      </div>
    </div>
    <div v-else>
      <h3>Ningún producto seleccionado.</h3>
    </div>
  </section>
</template>

<script>
  import { formatCurrency } from './../utils'
  export default {
    name: 'Detail',
    props: {
      detail: Object
    },
    methods: {
      formatCurrency,
    }
  }
</script>

<style scoped>
  section {
    width: 40%;
    padding-left: 20px;
  }
  h3 {
    padding-top: 6px;
    padding-bottom: 1px;
  }
  .data {
    display: flex;
    justify-content: space-between;
    border-top: 1px solid #ccc;
  }
  .price {
    color: #fff;
    background: rgba(0,0,0,.7);
    padding: 7px;
    border-radius: 7px;
    display: inline-block;
    margin: 10px 0;
    font-size: 20px;
  }
  .left {
    width: 65%;
    height: auto;
    padding-right: 15px;
    border-right: 1px solid #ccc;
  }
  .description {
    word-break: normal;
  }
  .rigth {
    display: flex;
    flex-direction: column;
    width: 35%;
    align-items: center;
  }
  .quantity {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 60px;
    height: 60px;
    font-weight: bold;
    margin: 10px 0;
    border-radius: 50%;
    font-size: 17px;
    cursor: default;
    background: var(--primary);
    color: #fff;
  }
  .controls {
    display: flex;
    width: 70px;
    border-radius: 5px;
    overflow: hidden;
  }
  .controls a {
    display: block;
    text-align: center;
    padding: 5px 0;
    cursor: pointer;
    width: 35px;
    font-weight: bold;
    font-size: 24px;
    transition: .4s;
  }
  .controls a:first-child {
    background: #dce0e0;
  }
  .controls a:last-child {
    background: var(--primary);
    color: #fff;
  }
  .controls a:last-child:hover {
    background: var(--primary-light);
  }
  .controls a:first-child:hover {
    background: #ecf0f1;
  }
  @media only screen and (max-width: 850px) {
    section {
      width: 100%;
      padding: 20px 0;
    }
  }
</style>