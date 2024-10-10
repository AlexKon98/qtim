<template>
  <div class="post">
    <div class="post__image">
      <img :src="post.image" alt="">
    </div>

    <p class="post__preview">{{ post.preview }}</p>

    <NuxtLink class="post__link" :to="'post/' + post.id">Read more</NuxtLink>
  </div>
</template>

<script lang="ts" setup>
import type { PostItem } from '~/api/modules/posts/types';

defineProps<{
  post: PostItem
}>();
</script>

<style lang="scss" scoped>
.post {
  position: relative;

  &__image {
    transition: transform .3s ease;
    background-color: $grey;
    margin-bottom: 24px;

    img {
      max-width: 100%;
      height: 280px;
      object-fit: cover;
      display: block;
    }
  }

  &__preview {
    transition: transform .3s ease;
    font-size: 20px;
    font-weight: 400;
    line-height: 24px;
    margin-bottom: 12px;
  }

  &__link {
    position: absolute;
    left: 0;
    bottom: 0;
    font-size: 20px;
    font-weight: 400;
    line-height: 24px;
    opacity: 0;
    transition: opacity .3s ease;
    color: $lightPurple;
  }

  &:hover {
    .post__link {
      opacity: 1;
    }

    .post__image, .post__preview {
      transform: translateY(-24px);
    }
  }
}
</style>
