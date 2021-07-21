<template>
  <div>
    <content-app/>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import ContentApp from "@/components/content/content-app.vue";

export default defineComponent({
  name: 'Home',
  components: {
    ContentApp
  }
});
</script>