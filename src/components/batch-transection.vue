<template>
  <div class="appLayout">
    <div class="appLayout__sidebar">
      <Sidebar></Sidebar>
    </div>
    <div class="appLayout__pageHeader">
      <div class="topMenuWrapper">
        <ul class="topMenuWrapper__breadcrumb flex justify-start items-center">
          <li>
            <a href="#" class="flex justify-center items-center">
              <span class="topMenuWrapper__breadcrumb__bulet blue rounded-full block"></span>
              <i class="fas fa-angle-right"></i>
            </a>
          </li>
          <li>
            <a href="#" class="flex justify-center items-center">
              <span class="topMenuWrapper__breadcrumb__bulet red rounded-full block"></span>
              <i class="fas fa-angle-right"></i>
            </a>
          </li>
          <li>
            <a href="#" class="text-xs">Batch Transection</a>
          </li>
        </ul>
      </div>
    </div>
    <div class="appLayout__mainContainer">
      <div class="investfunds h-full">
        <div class="investfunds__head flex justify-between items-center">
          <div class="investfunds__head__title flex justify-start items-center">
            <span
              class="dollarIcon text-xs flex justify-center items-center rounded-full text-white"
            >
              <i class="fas fa-dollar-sign"></i>
            </span>
            <h2 class="text-xs font-semibold text-black">Title like investment fund</h2>
          </div>
          <div class="investfunds__head__pageMenu flex justify-start items-center">
            <div class="investfunds__head__pageMenu__text">
              <p class="text-xs">
                Your Data will be
                <a href="#" class="text-xs">handled with care</a>
              </p>
            </div>
            <div class="investfunds__head__pageMenu__button">
              <button class="rounded text-xs">New Found</button>
            </div>
            <div class="investfunds__head__pageMenu__menuIcon cursor-pointer">
              <i class="fas fa-bars"></i>
            </div>
          </div>
        </div>
        <div class="investfunds__pageContaint">
          <h2 class="text-center text-sm p-5">Batch Transection</h2>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
/*  */
import Sidebar from "./sidebar";

export default {
  components: {
    Sidebar: Sidebar
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

.investfunds {
  &__head {
    &__title {
      span {
        width: 28px;
        height: 28px;
        background: #1c6efc;
        box-shadow: 0px 0px 8px #dedada;
      }

      h2 {
        margin-left: 0.5rem;
      }
    }
    &__pageMenu {
      &__text {
        p {
          a {
            color: #1c6efc;
          }
        }
      }

      &__button {
        button {
          background: #1c6efc;
          color: #fff;
          border-radius: 4px;
          margin-left: 0.5rem;
          padding: 0.35rem 1rem;
        }
      }

      &__menuIcon {
        padding: 0.2rem 0.5rem;
        background: #fff;
        margin-left: 0.5rem;
        box-shadow: 0px 0px 6px #d5d7d9;
        border-radius: 3px;
        color: #8a8f9c;
      }
    }
  }

  &__pageContaint {
    background: #fff;
    margin-top: 1.5rem;
    height: calc(100% - 63px);
    box-shadow: 0px 0px 8px #dedada;
    border-radius: 4px;
  }
}

.topMenuWrapper {
  width: calc(100% - 0.5rem);
  border-bottom: solid 1px #ccc;
  padding-bottom: 1rem;

  &__breadcrumb {
    .blue {
      background: #1c6efc;
    }
    .red {
      background: #e1b4b4;
    }
    &__bulet {
      width: 1rem;
      height: 1rem;
      background: #ccc;
    }
    li {
      &:first-child {
        a {
          &:before {
            content: inherit;
          }
        }
      }

      a {
        margin-right: 10px;
        color: #59626a;

        span {
          margin-right: 10px;
          color: #ccc;
        }
        svg {
          color: #ccc;
        }

        &:before {
          //content: "/f105";
          //color: #f00;
        }
      }
    }
  }
}
</style>
