<template>
  <div class="app" :class="{ 'dark-mode': store.darkMode }">
    <header>
      <h1>My Personal Blog</h1>
      <nav>
        <router-link to="/">Home</router-link>
        <button @click="store.toggleDarkMode">Toggle Dark Mode</button>
      </nav>
    </header>
    <main>
      <router-view></router-view>
    </main>
    <footer>
      <p>&copy; 2023 My Personal Blog. All rights reserved.</p>
    </footer>
  </div>
</template>

<script>
import { inject } from 'vue'

export default {
  setup() {
    const store = inject('store')
    return { store }
  }
}
</script>

<style>
body {
  font-family: Arial, sans-serif;
  line-height: 1.6;
  color: #333;
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
  background-color: #f4f4f4;
  transition: background-color 0.3s, color 0.3s;
}

.app {
  background-color: white;
  border-radius: 8px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  overflow: hidden;
  transition: background-color 0.3s, color 0.3s;
}

.dark-mode {
  background-color: #333;
  color: #f4f4f4;
}

.dark-mode .app {
  background-color: #222;
  color: #f4f4f4;
}

header {
  background-color: #3498db;
  color: white;
  text-align: center;
  padding: 1rem;
}

header h1 {
  margin: 0;
}

nav {
  margin-top: 1rem;
}

nav a, nav button {
  color: white;
  text-decoration: none;
  padding: 0.5rem 1rem;
  border-radius: 4px;
  transition: background-color 0.3s;
  margin: 0 0.5rem;
}

nav a:hover, nav button:hover {
  background-color: rgba(255, 255, 255, 0.2);
}

nav button {
  background: none;
  border: 1px solid white;
  cursor: pointer;
}

main {
  padding: 2rem;
}

footer {
  text-align: center;
  padding: 1rem;
  background-color: #34495e;
  color: white;
}
</style>
