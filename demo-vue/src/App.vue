<template>
    <div id="app">
        <MenuHeader></MenuHeader>
        <MenuLeft></MenuLeft>
        <Luck></Luck>
        <img alt="Vue logo" src="./assets/logo.png">
        <HelloWorld msg="Welcome to Your Vue.js App"/>
        <Test></Test>
    </div>
</template>

<script>
    import HelloWorld from './components/HelloWorld.vue'
    import Test from './components/Test.vue'
    import MenuLeft from "./components/menu/MenuLeft";
    import MenuHeader from "./components/menu/MenuHeader.vue";
    import Luck from './components/draw/Luck.vue';

    export default {
        name: 'App',
        components: {
            HelloWorld,
            Test,
            MenuLeft,
            MenuHeader,
            Luck,
        }
    }
</script>

<style>
    #app {
        font-family: Avenir, Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        text-align: center;
        color: #2c3e50;
        margin-top: 60px;
    }
</style>
