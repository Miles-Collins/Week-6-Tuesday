<template>
<div>
  <img :src="photo.img" alt="">
</div>
<div>
  <p>{{ photo.body }}</p>
</div>

</template>

<script>
import { AppState } from "../AppState";
import { Photo } from "../models/Photo.js";


export default {
  props: {
    photo: {type: Photo, required: true}
  },
setup(props) {

  return {

    setActivePhoto() {
      AppState.activePhoto = props.photo
    }
  }
}
}
</script>


<style> 



</style>