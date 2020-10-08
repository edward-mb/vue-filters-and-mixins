<template>
  <div class="container">
    <div class="columns">
      <div class="column full-with">
        <h1>Filters & Mixings</h1>
        <p>{{ text | toUppercase | toLowercase }}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      text: 'Hello there!'
    }
  },
  filters: {
    toUppercase (value) {
      return value.toUpperCase()
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
