<template>
  <form class="form-add">
    <div class="container">
      <h2>Nuevo producto</h2>
      <div class="row">
        <input type="text" class="name" v-model="name" placeholder="Nombre" />
        <input type="number" class="others" v-model="price" placeholder="Precio" />
        <input type="number" class="others" v-model="quantity" placeholder="Cantidad" />
      </div>
      <div class="row">
        <textarea v-model="description" placeholder="Descripción"></textarea>
        <button @click.prevent="add" >Agregar</button>
      </div>
    </div>
  </form>
</template>

<script>
  export default {
    name: 'FormAdd',
    data () {
      return {
        name: '',
        price: '',
        quantity: '',
        description: ''
      }
    },
    methods: {
      add () {
        const elementToAdd = {
          name: this.name,
          price: this.price,
          quantity: this.quantity,
          description: this.description
        }
        this.$emit('add', elementToAdd)
      }
    }
  }
</script>

<style scoped>
  form {
    width: 100%;
  }
  .container {
    width: 50%;
  }
  input, textarea {
    padding: 5px;
    font-size: 16px;
  }
  .row {
    margin: 10px 0;
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
  }
  .others {
    width: 25%;
  }
  .name {
    width: 45%;
  }
  textarea {
    width: 100%;
    margin-right: 15px;
    height: 80px;
  }
  button {
    background: var(--primary);
    outline: none;
    color: #fff;
    border: 0;
    font-size: 16px;
    padding: 10px 20px;
    cursor: pointer;
    transition: .4s;
    box-shadow: 2px 2px 3px #555;
  }
  button:hover {
    box-shadow: 2px 2px 5px #999;
  }
  @media only screen and (max-width: 900px) {
    .container {
      width: 100%;
    }
  }
  @media only screen and (max-width: 420px) {
    .row:last-child {
      flex-direction: column;
    }
    button {
      margin-top: 10px;
      width: 100%;
    }
  }
</style>