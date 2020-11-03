<template>
  <div class="_app">
    <router-view name="layout" #default>
      <router-view/>
    </router-view>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({})
</script>
