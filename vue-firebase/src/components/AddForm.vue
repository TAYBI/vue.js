<template >
    <v-card>
        <v-card-title>
            <span class="text-h5">Course Details</span>
        </v-card-title>
        <v-card-text>
            <v-container>
                <v-row>
                    <v-col cols="12" sm="6" md="4">
                        <v-text-field v-model="course.title" label="Title*" required></v-text-field>
                    </v-col>
                    <v-col cols="12" sm="6" md="4">
                        <v-text-field v-model="course.category" label="Category*" required></v-text-field>
                    </v-col>
                    <v-col cols="12" sm="12" md="4">
                        <v-textarea v-model="course.description" label="Description"></v-textarea>
                    </v-col>
                    <v-col cols="12" sm="6">
                        <v-autocomplete v-model="course.tags" :items="[
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
                    <v-radio-group v-model="course.typePayment" inline>
                        <v-radio label="Free" v-model="course.typePayment" value="free" checked></v-radio>
                        <v-radio label="Paying" v-model="course.typePayment" value="paying"></v-radio>
                    </v-radio-group>
                </v-row>
            </v-container>
            <small>*indicates required field</small>
        </v-card-text>
        <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn color="blue-darken-1" variant="text" @click="closeDialog">
                Close
            </v-btn>
            <v-btn color="blue-darken-1" variant="text" @click="addCourse_">
                Save
            </v-btn>
        </v-card-actions>
    </v-card>
</template>
<script>
import addCourse from '@/composables/courses/addCourse';
import { reactive } from 'vue';

export default {
    props: ['dialog'],

    setup(props, { emit }) {
        const { load, error } = addCourse();
        const course = reactive({
            category: "",
            description: "",
            imageLink: "https://picsum.photos/200/100",
            tags: [],
            title: "",
            typePayment: "free",
        })

        const closeDialog = () => {
            emit('closeDialog');
        }

        const addCourse_ = () => {
            load(course);
            emit('closeDialog');
        }

        return { addCourse_, closeDialog, course }

    },
}
</script>
<style ></style>