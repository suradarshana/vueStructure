<template>
    <div>
        <div class="menubar">
            <top-menu></top-menu>
        </div>

        <div class="middleContainer">
            <div class="leftMenu">
                <side-menu></side-menu>
            </div>
            <div class="mainContainer">
                <router-view></router-view>
            </div>
        </div>
        <div @click="objFunc" class="footer">Footer
        </div>
    </div>
</template>
<script>
    import TopMenu from "./top-menu.vue";
    import SideMenu from "./side-menu.vue";
    export default {
        components: {
            "top-menu": TopMenu,
            "side-menu": SideMenu,
        },
        data: function () {
            return {
                name: "ara",
                same: "sdfsdff",
                test: function () {
                    console.log(this.names())
                }
            }
        },
        methods: {
            names() {
                console.log(this.name)
            },

            game() {
                console.log("game")
            },
            objFunc() {
                console.log(this.test());
            }
        }
    };
</script>
<style lang="scss">
    .menubar {
        height: 50px;
        background-color: orangered;
    }

    .middleContainer {
        display: flex;
        border: 1px solid green;
        background-color: pink;
        height: calc(100vh - 102px);
    }

    .leftMenu {
        background-color: blue;
        flex: 2;
    }

    .mainContainer {
        background-color: orange;
        flex: 10;
    }

    .footer {
        height: 50px;
        background: gray;
    }
</style>
