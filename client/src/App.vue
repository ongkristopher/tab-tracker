<script setup></script>

<template>
  <div id="app">
    <!-- logo if you want -->
    <!-- <img src="./assets/logo.png" alt="Vue logo" /> -->
    <nav>
      <router-link to="/">Home</router-link> |
      <router-link to="/register">Register</router-link>
    </nav>
    <!-- This is where your pages (routes) will render -->
    <router-view />
  </div>
</template>

<style scoped>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}</style>
