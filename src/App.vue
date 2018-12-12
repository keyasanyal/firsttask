<template>
  <div id="app">
    <div id="nav">
      <!-- GBC START -->
        <img src="/assets/logo2.png" id="logo">
      <!-- GBC END -->
      <router-link to="/">Home</router-link>
      <router-link to="/calendar">Calendar</router-link>
      <router-link to="/add">Add</router-link>
      <router-link to="/work">Work</router-link>
      <router-link to="/school">School</router-link>

    </div>
    <router-view/>
  </div>
</template>

<script>
// @ is an alias to /src
// import "./assets/javascripts/app.js";
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
#nav {
  padding: 0px;
  height: 80px;
  width: 100%;
  background-color: none;
  }

#nav a {
  font-weight: bold;
  color: gray;
}

#nav a.router-link-exact-active {
  color: black;
}

#logo {
  width: 30%;
  display: block;
  margin-left: auto;
  margin-right: auto;
  margin-top: 20px;
  margin-bottom: 20px;
}
</style>