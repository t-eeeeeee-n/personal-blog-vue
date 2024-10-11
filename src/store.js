import { reactive } from 'vue'

export const store = reactive({
  posts: [
    { id: 1, title: "My First Blog Post", excerpt: "This is the beginning of my blogging journey...", content: "Full content of the first blog post.", date: "2023-05-01", category: "Personal" },
    { id: 2, title: "Vue.js is Amazing", excerpt: "Let me tell you why I love Vue.js...", content: "Full content about Vue.js.", date: "2023-05-05", category: "Technology" },
    { id: 3, title: "The Future of Web Development", excerpt: "What does the future hold for web developers?", content: "Full content about the future of web development.", date: "2023-05-10", category: "Technology" },
  ],
  darkMode: false,
  toggleDarkMode() {
    this.darkMode = !this.darkMode
    document.body.classList.toggle('dark-mode', this.darkMode)
  },
  searchTerm: '',
  selectedCategory: '',
  get filteredPosts() {
    return this.posts.filter(post => 
      post.title.toLowerCase().includes(this.searchTerm.toLowerCase()) &&
      (this.selectedCategory === '' || post.category === this.selectedCategory)
    )
  },
  categories: ['Personal', 'Technology'],
  addComment(postId, comment) {
    const post = this.posts.find(p => p.id === postId)
    if (post) {
      if (!post.comments) post.comments = []
      post.comments.push(comment)
    }
  }
})