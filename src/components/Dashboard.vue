<template>
  <div id="dashboard">
      <h1> Authenticated! </h1>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'

export default {
  name: 'Dashboard',
  components: {},
  data () {
    return {}
  },
  computed: {
    ...mapGetters
  },
  methods: {
    ...mapActions(['bindCustomersRef'])
  },
  created () {
    this.bindCustomersRef()
  }
}
</script>

<style>

</style>
