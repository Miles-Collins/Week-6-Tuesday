<template>
<div>
  <Photo />
</div>
<div >
  loading....
</div>
</template>

<script>
import { computed, onMounted } from "@vue/runtime-core";
import { AppState } from "../AppState";
import { photosService } from "../services/PhotosService.js";
import { logger } from "../utils/Logger";
import Pop from "../utils/Pop";
import Photo from "../components/Photo.vue";


export default {
    setup() {
        async function getPhoto() {
            try {
                await photosService.getPhoto();
            }
            catch (error) {
                logger.error(["Getting Nasa Photo"], error);
                Pop.toast(error.message, "error");
            }
        }
        onMounted(() => {
            getPhoto();
        });
        return {
            // PROXY.ON
            photo: computed(() => AppState.photo)
        };
    },
    components: { Photo, Photo }
};



</script>

<style> 
</style>