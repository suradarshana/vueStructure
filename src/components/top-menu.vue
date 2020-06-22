<template>
  <div class="topMenuWrapper">
    <ul class="topMenuWrapper__breadcrumb flex justify-start items-center">
      <li>
        <a href="#" class="flex justify-center items-center">
          <span class="topMenuWrapper__breadcrumb__bulet blue rounded-full block"></span>
          <i class="fas fa-angle-right"></i>
        </a>
      </li>
      <li>
        <a href="#"  class="flex justify-center items-center">
          <span class="topMenuWrapper__breadcrumb__bulet red rounded-full block"></span>
          <i class="fas fa-angle-right"></i>
        </a>
      </li>
      <li>
        <a href="#" class="text-xs">Endowmwnts Management</a>
      </li>
    </ul>
  </div>
</template>

<style lang="scss" scoped>
.topMenuWrapper {
  width: calc(100% - 0.5rem);
  border-bottom: solid 1px #ccc;
  padding-bottom: 1rem;

  &__breadcrumb {
    .blue{
      background: #1c6efc;
    }
    .red{
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