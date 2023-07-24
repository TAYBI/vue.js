<template lang="">
<div class="card">
    <img :src="`${course.imageLink}`" class="card-img-top" alt="Course Image">
    <div class="card-body">
        <h5 class="card-title">{{ course.name }}</h5>
        <p class="card-text">{{ course.description }}</p>
    </div>
    <button @click="deleteCourse(index)" class="btn btn-sm btn-danger">Delete</button>
</div>
</template>
<script>
export default {
    name: 'OneCourse',
    props: ['course', 'index'],
    methods: {
        deleteCourse(id) {
            this.$emit('delete', id)
        }
    }
}
</script>
<style lang="">
    
</style>