<template>
  <div class="app-wrapper">
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  components: {},
  data: function() {
    return {};
  },
  methods: {}
};
</script>


<style lang="scss" >
@import url("https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,300;0,400;0,500;1,300&display=swap");
@import url("https://fonts.googleapis.com/css2?family=Poppins:wght@100;200;300;400;500;600;700;900&display=swap");

:root {
  font-size: 13px;
  @media screen and (min-width: 576px) {
    font-size: 14px;
  }
  @media screen and (min-width: 768px) {
    font-size: 15px;
  }
  @media screen and (min-width: 992px) {
    font-size: 16px;
  }
  @media screen and (min-width: 1200px) {
    font-size: 17px;
  }
}

body {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
  font-family: "Poppins", sans-serif;
  -webkit-font-smoothing: antialiased;
  text-rendering: optimizeLegibility;
}

h1 {
  font-size: 3rem;
  letter-spacing: 0.03em;
  line-height: 1.1em;
  margin: 0 0 0.5em;
  font-weight: 600;
}

h2 {
  font-size: 2rem;
  letter-spacing: 0.03em;
  line-height: 1.2em;
  margin: 0 0 0.5em;
}

h3 {
  font-size: 1.5rem;
  letter-spacing: 0.03em;
  line-height: 1.2em;
  margin: 0 0 0.5em;
}

h4 {
  font-size: 1.3rem;
  letter-spacing: 0.03em;
  line-height: 1.2em;
  margin: 0 0 0.5em;
}

p {
  font-size: 1.1rem;
  letter-spacing: 0.03em;
  line-height: 1.6em;
  margin: 0 0 0.5em;
  @media screen and (min-width: 576px) {
  }
  @media screen and (min-width: 768px) {
    font-size: 1rem;
    letter-spacing: 0.03em;
    line-height: 1.6em;
  }
}

img,
li,
a {
  font-size: 1rem;
}

a {
  text-decoration: none;
  &:hover {
    text-decoration: none;
  }
}

.app-wrapper {
  height: 100vh;
  width: 100vw;
  max-height: 100vh;
}

.tabs-component {
  font-size: 0.8rem;

  .is-active {
    border-bottom: solid 2px #1c6efc;
    color: #1c6efc;
  }

  .tabs-component-tabs {
    padding: 1rem 2rem;
    padding-bottom: 0;
    border-bottom: solid 1px #ccc;
    display: flex;
    li {
      margin-right: 1rem;
      &:last-child {
        margin-right: 0;
      }

      a {
        padding-bottom: 0.5rem;
        display: block;
        font-size: 0.8rem;
        outline: none;
      }
    }
  }

  .tabs-component-panels {
    padding: 1rem 2rem;
  }
}
</style>
