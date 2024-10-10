import { defineStore, skipHydrate } from 'pinia';
import { ref, type Ref, computed, watch } from 'vue';
import type { PostItem } from '~/api/modules/posts/types';

const usePostsStore = defineStore('posts', () => {
  const { $api } = useNuxtApp();

  const isInitialized: Ref<boolean> = ref(false);
  const isFetching: Ref<boolean> = ref(true);

  const posts: Ref<Array<PostItem>> = ref([] as Array<PostItem>);

  const itemsPerPage = 8;
  const currentPage = ref(1);
  const totalPages = computed(() => Math.ceil(posts.value.length / itemsPerPage));

  const paginatedItems = () => {
    const start = (currentPage.value - 1) * itemsPerPage;
    const end = start + itemsPerPage;

    posts.value.forEach((post, i) => {
      if (i >= start && i < end) post.visible = true;
      else post.visible = false;
    });
  };

  const setCurrentPage = (page: number) => {
    currentPage.value = page;
  };

  const nextPage = () => {
    if (currentPage.value < totalPages.value) {
      currentPage.value++;
    }
  };

  const previousPage = () => {
    if (currentPage.value > 1) {
      currentPage.value--;
    }
  };

  watch(() => currentPage.value, () => {
    paginatedItems();
  }, {immediate: true});

  const initialize = async () => {
    try {
      const res = await $api.posts.getPosts();

      posts.value = res;

      paginatedItems();
    } catch (err) {
      console.log(err);
    } finally {
      isInitialized.value = true;
      isFetching.value = false;
    }
  };

  return {
    setCurrentPage,
    paginatedItems,
    nextPage,
    previousPage,
    initialize,
    isInitialized,
    isFetching,
    currentPage,
    totalPages,
    posts: skipHydrate(posts)
  };
});

export const usePosts = () => {
  const postsStore = usePostsStore();
  if (!postsStore.isInitialized) postsStore.initialize();
  return postsStore;
}
