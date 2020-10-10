<template>
  <div class="container">
    <div class="columns">
      <div class="column is-full">
        <h1 class="is-size-1">Filters & Mixings</h1>
        <p>{{ text | toUppercase | toLowercase }}</p>
        <hr />
        <div class="field">
          <div class="control">
            <input
              class="input"
              type="text"
              v-model="filterText"
              placeholder="Filter"
            />
          </div>
        </div>
        <div class="content">
          <ul>
            <li v-for="fruit in filteredFruits" :key="fruit">{{ fruit }}</li>
          </ul>
        </div>
        <hr />
        <app-list></app-list>
      </div>
    </div>
  </div>
</template>

<script>
import { fruitMixing } from './fruitMixing'
import List from './List'

export default {
  mixins: [fruitMixing],
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
  components: {
    appList: List
  }
}
</script>

<style></style>
