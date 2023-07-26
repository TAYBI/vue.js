<template>
    <div>
        <div v-for="(course, index) in courses" :key="index">
            <CourseCard :course="course"></CourseCard>
        </div>
    </div>
</template>
  
<script>
import CourseCard from '@/components/Course.vue';

export default {
    components: {
        CourseCard,
    },
    setup() {
        const courses = [
            {
                title: 'Course 1',
                content: 'Content of Course 1',
            },
            {
                title: 'Course 2',
                content: 'Content of Course 2',
            },
            {
                title: 'Course 3',
                content: 'Content of Course 3',
            },
        ];

        return { courses };
    },
};
</script>
  