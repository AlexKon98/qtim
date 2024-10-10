<template>
  <ul class="pagination">
    <li class="arrow left" @click="posts.previousPage" v-if="posts.currentPage > 1">
      <img src="@/assets/icons/arrow.svg" alt="">
    </li>
    <li
      v-for="page in posts.totalPages"
      :key="page"
      :class="{active: page === posts.currentPage}"
      @click="posts.setCurrentPage(page)"
    >
      {{ page }}
    </li>
    <li class="arrow right" @click="posts.nextPage" v-if="posts.currentPage < posts.totalPages">
      <img src="@/assets/icons/arrow.svg" alt="">
    </li>
  </ul>
</template>

<script lang="ts" setup>
const posts = usePosts();
</script>

<style lang="scss" scoped>
.pagination {
  margin-top: 50px;
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  align-items: center;

  li {
    cursor: pointer;
    font-size: 16px;
    font-weight: 400;
    line-height: 8px;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 44px;
    height: 44px;
    border-radius: 12px;
    transition: background-color .3s ease;
    background-color: $lightGrey;

    &.active {
      color: $white;
      background-color: $black;
    }

    &:not(.active, .arrow):hover {
      background-color: #E8E8E8;
    }

    &.arrow {
      border: 1px solid $lightGrey;
      background-color: $white;

      &.left {
        transform: rotate(180deg);
      }

      &:hover {
        background-color: $lightGrey;
      }
    }
  }
}
</style>
