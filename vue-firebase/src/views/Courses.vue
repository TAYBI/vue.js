<template lang="">
<div class="container mt-4">
        <div class="row">
            <div v-for="(course, index) in courses" :key="index" class="col-md-4 mb-4">
                <div class="card">
    <img :src="`${course.imageLink}`" class="card-img-top" alt="Course Image">
    <div class="card-body">
        <h5 class="card-title">{{ course.name }}</h5>
        <p class="card-text">{{ course.description }}</p>
        <button type="button " class="btn btn-info ">
        {{ course.category}} <span class="badge bg-dark mx-1">{{ course.typePayment}}</span>
        </button>
        <hr>
        <p v-for="(tag, tagIndex) in course.tags" :key="tagIndex" class="badge badge-secondary mx-1">{{tag}}</p>    
    </div>
    <button @click="deleteCourse(index)" class="btn btn-sm btn-danger">Delete</button>
</div>
            </div>
        </div>
    </div>
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