<template>
  <div class="layout">
    <header class="header">
      <nav class="nav">
        <g-link class="nav__link" to="/">*</g-link>
      </nav>
    </header>

    <div class="container">
      <slot/>
    </div>

  </div>
</template>

<static-query>
query {
  metadata {
    siteName
  }
}
</static-query>

<style scoped>

  .container {
    max-width: unset;
  }

</style>
