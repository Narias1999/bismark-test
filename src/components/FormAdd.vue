<template>
  <form class="form-add" @submit.prevent="add">
    <div class="container">
      <h2>Nuevo producto</h2>
      <div class="row">
        <input type="text" required class="name" v-model="name" placeholder="Nombre" />
        <input type="number" required class="others" v-model="price" placeholder="Precio" />
        <input type="number" required class="others" v-model="quantity" placeholder="Cantidad" />
      </div>
      <div class="row">
        <textarea v-model="description" placeholder="Descripción"></textarea>
        <input type="submit" value="Agregar" class="btn" />
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
            id: (new Date()).getTime(),
            name: this.name,
            price: this.price,
            quantity: this.quantity,
            description: this.description
          }
          this.$emit('add', elementToAdd)
          this.resetForm()
      },
      resetForm() {
        this.name = ''
        this.price = ''
        this.quantity = ''
        this.description = ''
      }
    }
  }
</script>

<style scoped>
  form {
    width: 100%;
    padding-bottom: 20px;
  }
  .container {
    width: 60%;
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
  .btn {
    background: var(--primary);
    outline: none;
    color: #fff;
    border: 0;
    font-size: 16px;
    padding: 10px 20px;
    cursor: pointer;
    transition: .4s;
    border-radius: 3px;
    box-shadow: 2px 2px 5px #999;
  }
  .btn:hover {
    box-shadow: 2px 2px 3px #555;
  }
  @media only screen and (max-width: 850px) {
    .container {
      width: 100%;
    }
  }
  @media only screen and (max-width: 420px) {
    .row:last-child {
      flex-direction: column;
    }
    .btn {
      margin-top: 10px;
      width: 100%;
    }
  }
</style>