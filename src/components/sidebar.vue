<template>
  <div>
    <div class="sidbarLayout flex justify-start items-start flex flex-col">
      <div class="sidbarLayout__sidebarHeader">
        <div class="sidbarLayout__sidebarHeader__logoOne   flex justify-start items-center">
          <div class="sidbarLayout__sidebarHeader__logoOne__icon">
            <img src="../assets/images/logoicon.jpg" />
          </div>
          <div class="sidbarLayout__sidebarHeader__logoOne__text text-xs">Nomad Rental</div>
        </div>
        <div class="sidbarLayout__sidebarHeader__logoSecond flex relative text-xs">
          <!--  <img src="../assets/images/logo.jpg" /> -->

          <div class="dwrap1 animate__animated animate__rollIn animate__delay-3s">
            <div class="diamond d1 absolute">
              <span class="flex justify-center items-center">EM</span>
            </div>
          </div>
          <div class="dwrap2 animate__animated animate__rollIn animate__delay-2s">
            <div class="diamond d2 absolute">
              <span class="flex justify-center items-center">EM</span>
            </div>
          </div>
          <div class="dwrap3 animate__animated animate__rollIn animate__delay-1s">
            <div class="diamond d3 absolute">
              <span class="flex justify-center items-center">EM</span>
            </div>
          </div>
        </div>
        <div class="sidbarLayout__sidebarHeader__user text-xs">
          <span class="block">Dimitry Laverinenko</span>
          <label class="font-semibold block">Admin</label>
        </div>
      </div>
      <div class="sidebarMenu">
        <side-menu></side-menu>
      </div>
      <div class="sidbarLayout__sidebarFooter">
        <div class="sidbarLayout__sidebarFooter__image">
          <img
            src="../assets/images/man.jpg"
            class="animate__animated animate__wobble animate__slow animate__repeat-3"
          />
        </div>
        <div class="sidbarLayout__sidebarFooter__swtch">
          <div class="flex items-center justify-start">
            <label for="toogleA" class="flex items-center cursor-pointer">
              <div class="relative">
                <input id="toogleA" type="checkbox" class="hidden" />
                <div
                  class="sidbarLayout__sidebarFooter__swtch__toggle__line bg-gray-400 rounded-full shadow-inner"
                ></div>
                <div
                  class="sidbarLayout__sidebarFooter__swtch__toggle__dot checked absolute bg-white rounded-full shadow inset-y-0 left-0"
                ></div>
              </div>
              <div
                class="ml-3 text-gray-700 sidbarLayout__sidebarFooter__swtch__singtext text-xs"
              >Sign Out</div>
            </label>
          </div>
          <div class="sidbarLayout__sidebarFooter__swtch__switchText">
            <p class="text-xs">Your Data will be handled with care</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>



<script>
/*  */

//import Zondicon from "vue-zondicons";
//import "font-awesome/css/font-awesome.min.css";
import SideMenu from "./side-menu.vue";
export default {
  components: {
    // Zondicon: Zondicon
    "side-menu": SideMenu
    // 'VueFontawesome': require('vue-fontawesome-icon/VueFontawesome.vue'
  },
  data: function() {
    return {};
  },
  methods: {}
};
</script>



<style lang="scss" scoped>
.sidbarLayout {
  padding: 0.2rem;
  padding-left: 2.2rem;
  height: 100vh;

  &__sidebarHeader {
    &__logoOne {
     
      color: #939cb5;
      font-weight: 500;
      img {
        max-width: 30px;
        margin-right: -7px;
        margin-top: 5px;
      }
    }
    &__logoSecond {
      margin-top: 0.6rem;
    }
    &__user {
      margin-top: 3.5rem;
      span {
        color: #babdc5;
      }
      label {
      }
    }
  }

  &__sidebarFooter {
    margin-top: auto;
    margin-bottom: 0.8rem;
    &__image {
      text-align: center;
      margin-bottom: 1rem;
      img {
        max-width: 150px;
      }
    }

    &__swtch {
      margin-left: -20px;
      &__toggle {
        &__line {
          width: 30px;
          height: 15px;
        }
      }

      &__toggle {
        &__dot {
          top: 0px;
          left: 0;
          transition: all 0.3s ease-in-out;
          width: 15px;
          height: 15px;
        }
      }

      input:checked ~ .checked {
        transform: translateX(100%);
        background-color: #1c6efc;
      }

      &__singtext {
      }

      &__switchText {
        p {
          margin-top: 0.5rem;
        }
      }
    }
  }
}
</style>
