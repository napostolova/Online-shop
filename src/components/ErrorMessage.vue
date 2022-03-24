<template>
  <p v-if="isVisible" class="error-message">
      <slot/>
  </p>
</template>

<script>
export default {
    props: {
        isVisible: Boolean,
    }
};
</script>

<style>

</style>