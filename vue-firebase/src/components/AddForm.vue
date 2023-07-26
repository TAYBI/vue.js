<template >
    <v-card>
        <v-card-title>
            <span class="text-h5">Course Details</span>
        </v-card-title>
        <v-card-text>
            <v-container>
                <v-row>
                    <v-col cols="12" sm="6" md="4">
                        <v-text-field label="Title*" required></v-text-field>
                    </v-col>
                    <v-col cols="12" sm="6" md="4">
                        <v-text-field label="Category*" required></v-text-field>
                    </v-col>
                    <v-col cols="12" sm="12" md="4">
                        <v-textarea label="Description"></v-textarea>
                    </v-col>
                    <v-col cols="12" sm="6">
                        <v-autocomplete :items="[
                            'Python',
                            'JavaScript',
                            'Java',
                            'Cplusplus',
                            'HTML',
                            'CSS',
                            'Ruby',
                            'PHP',
                            'Swift',
                            'SQL']" label="Interests" multiple></v-autocomplete>
                    </v-col>
                </v-row>
            </v-container>
            <small>*indicates required field</small>
        </v-card-text>
        <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn color="blue-darken-1" variant="text" @click="closeDialog">
                Close
            </v-btn>
            <v-btn color="blue-darken-1" variant="text" @click="closeDialog">
                Save
            </v-btn>
        </v-card-actions>
    </v-card>
</template>
<script>
export default {
    props: ['dialog'],
    methods: {
        closeDialog() {
            this.$emit('close-dialog');
        }
    }
}
</script>
<style ></style>