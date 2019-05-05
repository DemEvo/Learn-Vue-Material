<template>
    <div class="Page1">
        <div class="md-layout">
            <div class="md-layout-item"></div>
            <div class="md-layout-item"></div>
            <div class="md-layout-item"></div>
        </div>



        <h2>Select any text to see the selection background</h2>
        <p>This text will follow the default color of the documentation, which is a nice red color.</p>

        <md-content md-theme="selection-black">
            <p>This one will get a slick black background when selected, because the parent theme have another
                color.</p>
        </md-content>

        <md-content md-theme="selection-orange">
            <p>Also works when the theme is dark.</p>
        </md-content>



        <div>

            <div>
                <md-icon>menu</md-icon>
                <md-icon>add</md-icon>
                <md-icon>thumb_up</md-icon>
                <md-icon>verified_user</md-icon>
                <md-icon>home</md-icon>
            </div>

            <div>
                <md-icon class="outlined md-size-5x">free_breakfast</md-icon>
                <md-icon class="md-size-2x">add</md-icon>
                <md-icon class="md-size-3x">thumb_up</md-icon>
                <md-icon class="md-size-4x">verified_user</md-icon>
                <md-icon class="md-size-5x">home</md-icon>
            </div>
        </div>



        <div style="background-color: aliceblue">
<!--            <div>-->
<!--                <md-icon md-src="https://vuematerial.io/assets/icon-add.svg" />-->
<!--                <md-icon md-src="https://vuematerial.io/assets/icon-home.svg" />-->
<!--                <md-icon md-src="https://vuematerial.io/assets/icon-menu.svg" />-->
<!--                <md-icon md-src="https://vuematerial.io/assets/icon-thumbs-up.svg" />-->
<!--                <md-icon md-src="https://vuematerial.io/assets/icon-verified.svg" />-->
<!--            </div>-->

            <div>
                <md-icon class="md-size-5x">home</md-icon>
                <md-icon md-src="../../public/favicon.ico" />
                <md-icon class="md-size-2x" md-src="https://vuematerial.io/assets/icon-home.svg" />
                <md-icon class="md-size-3x" md-src="https://vuematerial.io/assets/icon-menu.svg" />
                <md-icon class="md-size-4x" md-src="https://vuematerial.io/assets/icon-thumbs-up.svg" />
                <md-icon class="md-size-5x" md-src="https://vuematerial.io/assets/icon-verified.svg" />
            </div>
        </div>

        

    </div>
</template>

<script>
    // import name from "@/components/name"
    export default {
        name: "Page1",
        props: [],
        components: {},
        data() {
            return {}
        },
        computed: {},
        methods: {},
        mounted() {
        },
    }
</script>

<style lang="scss">
    @import "~vue-material/dist/theme/engine.scss";


    @include md-register-theme("selection-black", (
            accent: md-get-palette-color(black, 500)
    ));

    @include md-register-theme("selection-orange", (
            accent: md-get-palette-color(orange, 500),
            theme: dark
    ));

    @import "~vue-material/dist/base/theme";
    @import "~vue-material/dist/components/MdContent/theme";

    .Page1 {
        .md-layout-item {
            height: 40px;

            &:nth-child(1) {
                background: md-get-palette-color(grey, 300);
            }

            &:nth-child(2) {
                background: md-get-palette-color(grey, 400);
            }

            &:nth-child(3) {
                background: md-get-palette-color(grey, 500);
            }
        }


    }
</style>
