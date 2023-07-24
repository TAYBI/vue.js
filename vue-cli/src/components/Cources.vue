<template>
    <div class="container mt-4">
        <div class="row">
            <div v-for="(course, index) in courses" :key="index" class="col-md-4 mb-4">
                <div class="card">
                    <img :src="`${course.imageLink}${index}`" class="card-img-top" alt="Course Image">
                    <div class="card-body">
                        <h5 class="card-title">{{ course.name }}</h5>
                        <p class="card-text">{{ course.description }}</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'CourcesList',
    data() {
        return {
            courses: [
                {
                    name: "Web Development Bootcamp",
                    description: "Learn web development from scratch and build powerful applications.",
                    imageLink: "https://source.unsplash.com/random/200x100?sig="
                },
                {
                    name: "Data Science Fundamentals",
                    description: "Discover the world of data science and learn to analyze data effectively.",
                    imageLink: "https://source.unsplash.com/random/200x100?sig="
                },
                {
                    name: "Digital Marketing Mastery",
                    description: "Master the art of digital marketing and grow your online presence.",
                    imageLink: "https://source.unsplash.com/random/200x100?sig="
                },
                {
                    name: "Mobile App Development",
                    description: "Create stunning mobile apps for Android and iOS platforms.",
                    imageLink: "https://source.unsplash.com/random/200x100?sig="
                },
                {
                    name: "Graphic Design Essentials",
                    description: "Learn the fundamentals of graphic design and unleash your creativity.",
                    imageLink: "https://source.unsplash.com/random/200x100?sig="
                },
            ]
        }
    }
}
</script>
<style lang="">
    
</style>