<template>
  <section class="container-fluid">
    <div v-if="profile" class="row cover-img" :style="`background-image: url(${profile.coverImg})`">
      <div class="col-12 d-flex align-items-center justify-content-around">
        <img :src="profile.picture" alt="" class="img-fluid profile-picture rounded-circle elevation-5">
        <div class="bg-transparent rounded elevation-5 p-5">
          <h1 class="elevation-1">
            {{ profile.name }}
          </h1>
          <h2>
            {{ profile.bio }}
          </h2>
        </div>
      </div>

    </div>
    <div class="row">
      <div v-for="blog in blogs" class="col-md-4 col-12 p-4">
        <BlogCard :blog="blog" />
      </div>
    </div>
  </section>
</template>


<script>
import { AppState } from '../AppState';
import { computed, reactive, onMounted } from 'vue';
import { useRoute } from "vue-router";
import { logger } from "../utils/Logger";
import Pop from "../utils/Pop";
import { profilesService } from '../services/ProfilesService.js';
import BlogCard from '../components/BlogCard.vue';
export default {
  setup() {
    const route = useRoute();
    async function getProfileById() {
      try {

        await profilesService.getProfileById(route.params.profileId)
      } catch (error) {
        logger.error(error)
        Pop.error(error.message)
      }
    }
    onMounted(() => {
      getProfileById();
    })
    return {
      profile: computed(() => AppState.activeProfile)
    }
  },
  components: { BlogCard }
};
</script>


<style lang="scss" scoped>
.cover-img {
  min-height: 50vh;
  background-size: cover;
  background-position: center;
}

.profile-picture {
  height: 30vh;
  width: 30vh;
}
</style>