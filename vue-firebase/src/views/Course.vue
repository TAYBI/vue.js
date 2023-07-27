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
            <v-btn @click="delCourse" icon="mdi-delete-forever" class="bg-red-darken-4" variant="tonal">

            </v-btn>
        </div>
    </v-parallax>
</template>
<script>
import { useRoute, useRouter } from 'vue-router';
import getCourse from '@/composables/courses/getCourse';
import deleteCourse from '@/composables/courses/deleteCourse';

export default {
    setup() {
        const route = useRoute()
        const router = useRouter();
        const { course, load, error } = getCourse();
        const deleteC = deleteCourse().deleteC;
        const id = route.params.id

        load(id)
        const delCourse = () => {
            deleteC(id);
            router.push({ name: 'courses' })
        }

        return { course, error, delCourse }
    }
}
</script>