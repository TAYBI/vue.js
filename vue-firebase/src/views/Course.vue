<template >
    <v-container v-if="error">
        <v-alert type="error" variant="outlined" :text="error"></v-alert>
    </v-container>
    <v-parallax :src="course.imageLink">
        <div class="d-flex flex-column fill-height justify-center align-center text-white">
            <h1 class="text-h4 font-weight-thin mb-4">
                {{ course.title }}
            </h1>
            <h4 class="subheading">
                {{ course.category }}
            </h4>
        </div>
    </v-parallax>
</template>
<script>
import { useRoute } from 'vue-router';
import getCourse from '@/composables/courses/getCourse';

export default {
    setup() {
        const route = useRoute()
        const id = route.params.id

        const { course, load, error } = getCourse();

        console.log(load(id));
        return { course, error }
    }
}
</script>
<style ></style>