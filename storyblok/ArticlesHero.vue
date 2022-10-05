<template>
  <section v-editable="blok"  class="site-section py-sm mh-400" data-test="articlesHero">
    <div class="container">
      <div class="row">
        <div class="col-md-6">
          <h2 class="mb-4">{{ blok.title }}</h2>
        </div>
      </div>

      <div class="row blog-entries">
        <div class="col-md-12 col-lg-12 main-content">
          <div class="row">
            <div class="col-md-4" v-for="article in blok.articles" :key="article">
              <ArticleTeaser v-if="article" :id="article"/>
            </div>
          </div>
        </div>
      </div>

    </div>
  </section>


</template>

<script setup>
defineProps({ blok: Object });
</script>

<style scoped>

</style>
