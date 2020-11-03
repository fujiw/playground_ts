<template>
  <div class="navigation">
    <ul class="list">
      <li class="item">
        <router-link to="/">Home</router-link>
      </li>
      <li class="item">
        <router-link to="/about">About</router-link>
      </li>
    </ul>
  </div>
</template>

<style lang="scss" scoped>
  .navigation {
    display: flex;
    flex-direction: column;

    background-color: aqua;

    .list {
      display: flex;
    }

    .item {
      flex: 1 1 20%;
      display: flex;
    }
  }
</style>
