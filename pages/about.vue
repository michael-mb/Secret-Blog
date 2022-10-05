<template>
  <StoryblokComponent v-if="story" :blok="story.content" />
</template>

<script setup>
const story = await useStoryblok('about', { version: 'draft' }, { customParent: 'http://localhost:3000'})
</script>
