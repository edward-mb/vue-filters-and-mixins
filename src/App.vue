<template>
  <div class="container">
    <div class="columns">
      <div class="column full-with">
        <h1>Filters & Mixings</h1>
        <p>{{ text | toUppercase | toLowercase }}</p>
        <hr />
        <input type="text" v-model="filterText" />
        <ul>
          <li v-for="fruit in filteredFruits" :key="fruit">{{ fruit }}</li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      text: 'Hello there!',
      fruits: ['Apple', 'Banana', 'Mango', 'Melon'],
      filterText: ''
    }
  },
  filters: {
    toUppercase (value) {
      return value.toUpperCase()
    }
  },
  computed: {
    filteredFruits () {
      return this.fruits.filter(element => {
        return element.match(this.filterText)
      })
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
