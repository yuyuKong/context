<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <span class="svg-container svg-container_login">
        <svg-icon icon-class="test" />
    </span>
    <div class="svg-container">
       <svg-icon icon-class="password"></svg-icon>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
.svg-container {
  font-size: 40px;
  color: red;
}
</style>
