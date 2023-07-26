<template >
    <v-app-bar :elevation="0" title="Home" theme="dark">
        <template v-slot:append>
            <RouterLink to="/courses">
                <v-btn icon="mdi-view-list"></v-btn>
            </RouterLink>
            <RouterLink to="/">
                <v-btn icon="mdi-home-variant"></v-btn>
            </RouterLink>

            <v-dialog v-model="dialog" transition="dialog-top-transition" persistent width="1024">
                <template v-slot:activator="{ props }">
                    <v-btn icon="mdi-plus-box" v-bind="props"></v-btn>
                </template>
                <AddForm :dialog="dialog" @close-dialog="closeDialog" />
            </v-dialog>
        </template>
    </v-app-bar>
</template>
<script>
import AddForm from './AddForm.vue'

export default {
    components: {
        AddForm,
    },
    data: () => ({
        dialog: false,
    }),
    methods: {
        closeDialog() {
            this.dialog = false;
        }
    }
}
</script>
<style ></style>