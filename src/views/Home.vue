<template>
    <div class="home">
        <img alt="Vue logo" src="../assets/logo.png">
        <HelloWorld msg="Welcome to Your Vue.js App"/>
        <div id="ce" :contenteditable="true" @input="divContent" v-model="homeMsg"></div>
        <br><br>
      <h3>  {{homeMsg}}</h3>
        <!--<bdo dir="rtl" v-model="homeMsg" :value="homeMsg">{{homeMsg}}</bdo>-->
    </div>
</template>

<script>
    // @ is an alias to /src
    import HelloWorld from '@/components/HelloWorld.vue';
    import api from "@/restApi.js"

    export default {
        name: 'home',
        components: {
            HelloWorld
        },
        data(){
            return {
                homeMsg: 'Привет',
            }
        },
        methods: {
            divContent(v){
//                console.log(v);
                console.log(window['ce'].innerHTML);
            }
        },
        watch: {
            'homeMsg': function (val) {
                console.log('this значение', val);

            },
        },
        computed: {},
        mounted(){
            api.testMC().then(r =>
                console.log(r)
            );
        }
    }
</script>
<style>

</style>