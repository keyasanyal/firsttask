<template>
  <div id="app">
    <div id="nav">
      <!-- GBC START -->
      <!-- GBC END -->
      
      <router-link to="/">Home</router-link>
      <router-link to="/home">Home</router-link>
      <router-link to="/calendar">Calendar</router-link>
      <router-link to="/add">Add</router-link>
      <router-link to="/work">Work</router-link>
      <router-link to="/school">School</router-link>
      <img src="@/assets/logo2.png" id="logo">

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
  font-family: 'Roboto', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  /* color: #2c3e50; */
  color:black;
  /* ^ almost all text on every page */
}
#nav {
  display: inline-block;
  height:80px;
  width: 100%;
  background-color: #2c3e50;
  border: 2px solid black;
  }

#nav a {
  font-weight: bold;
  color:blue;
}

#nav a.router-link-exact-active {
  color: green;
}

#logo {
  width: 30%;
  margin-top: 35px;
  margin-left: auto;
  margin-right: 20px;
} 
</style>