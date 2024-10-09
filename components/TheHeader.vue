<template>
  <header class="header">
    <div class="container">
      <div class="header__wrapper">
        <NuxtLink to="/" class="header__logo">
          <img src="@/assets/icons/header-logo.svg" alt="">
        </NuxtLink>

        <nav class="header__nav">
          <ul class="header__list">
            <li>
              <NuxtLink to="/works">Works</NuxtLink>
            </li>
            <li>
              <NuxtLink to="/about">About</NuxtLink>
            </li>
          </ul>
        </nav>

        <div class="header__language">
          <img src="@/assets/icons/uk-flag.svg" alt="">
        </div>

        <button class="header__button">
          Let’s work
        </button>
      </div>
    </div>
  </header>
</template>

<style lang="scss" scoped>
.header {
  padding: 35px 0 34px;

  &__logo {
    display: block;
    margin-right: auto;

    img {
      display: block;
    }
  }

  &__language {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 52px;
    height: 52px;
    border-radius: 50%;
    border: 2px solid #0000001A;
    margin-right: 16px;
    cursor: pointer;

    img {
      display: block;
    }
  }

  &__list {
    display: flex;
    align-items: center;
    gap: 0 58px;
    margin-right: 91px;

    a {
      font-size: 20px;
      font-weight: 400;
      line-height: 20px;
      color: $black;
    }
  }

  &__wrapper {
    display: flex;
    align-items: center;
  }

  &__button {
    font-size: 20px;
    font-weight: 400;
    line-height: 20px;
    padding: 16px 32px;
    border: none;
    border-radius: 999px;
    background-color: $black;
    color: $white;
  }
}
</style>