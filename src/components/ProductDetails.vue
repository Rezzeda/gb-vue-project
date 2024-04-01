<template>
    <div>
      <h2>{{ product.name }}</h2>
      <p>Price: {{ formattedPrice }}</p>
      <p>Status: {{ availability }}</p>
    </div>
  </template>

<script>
export default {
  name: 'ProductDetails',
  data () {
    return {
      product: {
        name: 'Task2 Example Product',
        price: 99.99,
        available: true
      }
    }
  },
  computed: {
    formattedPrice () {
      const formatter = new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD'
      })
      return formatter.format(this.product.price)
    },
    availability () {
      return this.product.available ? 'Available' : 'Out of stock'
    }
  }
}
</script>

  <style scoped>
div {
  margin: 50px;
}
</style>
