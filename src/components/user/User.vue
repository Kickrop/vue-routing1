<template>
    <div>
        <h1>The User Page</h1>
        <hr>
        <button @click="navigateToHome" class="btn btn-primary">Go home</button>
        <hr>
        <router-view></router-view>
        <!-- <hr>
        <br>
        <p>Loaded ID: {{ id }}</p> -->
    </div>
</template>

<script>
export default {
    // data() {
    //     return {
    //         id: this.$route.params.id
    //     }
    // },
    // watch: {
    //     '$route'(to, from) {
    //         this.id = to.params.id;
    //     }
    // }, /*in a new version their is no need for watch https://github.com/vuejs/vue-router/tree/dev/examples/route-props*/ */
    methods: {
        navigateToHome() {
            this.$router.push('/');
        }
    }
}
</script>
