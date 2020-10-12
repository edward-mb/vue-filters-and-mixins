<template>
  <div class="container">
    <div class="columns">
      <div class="column">
        <h1>Filters & Mixins</h1>
        <div class="content">
          <ol>
            <!-- Exercise 1) -->
            <!-- Build a local Filter which reverses the Text it is applied on -->
            <li>{{ text | reverseText }}</li>
            <!-- Exercise 2 -->
            <!-- Build a global Filter which counts the length of a word and it appends it -->
            <!-- Like this: "Test" => Gets Filtered to => "Test (4)" -->
            <li>{{ text | countAppend }}</li>
            <!-- Exercise 3 -->
            <!-- Do the same as in Exercises 1 & 2, now with Computed Properties -->
            <li>{{ reversedAndCountedText }}</li>
            <!-- Exercise 4 -->
            <!-- Share the Computed Property rebuilding Exercise 2 via a Mixin -->
            <li>{{ countAndAppend }}</li>
          </ol>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  mixins: [
    {
      computed: {
        countAndAppend () {
          return `${this.text} ${this.text.length}`
        }
      }
    }
  ],
  data () {
    return {
      text: 'Hello there!'
    }
  },
  filters: {
    reverseText (value) {
      return value
        .split('')
        .reverse()
        .join('')
    }
  },
  computed: {
    reversedAndCountedText () {
      let reversed = this.text
        .split('')
        .reverse()
        .join('')
      return `${reversed} (${reversed.length})`
    }
  }
}
</script>

<style></style>
