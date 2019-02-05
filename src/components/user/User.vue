<template>
    <div>
        <h1>The User Page</h1>
        <hr>
        <button @click="navigateToHome" class="btn btn-primary">Go home</button>
        <hr>
        <br>
        <p>Loaded ID: {{ id }}</p>
    </div>
</template>

<script>
export default {
    data() {
        return {
            id: this.$route.params.id
        }
    },
    methods: {
        navigateToHome() {
            this.$router.push('/');
        }
    }
}
</script>
