<template>
<div v-if="photo">
  <Photo :photo="photo" />
</div>
<div v-else>
  loading....
</div>
</template>

<script>
import { computed, onMounted } from "@vue/runtime-core";
import { AppState } from "../AppState";
import { photosService } from "../services/PhotosService.js";
import { logger } from "../utils/Logger";
import Pop from "../utils/Pop";

export default {
setup() {

  async function getPhoto() {
    try {
      await photosService.getPhoto()
    } catch (error) {
      logger.error(['Getting Nasa Photo'], error)
      Pop.toast(error.message, 'error')
    }
  }

  onMounted(() =>  {
    getPhoto()
  })

  return {
    // PROXY.ON
    photo: computed(() => AppState.photo)
  }
},

};



</script>

<style> 
</style>