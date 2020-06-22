<template>
  <div class="appLayout">
    <div class="appLayout__sidebar">
      <Sidebar></Sidebar>
    </div>
    <div class="appLayout__pageHeader">
      <page-header></page-header>
    </div>
    <div class="appLayout__mainContainer">
      <endowmwntsm></endowmwntsm>
    </div>
  </div>
</template>
<script>
/*  */
import Sidebar from "./sidebar";
import Header from "./header";
import endowmwntsManagement from "./endowmwnts-management";

export default {
  components: {
    Sidebar: Sidebar,
    "page-header": Header,
    endowmwntsm : endowmwntsManagement
  },
  data: function() {
    return {};
  },
  methods: {}
};
</script>

<style lang="scss" scoped>
.appLayout {
  display: grid;
  grid-template-rows: 80px 1fr;
  grid-template-columns: 260px 1fr;
  height: 100vh;
  margin: 0;

  &__sidebar {
    background: #fff;
    grid-column-start: 1;
    grid-column-end: 2;
    grid-row-start: 1;
    grid-row-end: 4;
  }

  &__pageHeader {
    background: #f5f6f7;
    grid-column-start: 2;
    grid-column-end: 4;
    grid-row-start: 1;
    grid-row-end: 2;
    display: flex;
    align-items: center;
    padding: 0.5rem 2rem;
  }

  &__mainContainer {
    background: #f5f6f7;
    grid-column-start: 2;
    grid-column-end: 4;
    grid-row-start: 2;
    grid-row-end: 4;
    padding: 2rem;
    padding-top: 0;
    height: calc(100vh - 80px);
  }
}
</style>
