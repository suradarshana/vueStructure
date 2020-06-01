<template>

    <div>
        <h1>login layout</h1>
        <login-component></login-component>
    </div>

</template>

<script>
    import LoginComp from "src/components/login/login-component";


    export default {
        components: {
            "login-component": LoginComp
        },
    }

</script>


<style lang="scss" scoped>
    .main-container{
        width: 100%;
        height: 100%;
        display: flex;
        flex-direction: column;
        justify-content: center;align-items: center;
        border: 1px solid black;
    }
</style>