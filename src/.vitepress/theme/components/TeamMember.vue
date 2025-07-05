<script setup>
defineProps({
  name: String,
  role: String,
  bio: String,
  image: String,
  github: String,
  twitter: String
})
</script>

<template>
  <div class="team-member">
    <img :src="image" :alt="name">
    <h3>{{ name }}</h3>
    <p class="role">{{ role }}</p>
    <p class="bio">{{ bio }}</p>
    <div class="social-links">
      <a v-if="github" :href="github" target="_blank" rel="noopener">GitHub</a>
      <a v-if="twitter" :href="twitter" target="_blank" rel="noopener">Twitter</a>
    </div>
  </div>
</template> 