<template>
  <div class="home">
    <h2>Welcome to My Blog</h2>
    <div class="search-filter">
      <input v-model="store.searchTerm" placeholder="Search posts...">
      <select v-model="store.selectedCategory">
        <option value="">All Categories</option>
        <option v-for="category in store.categories" :key="category" :value="category">
          {{ category }}
        </option>
      </select>
    </div>
    <div v-for="post in store.filteredPosts" :key="post.id" class="blog-post-preview">
      <h3>
        <router-link :to="{ path: `/post/${post.id}` }">{{ post.title }}</router-link>
      </h3>
      <p class="post-meta">Posted on {{ post.date }} | Category: {{ post.category }}</p>
      <p>{{ post.excerpt }}</p>
    </div>
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

<style scoped>
.search-filter {
  margin-bottom: 1rem;
}

.search-filter input, .search-filter select {
  margin-right: 1rem;
  padding: 0.5rem;
}

.blog-post-preview {
  margin-bottom: 2rem;
  padding-bottom: 1rem;
  border-bottom: 1px solid #eee;
}

h3 {
  margin-bottom: 0.5rem;
}

a {
  color: #3498db;
  text-decoration: none;
}

a:hover {
  text-decoration: underline;
}

.post-meta {
  font-size: 0.9em;
  color: #777;
}
</style>