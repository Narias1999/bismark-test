<template>
  <div id="app" class="app">
    <form-add @add="addElement"/>
    <bismark-table :products="products" />
  </div>
</template>

<script>
import FormAdd from './components/FormAdd.vue'
import BismarkTable from './components/Table.vue'

export default {
  name: 'app',
  components: {
    FormAdd,
    BismarkTable
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
  }
}
</script>

<style>
  :root {
    --primary: #3498db;
    --error: #e74c3c;
    --error-light: #ec1313;
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
