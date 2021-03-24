<template>
  <footer class="base-footer">
    <a
      href="https://github.com/emanuelgsouza/test-my-pronunciation"
      title="Visite a página da aplicação no Github"
    >
      <img class="github-logo" src="/img/github.svg" />
    </a>
    <span> v0.0.1 </span>
  </footer>
</template>

<style>
.base-footer {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}

.base-footer span {
  text-align: center;
  font-size: 10px;

  @apply mt-1;
}

.base-footer .github-logo {
  width: 20px;
  height: 20px;
}
</style>
