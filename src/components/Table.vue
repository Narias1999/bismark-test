<template>
  <section>
    <h2>listado de productos</h2>
    <div class="input-field">
      <f-icon icon="search" color="#ccc" />
      <input type="text" placeholder="Filtar..." v-model="keyword">
    </div>
    <div class="container">
      <table border="0">
        <thead>
          <th>Nombre</th>
          <th>Descripción</th>
          <th>Precio</th>
          <th>Cant.</th>
          <th>Borrar</th>
        </thead>
        <tbody>
          <tr
            v-for="(element, index) in filteredElements"
            :key="index"
            @click="$emit('select', element)"
            :class="{active: element === activeProduct}"
          >
            <td class="name">{{element.name}}</td>
            <td class="description">{{element.description}}</td>
            <td>$ {{formatCurrency(element.price)}}</td>
            <td>{{element.quantity}}</td>
            <td>
              <a class="button" @click.stop="$emit('deleteProduct', element.id)">
                <f-icon icon="trash" color="#fff" />
              </a>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
    <div class="alert error" v-if="!products.length">
      <f-icon icon="exclamation-triangle" color="#fff" />
      <p>No hay ningún registro :(</p>
    </div>
    <div class="alert warning" v-else-if="!filteredElements.length">
      <f-icon icon="exclamation-circle" color="#fff" />
      <p>Ningún registro coincide con la búsqueda.</p>
    </div>
  </section>
</template>

<script>
  import { formatCurrency, filterArray } from './../utils'

  export default {
    name: 'Table',
    props:{
      products: Array,
      activeProduct: Object
    },
    data () {
      return {
        keyword: ''
      }
    },
    methods: {
      formatCurrency 
    },
    computed: {
      /**
       * Computed function wich filter the array of products
       */
      filteredElements () {
        return filterArray(this.products, this.keyword)
      }
    }
  }
</script>

<style scoped>
  section {
    width: 60%;
  }
  .input-field {
    border-bottom: 1px solid #ccc;
    display: flex;
    padding: 0 0 10px 10px;
  }
  .input-field input {
    border: 0;
    outline: none;
    width: 100%;
    font-size: 16px;
    margin-left: 10px;
  }
  table {
    width: 100%;
    border-collapse: collapse;
    margin-top: 20px;
  }
  th {
    padding: 20px 0;
  }
  td {
    padding: 5px 2px;
    border: none;
    text-align: center;
  }
  tr {
    cursor: pointer;
  }
  tr:hover, tr.active {
    background: #34495e !important;
    color: #fff;
  }
  tr:nth-child(odd) {
    background: #FFF
  }
  tr:nth-child(even) {
    background: #eee
  }
  .name {
    color: var(--primary);
    font-weight: bold;
  }
  .description {
    text-align: left;
    width: 40%;
    padding-left: 15px;
    overflow:hidden;
    white-space:nowrap;
    text-overflow: ellipsis;
    max-width: 100px;
  }
  .button {
    background: var(--error);
    width: 30px;
    height: 30px;
    align-items: center;
    justify-content: center;
    border-radius: 3px;
    display: flex;
    margin: 0 auto;
    cursor: pointer;
    box-shadow: 2px 2px 3px #555;
    transition: .3s;
  }
  .button:hover {
    background: var(--error-light)
  }
  .alert {
    padding: 10px 20px;
    color: white;
    font-size: 18px;
    box-shadow: 0 -3px #0000006b inset;
    display: flex;
  }
  .alert p {
    padding-left: 10px;
  }
  .error { background: var(--error) }
  .warning { background: var(--warning) }
  @media only screen and (max-width: 850px) {
    section {
      width: 100%;
    }
  }
  @media only screen and (max-width: 500px) {
    .container {
      overflow-x: scroll;
    }
    table {
      width: 500px;
    }
  } 
</style>