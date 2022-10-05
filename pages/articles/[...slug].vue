<template>
  <section class="site-section pt-5">
    <div class="container">
      <div class="row blog-entries">
        <div class="col-md-12 col-lg-8 main-content">
          <div class="row">
            <div class="col-md-12">
              <img :src="content.image" alt="Image" class="img-fluid mb-5">
              <div class="post-meta">
                <span class="mr-2">{{content.date}}</span> •
              </div>
              <h2 class="mb-4">{{content.title}}</h2>
              <div v-html="marked(content.text)" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import {marked} from 'marked';

let { slug } = useRoute().params
if (slug.length > 1) slug = slug.join('/')

const storyblokApi = useStoryblokApi()
const { data } = await storyblokApi.get('cdn/stories/articles/' + slug, {version: 'draft'})

const content =  data.story.content
</script>

<style scoped>

</style>
