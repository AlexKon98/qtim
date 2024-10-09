<template>
  <div class="post">
    <div class="container" v-if="!posts.isFetching">
      <h1 class="post__title">{{ post?.title }}</h1>

      <div class="post__image">
        <img :src="post?.image" alt="">
      </div>

      <h2 class="post__subtitle">About</h2>

      <p class="post__description">{{ post.description }}</p>
    </div>

    <div class="container" v-else>
      Loading post...
    </div>
  </div>
</template>

<script lang="ts" setup>
import { watch, ref, type Ref } from 'vue';
import type { PostItem } from '~/api/modules/posts/types';

const route = useRoute();

const posts = usePosts();

const post: Ref<PostItem> = ref({} as PostItem);

watch(() => posts.posts, (value: PostItem[]) => {
  post.value = value.find(post => post.id === route.params.id) || {} as PostItem;
}, {deep: true, immediate: true});
</script>

<style lang="scss" scoped>
.post {
  margin: 119px 0 80px;

  &__title {
    font-size: 84px;
    font-weight: 400;
    line-height: 84px;
    margin-bottom: 73px;
  }

  &__image {
    height: 700px;
    margin-bottom: 80px;
    background-color: $grey;

    img {
      width: 100%;
      height: 100%;
    }
  }

  &__subtitle {
    font-size: 16px;
    font-weight: 400;
    line-height: 16px;
    margin-bottom: 32px;
  }

  &__description {
    max-width: 695px;
    font-size: 36px;
    font-weight: 400;
    line-height: 44.64px;
  }
}
</style>