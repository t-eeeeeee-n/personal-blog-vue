<template>
  <div v-if="post" class="blog-post">
    <h2>{{ post.title }}</h2>
    <p class="post-meta">Posted on {{ post.date }} | Category: {{ post.category }}</p>
    <div v-html="post.content"></div>
    <div class="comments-section">
      <h3>Comments</h3>
      <ul v-if="post.comments && post.comments.length">
        <li v-for="(comment, index) in post.comments" :key="index">{{ comment }}</li>
      </ul>
      <p v-else>No comments yet.</p>
      <form @submit.prevent="addComment">
        <textarea v-model="newComment" placeholder="Add a comment..."></textarea>
        <button type="submit">Submit Comment</button>
      </form>
    </div>
  </div>
  <div v-else>
    <p>Loading post...</p>
  </div>
</template>

<script>
import { inject, ref, computed } from 'vue'
import { useRoute } from 'vue-router'

export default {
  setup() {
    const store = inject('store')
    const route = useRoute()
    const newComment = ref('')

    const post = computed(() => {
      return store.posts.find(p => p.id === parseInt(route.params.id))
    })

    const addComment = () => {
      if (newComment.value.trim()) {
        store.addComment(post.value.id, newComment.value)
        newComment.value = ''
      }
    }

    return { post, newComment, addComment }
  }
}
</script>

<style scoped>
.blog-post {
  background-color: white;
  padding: 2rem;
  border-radius: 8px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
}

.post-meta {
  color: #777;
  font-style: italic;
  margin-bottom: 1rem;
}

.comments-section {
  margin-top: 2rem;
  border-top: 1px solid #eee;
  padding-top: 1rem;
}

.comments-section ul {
  list-style-type: none;
  padding: 0;
}

.comments-section li {
  margin-bottom: 0.5rem;
  padding: 0.5rem;
  background-color: #f9f9f9;
  border-radius: 4px;
}

.comments-section form {
  margin-top: 1rem;
}

.comments-section textarea {
  width: 100%;
  height: 100px;
  margin-bottom: 0.5rem;
}

.comments-section button {
  background-color: #3498db;
  color: white;
  border: none;
  padding: 0.5rem 1rem;
  cursor: pointer;
  border-radius: 4px;
}

.comments-section button:hover {
  background-color: #2980b9;
}
</style>