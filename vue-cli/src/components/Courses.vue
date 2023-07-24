<template>
    <div class="container mt-4">
        <div class="row">
            <div v-for="(course, index) in courses" :key="index" class="col-md-4 mb-4">
                <OneCourse :course="course" :index="index" @delete="deleteCourse($event)" />
            </div>
        </div>
    </div>
</template>

<script>
import OneCourse from './Course.vue';




export default {
    name: 'CourcesList',

    components: {
        OneCourse
    },

    data() {
        return {
            courses: [
                {
                    name: "Web Development Bootcamp",
                    description: "Learn web development from scratch and build powerful applications.",
                    imageLink: "https://source.unsplash.com/random/200x100?sig=1"
                },
                {
                    name: "Data Science Fundamentals",
                    description: "Discover the world of data science and learn to analyze data effectively.",
                    imageLink: "https://source.unsplash.com/random/200x100?sig=2"
                },
                {
                    name: "Digital Marketing Mastery",
                    description: "Master the art of digital marketing and grow your online presence.",
                    imageLink: "https://source.unsplash.com/random/200x100?sig=3"
                },
                {
                    name: "Mobile App Development",
                    description: "Create stunning mobile apps for Android and iOS platforms.",
                    imageLink: "https://source.unsplash.com/random/200x100?sig=4"
                },
                {
                    name: "Graphic Design Essentials",
                    description: "Learn the fundamentals of graphic design and unleash your creativity.",
                    imageLink: "https://source.unsplash.com/random/200x100?sig=4"
                },
            ]
        }
    },

    methods: {
        deleteCourse(id) {
            this.courses.splice(id, 1);
        }
    }
}
</script>
<style lang="">
    
</style>