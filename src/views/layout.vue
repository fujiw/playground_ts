<template lang="pug">
  .layout-root
    Header
    Navigation.nav
    main.main
      slot
    .foot
      Footer.footer
</template>

<script lang="ts">
import Vue from 'vue'
import Header from '@/components/Header.vue'
import Navigation from '@/components/Navigation.vue'
import Footer from '@/components/Footer.vue'

import('../../wasm/pkg').then(mod => {
  mod.greet('hello')
})

export default Vue.extend({
  components: {
    Header,
    Navigation,
    Footer
  }
})
</script>

<style lang="scss" scoped>
  .layout-root {
    display: flex;
    flex-direction: column;
    overflow: hidden;
    min-height: 100vh;
    padding-top: 56px;
  }

  .nav {
    width: 100%;
    align-self: center;
    margin: 10px 0 0;
  }

  .foot {
    position: relative;
    margin-top: auto;
  }

  .footer {
    margin-top: 80px;
    margin-bottom: 25px;
  }

</style>
