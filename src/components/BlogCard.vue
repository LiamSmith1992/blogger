<template>

  <div class="d-flex">
    <div class=" col-2">
      <router-link :to="{ name: 'Profile', params: { profileId: blog.creatorId } }">
        <img :src="blog.creator.picture" alt="" class="img-creator rounded-circle pt-2">
      </router-link>
      {{ new Date(blog.createdAt).toLocaleString() }}
    </div>
    <div class="p-3 col-7">
      <h2>{{ blog.title }}</h2>
      <h5>{{ blog.body.slice(0, 60) }}...</h5>
    </div>
    <div class="text-end col-3">
      <img :src="blog.imgUrl" alt="" class=" img-smaller elevation-5 my-2 ">
    </div>
  </div>

</template>


<script>
import { AppState } from '../AppState';
import { computed, reactive, onMounted } from 'vue';
import { Blog } from "../models/Blog";
import { useRoute } from "vue-router";
import { blogsService } from '../services/BlogsService.js'
export default {
  props: {
    blog: {
      type: Blog,
      required: true
    }
  },
  setup(props) {
    const route = useRoute()
    return {
      route,
      setActiveBlog() {
        blogsService.setActiveBlog(props.blog)
      }

    }
  }
};
</script>


<style lang="scss" scoped>
.img-smaller {
  height: 150px;
  width: 150px;
}

.img-creator {
  height: 75px;
  width: 75px;
}
</style>