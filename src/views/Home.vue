<template>
  <h1>{{ msg }}</h1>
</template>

<script>
export default {
  name: 'HomeView',
  components: {
  },
  setup () {
    const msg = 'Hello World'
    return {
      msg
    }
  }
}
</script>
