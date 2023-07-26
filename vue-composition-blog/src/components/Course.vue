<template lang="">
        <h2 @click="show = !show">{{course.title}}</h2>
        <p v-if="show">{{extract}}</p>
</template>
<script>
import { computed, onMounted, onUnmounted, onUpdated, ref } from 'vue';

export default {
    props: ['course'],
    setup(props) {
        const extract = computed(() => props.course.content.substring(0, 50) + '...');


        // LIFE SYCLE HOOKS
        onMounted(() => {
            console.log('onMounted');
        })

        onUnmounted(() => {
            console.log('onUnmounted');
        })

        onUpdated(() => {
            console.log('onUpdated');
        })

        let show = ref(false)

        return { extract, show };


    },
}
</script>
<style lang="">
    
</style>