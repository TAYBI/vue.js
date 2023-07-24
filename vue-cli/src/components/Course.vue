<template lang="">
<div class="card">
    <img :src="`${course.imageLink}${index}`" class="card-img-top" alt="Course Image">
    <div class="card-body">
        <h5 class="card-title">{{ course.name }}</h5>
        <p class="card-text">{{ course.description }}</p>
    </div>
</div>
</template>
<script>
export default {
    name: 'OneCourse',
    props: ['course', 'index']
}
</script>
<style lang="">
    
</style>