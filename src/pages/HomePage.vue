<template>
  <section class="row align-items-center">
    <div class="col-12 d-flex ">
      <div class="row justify-content-center">
        <div v-for="b in blogs" class="col-md-8 card d-flex m-3">
          <!-- <div class="d-flex">
            <div class=" col-2">

              <img :src="b.creator.picture" alt="" class="img-creator rounded-circle pt-2">
              {{ b.createdAt }}
            </div>
            <div class="p-3 col-7">
              <h2>{{ b.title }}</h2>
              <h5>{{ b.body.slice(0, 60) }}...</h5>
            </div>
            <div class="text-end col-3">
              <img :src="b.imgUrl" alt="" class=" img-smaller elevation-5 my-2 ">
            </div>
          </div> -->
          <BlogCard :blog="b" />
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import { onMounted, computed } from "vue";
import { logger } from "../utils/Logger";
import Pop from "../utils/Pop";
import { blogsService } from '../services/BlogsService.js'
import { AppState } from "../AppState";
import BlogCard from "../components/BlogCard.vue";

export default {
  setup() {
    async function getBlogs() {
      try {
        await blogsService.getBlogs();
      }
      catch (error) {
        logger.error(error);
        Pop.error(error.message);
      }
    }
    onMounted(() => {
      getBlogs();
    });
    return {
      blogs: computed(() => AppState.blogs)
    };
  },
  components: { BlogCard }
}
</script>

<style scoped lang="scss">

</style>
