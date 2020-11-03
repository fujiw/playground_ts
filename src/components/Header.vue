<template>
  <div class="header">
    <div class="inner">
      <div class="top">
        <a href="/" target="_blank">
          <img class="logo" alt="logo" src="../assets/logo.png">
        </a>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({})
</script>

<style lang="scss" scoped>
  .header {
    display: flex;
    flex-direction: column;
    position: fixed;
    top: 0;
    right: 0;
    left: 0;
    border-bottom: 1px solid black;
    justify-content: center;
    background-color: #2c3e50;
  }

  .inner {
    width: 100%;
    display: flex;
    align-items: center;
    align-self: center;
  }

  .top {
    margin-right: auto;
  }

  .logo {
    width: 50px;
    height: 50px;
  }
</style>
