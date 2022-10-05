<template>

  <a :href="fullSlug" class="blog-entry">
    <img :src="articleContent.image" alt="Image placeholder">
    <div class="blog-content-body">
      <div class="post-meta">
        <span class="author mr-2">{{ articleContent.author }}</span>&bullet;
        <span class="mr-2">{{articleContent.date}} </span> &bullet;
      </div>
      <h2>{{articleContent.teaser}}</h2>
    </div>
  </a>
</template>

<script setup>
const props = defineProps(["id"])
const storyblokApi = useStoryblokApi()
const { data } = await storyblokApi.get('cdn/stories/', {
  version: 'draft',
  by_uuids: props.id,
})


const articleContent = data.stories[0].content
const fullSlug = data.stories[0].full_slug
</script>

<style scoped>
img{
  width: 350px;
  height: 300px;
}
</style>
