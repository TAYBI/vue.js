<template lang="">
    <v-card v-for="(course, index) in courses" 
    class="mx-auto"
    max-width="344"
    :key="index"
    >
    <v-img
      :src="course.imageLink"
      height="200px"
      cover
    ></v-img>

    <v-card-title>
      {{course.title}}
    </v-card-title>

    <v-card-subtitle>
      {{course.category}}
    </v-card-subtitle>

    <v-card-text>{{course.description}}</v-card-text>
    <v-card-actions>
        <v-btn>details</v-btn>
    </v-card-actions>
    </v-card>
</template>
<script>
import getCourse from '../composables/courses/getCourses.js'

export default {
    setup() {

        const { courses, load, error } = getCourse();

        load();

        return { courses }
    }
}
</script>
<style lang="">
    
</style>