<template>
  <content-app/>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import ContentApp from "@/components/content/content-app.vue";
// import HelloWorld from '@/components/HelloWorld.vue'; // @ is an alias to /src

export default defineComponent({
  name: 'Home',
  components: {
    ContentApp
  }
});
</script>
