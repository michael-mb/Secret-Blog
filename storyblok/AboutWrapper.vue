<template>
  <div class="container-fluid" style="margin-bottom: 400px;margin-top: 100px">
    <div class="row">
      <div class="col-1 col-lg-4" />
      <div class="col-md-10 col-lg-4">
        <div class="sidebar-box">
          <div class="bio text-center">
            <img :src="blok.image" alt="Image Placeholder" class="img-fluid">
            <div class="bio-body">
              <h2>{{blok.name}}</h2>
              <p>{{blok.description}}</p>
              <p><a :href="blok.github_link" class="btn btn-primary btn-sm">More</a></p>
              <p class="social">
                <a :href="blok.github_link" class="p-2"><span class="fa fa-github"></span></a>
              </p>
            </div>
          </div>
        </div>
      </div>
      <div class="col-1 col-lg-4" />
    </div>
  </div>
</template>

<script setup>
defineProps({ blok: Object });
</script>

<style scoped>

</style>
