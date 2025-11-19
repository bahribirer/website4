<template>
  <section class="member-detail" v-if="member">
    <div class="container">
      <div class="header">
        <img :src="member.image" :alt="member.name" class="photo" />
        <div class="info">
          <h1>{{ member.name }}</h1>
          <h3 class="title">{{ member.title }}</h3>
          <p class="expertise" v-if="member.expertise">{{ member.expertise }}</p>
        </div>
      </div>

      <div class="content">
        <p>{{ member.about }}</p>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { useRoute } from 'vue-router'
import { teamMembers } from '../data/team'

const route = useRoute()
const slug = route.params.slug as string

const member = teamMembers.find(m => m.slug === slug)
</script>

<style scoped>
.member-detail {
  padding: 5rem 0;
  font-family: 'Poppins', sans-serif;
}

.header {
  display: flex;
  align-items: center;
  gap: 2rem;
  margin-bottom: 2rem;
}

.photo {
  width: 160px;
  height: 160px;
  border-radius: 50%;
  object-fit: cover;
}

.info h1 {
  font-size: 2rem;
  color: #0b1b3f;
  font-weight: 600;
}

.title {
  color: #b01c1c;
  font-weight: bold;
}

.expertise {
  color: #666;
  margin-top: 0.3rem;
}

.content {
  margin-top: 1.5rem;
  line-height: 1.9;
  color: #444;
  font-size: 1.05rem;
}
</style>
