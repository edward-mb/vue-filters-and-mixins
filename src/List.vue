<template>
  <div class="column is-full">
    <h1 class="is-size-1">Filters & Mixings</h1>
    <hr />
    <input class="input" type="text" v-model="filterText" />

    <div class="content">
      <ul>
        <li v-for="fruit in filteredFruits" :key="fruit">{{ fruit }}</li>
      </ul>
    </div>
  </div>
</template>

<script>
import { fruitMixing } from './fruitMixing'
export default {
  mixins: [fruitMixing],
  created () {
    console.log('Inside List Created')
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
