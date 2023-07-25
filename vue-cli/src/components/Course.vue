<template lang="">
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
<style scoped>
.card {
    text-align: left;
}

.badge {
    background-color: #6c757d;
    color: whitesmoke;
}
</style>