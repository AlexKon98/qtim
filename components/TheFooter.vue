<template>
  <footer class="footer">
    <div class="container">
      <div class="footer__wrapper">
        <div class="footer__top">
          <div class="footer__content">
            <p class="footer__description">Is there a project?</p>

            <div class="footer__text">
              <img src="@/assets/icons/together.svg" alt="">
            </div>
          </div>

          <nav class="footer__nav">
            <ul class="footer__list">
              <li>
                <p>For all questions</p>
                <a href="tel:+79202780068">+7 (920) 278—00—68</a>
                <a href="mailto:qtim@agency.com">qtim@agency.com</a>
              </li>

              <li>
                <p>Office in Russia</p>
                <span>139 Ruben Station Lake Drew, NM 52678</span>
                <a href="#" class="location">
                  <img src="@/assets/icons/footer-location.svg" alt="">
                </a>
              </li>

              <li>
                <p>Office in Dubai</p>
                <span>139 Ruben Station Lake Drew, NM 52678</span>
                <a href="#" class="location">
                  <img src="@/assets/icons/footer-location.svg" alt="">
                </a>
              </li>
            </ul>
          </nav>
        </div>

        <div class="footer__bottom">
          <ul class="footer__social left">
            <li>
              <a href="https://facebook.com" target="_blank">Facebook</a>
            </li>
            <li>
              <a href="https://instagram.com" target="_blank">Instagram</a>
            </li>
            <li>
              <a href="https://telegram.com" target="_blank">Telegram</a>
            </li>
          </ul>

          <button class="footer__button">
            <span>Go</span>
          </button>

          <ul class="footer__social right">
            <li>
              <a href="https://behance.com" target="_blank">Behance</a>
            </li>
            <li>
              <a href="https://linkedin.com" target="_blank">Linkedn</a>
            </li>
            <li>
              <NuxtLink to="/privacy">Privacy Policy</NuxtLink>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </footer>
</template>

<style lang="scss" scoped>
.footer {
  overflow: hidden;
  margin-top: auto;
  padding: 140px 0 30px;
  background-color: $lightPurple;

  &__wrapper {
    display: flex;
    flex-direction: column;
    gap: 322px 0;
  }

  &__top {
    display: flex;
    align-items: flex-start;
  }

  &__text {
    pointer-events: none;
  }

  &__content {
    max-width: 464px;
    margin-right: auto;
  }

  &__description {
    font-size: 16px;
    font-weight: 400;
    line-height: 19.2px;
    letter-spacing: 0.01em;
    margin-bottom: 56px;
  }

  &__list {
    display: flex;
    flex-direction: column;
    width: 152px;
    gap: 36px 0;

    li {
      display: flex;
      flex-direction: column;

      p {
        font-size: 16px;
        font-weight: 400;
        line-height: 19.2px;
        letter-spacing: 0.01em;
        margin-bottom: 12px;
      }

      span {
        font-size: 16px;
        font-weight: 400;
        line-height: 19.2px;
        letter-spacing: 0.01em;
        padding-bottom: 8px;
        color: $black;
      }

      a {
        font-size: 16px;
        font-weight: 400;
        line-height: 19.2px;
        letter-spacing: 0.01em;
        margin-bottom: 4px;
        color: $black;

        &:last-child {
          margin-bottom: 0;
        }

        &.location {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 32px;
          height: 32px;
          border-radius: 50%;
          background-color: $black;

          img {
            display: block;
          }
        }
      }
    }
  }

  &__bottom {
    position: relative;
    display: flex;
    align-items: center;
  }

  &__social {
    display: flex;
    align-items: center;
    gap: 0 32px;

    a {
      position: relative;
      font-size: 16px;
      font-weight: 400;
      line-height: 19.2px;
      letter-spacing: 0.01em;
      color: $black;

      &::after {
        content: '';
        position: absolute;
        left: 0;
        right: 0;
        bottom: -2px;
        height: .4px;
        background-color: $black;
      }
    }

    &.left {
      margin-right: auto;
    }

    &.right {
      margin-left: auto;
    }
  }

  &__button {
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    left: 50%;
    bottom: -30px;
    transform: translateY(179px) translateX(-50%);
    font-size: 32px;
    font-weight: 400;
    line-height: 32px;
    border: none;
    width: 358px;
    height: 358px;
    border-radius: 50%;
    color: $white;
    background-color: $black;

    span {
      transform: translateY(-40px);
    }
  }
}
</style>