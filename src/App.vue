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


.dwrap1 {
  z-index: 9999;
}
.dwrap2 {
  z-index: 100;
}
.d1 {
  top: 11px;
  left: 6px;
  z-index: 100;
}
.d2 {
  top: 11px;
  opacity: 0.5;
  left: 10.5px;
  z-index: 80;
}
.d3 {
  top: 11px;
  opacity: 0.2 !important;
  left: 15px;
  z-index: 60;
}

.diamond {
  width: 30px;
  height: 30px;
  background: #2366eb;
  transform: rotate(44deg);
  border-radius: 8px;

  span {
    color: #ffffff;
    transform: rotate(-44deg);
    /* padding: 3px; */
    width: 30px;
    height: 30px;
  }
}





  @-webkit-keyframes upper-move {
  0% {
    -webkit-transform: rotateX(360deg) rotate(0deg);
    transform: rotateX(360deg) rotate(0deg);
  }

  12.5% {
    -webkit-transform: rotateX(270deg) rotate(0deg);
    transform: rotateX(270deg) rotate(0deg);
  }

  25% {
    -webkit-transform: rotateX(270deg) rotate(0deg);
    transform: rotateX(270deg) rotate(0deg);
  }

  25.01% {
    -webkit-transform: rotateY(90deg) rotate(270deg);
    transform: rotateY(90deg) rotate(270deg);
  }

  37.5% {
    -webkit-transform: rotateY(90deg) rotate(270deg);
    transform: rotateY(90deg) rotate(270deg);
  }

  50% {
    -webkit-transform: rotateY(0deg) rotate(270deg);
    transform: rotateY(0deg) rotate(270deg);
  }

  50.01% {
    -webkit-transform: rotateX(180deg) rotate(0deg);
    transform: rotateX(180deg) rotate(0deg);
  }

  62.5% {
    -webkit-transform: rotateX(270deg) rotate(0deg);
    transform: rotateX(270deg) rotate(0deg);
  }

  75% {
    -webkit-transform: rotateX(270deg) rotate(0deg);
    transform: rotateX(270deg) rotate(0deg);
  }

  75.01% {
    -webkit-transform: rotateY(270deg) rotate(90deg);
    transform: rotateY(270deg) rotate(90deg);
  }

  87.5% {
    -webkit-transform: rotateY(270deg) rotate(90deg);
    transform: rotateY(270deg) rotate(90deg);
  }

  100% {
    -webkit-transform: rotateY(360deg) rotate(90deg);
    transform: rotateY(360deg) rotate(90deg);
  }
}

@keyframes upper-move {
  0% {
    transform: rotateX(360deg) rotate(0deg);
  }

  12.5% {
    transform: rotateX(270deg) rotate(0deg);
  }

  25% {
    transform: rotateX(270deg) rotate(0deg);
  }

  25.01% {
    transform: rotateY(90deg) rotate(270deg);
  }

  37.5% {
    transform: rotateY(90deg) rotate(270deg);
  }

  50% {
    transform: rotateY(0deg) rotate(270deg);
  }

  50.01% {
    transform: rotateX(180deg) rotate(0deg);
  }

  62.5% {
    transform: rotateX(270deg) rotate(0deg);
  }

  75% {
    transform: rotateX(270deg) rotate(0deg);
  }

  75.01% {
    transform: rotateY(270deg) rotate(90deg);
  }

  87.5% {
    transform: rotateY(270deg) rotate(90deg);
  }

  100% {
    transform: rotateY(360deg) rotate(90deg);
  }
}

@-webkit-keyframes lower-move {
  0% {
    -webkit-transform: rotateX(270deg) rotate(0deg);
    transform: rotateX(270deg) rotate(0deg);
  }

  12.5% {
    -webkit-transform: rotateX(270deg) rotate(0deg);
    transform: rotateX(270deg) rotate(0deg);
  }

  25% {
    -webkit-transform: rotateX(180deg) rotate(0deg);
    transform: rotateX(180deg) rotate(0deg);
  }

  25.01% {
    -webkit-transform: rotateY(180deg) rotate(270deg);
    transform: rotateY(180deg) rotate(270deg);
  }

  37.5% {
    -webkit-transform: rotateY(90deg) rotate(270deg);
    transform: rotateY(270deg) rotate(270deg);
  }

  50% {
    -webkit-transform: rotateY(90deg) rotate(270deg);
    transform: rotateY(270deg) rotate(270deg);
  }

  50.01% {
    -webkit-transform: rotateX(270deg) rotate(0deg);
    transform: rotateX(270deg) rotate(0deg);
  }

  62.5% {
    -webkit-transform: rotateX(270deg) rotate(0deg);
    transform: rotateX(270deg) rotate(0deg);
  }

  75% {
    -webkit-transform: rotateX(360deg) rotate(0deg);
    transform: rotateX(360deg) rotate(0deg);
  }

  75.01% {
    -webkit-transform: rotateY(180deg) rotate(90deg);
    transform: rotateY(180deg) rotate(90deg);
  }

  87.5% {
    -webkit-transform: rotateY(270deg) rotate(90deg);
    transform: rotateY(270deg) rotate(90deg);
  }

  100% {
    -webkit-transform: rotateY(270deg) rotate(90deg);
    transform: rotateY(270deg) rotate(90deg);
  }
}

@keyframes lower-move {
  0% {
    transform: rotateX(270deg) rotate(0deg);
  }

  12.5% {
    transform: rotateX(270deg) rotate(0deg);
  }

  25% {
    transform: rotateX(180deg) rotate(0deg);
  }

  25.01% {
    transform: rotateY(180deg) rotate(270deg);
  }

  37.5% {
    -webkit-transform: rotateY(90deg) rotate(270deg);
    transform: rotateY(270deg) rotate(270deg);
  }

  50% {
    -webkit-transform: rotateY(90deg) rotate(270deg);
    transform: rotateY(270deg) rotate(270deg);
  }

  50.01% {
    transform: rotateX(270deg) rotate(0deg);
  }

  62.5% {
    transform: rotateX(270deg) rotate(0deg);
  }

  75% {
    transform: rotateX(360deg) rotate(0deg);
  }

  75.01% {
    transform: rotateY(180deg) rotate(90deg);
  }

  87.5% {
    transform: rotateY(270deg) rotate(90deg);
  }

  100% {
    transform: rotateY(270deg) rotate(90deg);
  }
}

@-webkit-keyframes base-rotate {
  0% {
    -webkit-transform: rotate(0deg);
    transform: rotate(0deg);
  }

  25% {
    -webkit-transform: rotate(0deg);
    transform: rotate(0deg);
  }

  25.01% {
    -webkit-transform: rotate(-90deg);
    transform: rotate(-90deg);
  }

  50% {
    -webkit-transform: rotate(-90deg);
    transform: rotate(-90deg);
  }

  50.01% {
    -webkit-transform: rotate(180deg);
    transform: rotate(180deg);
  }

  75% {
    -webkit-transform: rotate(180deg);
    transform: rotate(180deg);
  }

  75.01% {
    -webkit-transform: rotate(90deg);
    transform: rotate(90deg);
  }

  100% {
    -webkit-transform: rotate(90deg);
    transform: rotate(90deg);
  }
}

@keyframes base-rotate {
  0% {
    transform: rotate(0deg);
  }

  25% {
    transform: rotate(0deg);
  }

  25.01% {
    transform: rotate(-90deg);
  }

  50% {
    transform: rotate(-90deg);
  }

  50.01% {
    transform: rotate(180deg);
  }

  75% {
    transform: rotate(180deg);
  }

  75.01% {
    transform: rotate(90deg);
  }

  100% {
    transform: rotate(90deg);
  }
}

@-webkit-keyframes upper-color {
  0% {
    background: #f52d27;
  }

  50% {
    background: #f52d27;
  }

  50.01% {
    background: #00b262;
  }

  100% {
    background: #00b262;
  }
}

@keyframes upper-color {
  0% {
    background: #f52d27;
  }

  50% {
    background: #f52d27;
  }

  50.01% {
    background: #00b262;
  }

  100% {
    background: #00b262;
  }
}

@-webkit-keyframes upper-color-shadow {
  0% {
    background: #7d0906;
  }

  25% {
    background: #f52d27;
  }

  50% {
    background: #7d0906;
  }

  50.01% {
    background: #00190e;
  }

  75% {
    background: #00b262;
  }

  100% {
    background: #00190e;
  }
}

@keyframes upper-color-shadow {
  0% {
    background: #7d0906;
  }

  25% {
    background: #f52d27;
  }

  50% {
    background: #7d0906;
  }

  50.01% {
    background: #00190e;
  }

  75% {
    background: #00b262;
  }

  100% {
    background: #00190e;
  }
}

@-webkit-keyframes lower-color {
  0% {
    background: #3a71f8;
  }

  25% {
    background: #3a71f8;
  }

  25.01% {
    background: #ffd539;
  }

  75% {
    background: #ffd539;
  }

  75.01% {
    background: #3a71f8;
  }

  100% {
    background: #3a71f8;
  }
}

@keyframes lower-color {
  0% {
    background: #3a71f8;
  }

  25% {
    background: #3a71f8;
  }

  25.01% {
    background: #ffd539;
  }

  75% {
    background: #ffd539;
  }

  75.01% {
    background: #3a71f8;
  }

  100% {
    background: #3a71f8;
  }
}

@-webkit-keyframes lower-color-shadow {
  0% {
    background: #3a71f8;
  }

  25% {
    background: #052e94;
  }

  25.01% {
    background: #9f7d00;
  }

  50% {
    background: #ffd539;
  }

  75% {
    background: #9f7d00;
  }

  75.01% {
    background: #052e94;
  }

  100% {
    background: #3a71f8;
  }
}

@keyframes lower-color-shadow {
  0% {
    background: #3a71f8;
  }

  25% {
    background: #052e94;
  }

  25.01% {
    background: #9f7d00;
  }

  50% {
    background: #ffd539;
  }

  75% {
    background: #9f7d00;
  }

  75.01% {
    background: #052e94;
  }

  100% {
    background: #3a71f8;
  }
}

.ballanimation{
  margin-top: -21px;
.loading {
  position: relative;
  width: 20px;
  height: 20px;
}

.semicircle {
  position: absolute;
  width: 20px;
  height: 20px;
  -webkit-animation-fill-mode: both;
  -moz-animation-fill-mode: both;
  animation-fill-mode: both;
  -webkit-animation-duration: 2.5s;
  -moz-animation-duration: 2.5s;
  animation-duration: 2.5s;
  -webkit-animation-timing-function: linear;
  -moz-animation-timing-function: linear;
  animation-timing-function: linear;
  -webkit-animation-iteration-count: infinite;
  -moz-animation-iteration-count: infinite;
  animation-iteration-count: infinite;


   .semicircle-inner {
  width: 20px;
  height: 10px;
  border-radius: 10px 10px 0 0;
  -webkit-animation-fill-mode: both;
  -moz-animation-fill-mode: both;
  animation-fill-mode: both;
  -webkit-animation-duration: 2.5s;
  -moz-animation-duration: 2.5s;
  animation-duration: 2.5s;
  -webkit-animation-timing-function: linear;
  -moz-animation-timing-function: linear;
  animation-timing-function: linear;
  -webkit-animation-iteration-count: infinite;
  -moz-animation-iteration-count: infinite;
  animation-iteration-count: infinite;
}

}



.semicircle.upper-base {
  -webkit-animation-name: base-rotate;
  -moz-animation-name: base-rotate;
  animation-name: base-rotate;
}
.semicircle.upper-base {
  .semicircle-inner {
  -webkit-animation-name: upper-color;
  -moz-animation-name: upper-color;
  animation-name: upper-color;
}
}

.semicircle.upper-move {
  -webkit-animation-name: upper-move;
  -moz-animation-name: upper-move;
  animation-name: upper-move;
}
.semicircle.upper-move {
  .semicircle-inner {
  -webkit-animation-name: lower-color-shadow;
  -moz-animation-name: lower-color-shadow;
  animation-name: lower-color-shadow;
}
}

.semicircle.lower-base {
  -webkit-animation-name: base-rotate;
  -moz-animation-name: base-rotate;
  animation-name: base-rotate;
}
.semicircle.lower-base {
  .semicircle-inner {
  border-radius: 0 0 10px 10px;
  margin-top: 10px;
  -webkit-animation-name: lower-color;
  -moz-animation-name: lower-color;
  animation-name: lower-color;
}

}
.semicircle.lower-move {
  -webkit-animation-name: lower-move;
  -moz-animation-name: lower-move;
  animation-name: lower-move;
}
.semicircle.lower-move {
  .semicircle-inner {
  -webkit-animation-name: upper-color-shadow;
  -moz-animation-name: upper-color-shadow;
  animation-name: upper-color-shadow;
}
}
}

</style>
