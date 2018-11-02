<template>
  <div id="app" class="app">
    <form-add @add="addElement"/>
  </div>
</template>

<script>
import FormAdd from './components/FormAdd.vue'

export default {
  name: 'app',
  components: {
    FormAdd
  },
  data () {
    return {
      products: []
    }
  },
  methods: {
    addElement (data) {
      this.products.push(data)
      localStorage.setItem('products', JSON.stringify(this.products))
    }
  },
  mounted () {
    const products = localStorage.getItem('products')
    if (!products) {
      localStorage.setItem('products', '[]')
      this.products = []
    } else {
      this.products = JSON.parse(products)
    }
    console.log(this.products)
  }
}
</script>

<style>
  :root {
    --primary: #3498db;
  }
  * {
    font-family: Arial, Helvetica, sans-serif;
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }
  .app {
    padding: 25px;
  }
  h2 {
    color: var(--primary);
    text-transform: uppercase;
    margin-bottom: 15px;
    border-bottom: 2px solid var(--primary);
  }
  
</style>
