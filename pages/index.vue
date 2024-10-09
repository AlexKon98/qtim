<template>
  <div class="main">
    <div class="container">
      <section class="main__posts">
        <h1 class="main__title">Articles</h1>

        <ul class="main__posts-list" v-if="!posts.isFetching">
          <template v-for="post in posts.posts" :key="post.id">
            <li v-if="post.visible">
              <ThePost :post="post" />
            </li>
          </template>
        </ul>

        <ThePagination v-if="!posts.isFetching" />

        <div v-else>
          Loading posts...
        </div>
      </section>
    </div>
  </div>
</template>

<script lang="ts" setup>
import ThePost from '~/components/MainPage/ThePost.vue';
import ThePagination from '~/components/MainPage/ThePagination.vue';

const posts = usePosts();
</script>

<style lang="scss" scoped>
.main {
  margin: 120px 0 140px;

  &__title {
    font-size: 84px;
    font-weight: 400;
    line-height: 84px;
    margin-bottom: 59px;
  }

  &__posts {
    &-list {
      display: flex;
      flex-wrap: wrap;
      gap: 40px 32px;

      li {
        width: calc(25% - 24px);
      }
    }
  }
}
</style>
