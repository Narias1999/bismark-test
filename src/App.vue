<template>
  <div id="app" class="app">
    <form-add @add="addElement"/>
    <div class="group">
      <bismark-table 
        :products="products" 
        @deleteProduct="deleteProduct" 
        :active-product="activeProduct"
        @select="selectProduct"
      />
      <detail
      :detail="activeProduct"
      @less="less"
      @add="add"/>
    </div>
  </div>
</template>

<script>
import FormAdd from './components/FormAdd.vue'
import BismarkTable from './components/Table.vue'
import Detail from './components/Detail.vue'

export default {
  name: 'app',
  components: {
    FormAdd,
    BismarkTable,
    Detail
  },
  data () {
    return {
      products: [],
      activeProduct: null
    }
  },
  methods: {
    deleteProduct (id) {
      if (this.activeProduct && this.activeProduct.id === id) this.activeProduct = null

      this.products = this.products.filter(product => product.id !== id)
      this.setLocalStorage()
    },
    addElement (data) {
      this.products.unshift(data)
      this.setLocalStorage()
    },
    selectProduct (product) {
      this.activeProduct = product
    },
    less () {
      this.activeProduct.quantity--
      this.setLocalStorage()
    },
    add () {
      this.activeProduct.quantity++
      this.setLocalStorage()
    },
    setLocalStorage () {
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
    --primary-light: #25a0f1;
    --error: #e74c3c;
    --error-light: #ec1313;
    --warning: #f1c40f;
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
  .group {
    display: flex;
  }
  @media only screen and (max-width: 850px) {
    .group {
      flex-direction: column;
    }
  }
</style>
