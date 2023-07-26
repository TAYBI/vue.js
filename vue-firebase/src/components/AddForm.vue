<template >
    <v-dialog transition="dialog-bottom-transition" width="auto">
        <template v-slot:activator="{ props }">
            <v-btn color="primary" v-bind="props">From the bottom</v-btn>
        </template>
        <template v-slot:default="{ isActive }">
            <v-card>
                <v-card-text style="min-width: 300px;">
                    <v-form @submit.prevent>
                        <v-text-field v-model="firstName" label="First name" :rules="firstNameRules"></v-text-field>

                        <v-text-field v-model="lastName" label="Last name" :rules="lastNameRules"></v-text-field> <v-btn
                            type="submit" block class="mt-2">Submit</v-btn>
                    </v-form>
                </v-card-text>
                <v-card-actions class="justify-end">
                    <v-btn variant="text" @click="isActive.value = false">Close</v-btn>
                </v-card-actions>
            </v-card>
        </template>
    </v-dialog>
</template>
<script>
export default {

}
</script>
<style ></style>