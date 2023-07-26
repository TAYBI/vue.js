<template >
  <v-container>
    <v-row no-gutters>
      <v-col v-if="courses.length > 0" v-for="(course, index) in courses" :key="index">
        <CourseCard :course="course" />
      </v-col>
      <v-main v-else class="d-flex align-center justify-center">
        Loaging..
      </v-main>
      <v-responsive width="100%"></v-responsive>

    </v-row>
  </v-container>
</template>
<script>
import getCourses from '../composables/courses/getCourses.js'
import CourseCard from '@/components/CourseCard.vue';
export default {
  components: {
    CourseCard
  },
  setup() {

    const { courses, load, error } = getCourses();

    load();

    return { courses }
  }
}
</script>
<style ></style>