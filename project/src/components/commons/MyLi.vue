<template>
  <li>
    <slot></slot>
  </li>
</template>

<script>
  export default {
    name: 'my-li',
    data () {
      return {
        
      }
    }
  }
</script>

<style scoped>
  li {
    float: left;
    height: 22%;
    line-height: 218px;
    width: 33%;
    margin: 1 1 0 0;
    text-align: center;
    position: relative;
  }
</style>
