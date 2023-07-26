<template >
    <v-card class="pa-2 ma-2" max-width="344">
        <v-img :src="course.imageLink" height="200px" cover></v-img>
        <v-card-title>
            {{ course.title }}
        </v-card-title>

        <v-card-subtitle>
            {{ course.category }}
        </v-card-subtitle>

        <v-card-text>{{ course.description }}</v-card-text>
        <v-card-actions>
            <router-link :to="`courses/${course.id}`" :course="course">
                <v-btn>details</v-btn>
            </router-link>
        </v-card-actions>
    </v-card>
</template>
<script>
export default {
    props: ['course']
}
</script>
<style ></style>