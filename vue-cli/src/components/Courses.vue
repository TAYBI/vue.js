<template>
    <AddCources v-if="displayAdd" @addCourse="addCourse($event)" />

    <nav aria-label="breadcrumb">
        <div class="px-4 d-flex justify-content-between align-items-center">
            <ol class="breadcrumb">
                <li class="breadcrumb-item"><a href="#">Home</a></li>
                <li class="breadcrumb-item active" aria-current="page">Library</li>
            </ol>
            <button @click="toggle" :class="['btn', 'btn-sm', !displayAdd ? 'btn-success' : 'btn-dark']">{{ !displayAdd ?
                'New'
                : 'Close' }}</button>
        </div>


    </nav>
    <div class="container mt-4">
        <div class="row">
            <div v-for="(course, index) in courses" :key="index" class="col-md-4 mb-4">
                <OneCourse :course="course" :index="index" @delete="deleteCourse($event)" />
            </div>
        </div>
    </div>

    <teleport v-if="deleted" to='#alert'>
        <div class="container alert alert-danger text-center">
            <strong>Couse deleted !</strong>
        </div>
    </teleport>

    <teleport v-if="added" to='#alert'>
        <div class="container alert alert-success text-center">
            <strong>Couse addded !</strong>
        </div>
    </teleport>
</template>

<script>

import AddCources from "./AddCources";
import OneCourse from './Course.vue';


export default {
    name: 'CourcesList',

    components: {
        AddCources,
        OneCourse,
    },

    data() {
        return {
            hide: true,
            displayAdd: false,
            deleted: false,
            added: false,
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
                    imageLink: "https://source.unsplash.com/random/200x100?sig=5"
                },
            ]
        }
    },

    methods: {
        deleteCourse(id) {
            this.courses.splice(id, 1);
            this.deleted = true;
            setTimeout(() => {
                this.deleted = false
            }, 1000);
        },
        addCourse(course) {
            const course_ = { ...course, imageLink: `https://source.unsplash.com/random/200x100?sig=${this.courses.length + 1}` }

            this.courses.unshift(course_);
            this.displayAdd = false;

            this.added = true;
            setTimeout(() => {
                this.added = false
            }, 1000);
        },
        toggle() {
            this.displayAdd = !this.displayAdd;
        }
    }
}
</script>
<style lang="">
    
</style>