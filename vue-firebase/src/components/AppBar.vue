<template >
    <v-app-bar :elevation="0" title="Home" theme="dark">
        <template v-slot:append>
            <RouterLink to="/courses">
                <v-btn icon="mdi-view-list"></v-btn>
            </RouterLink>
            <RouterLink to="/">
                <v-btn icon="mdi-home-variant"></v-btn>
            </RouterLink>
            <v-btn icon="mdi-dots-vertical"></v-btn>
        </template>
    </v-app-bar>
</template>
<script>
export default {

}
</script>
<style ></style>