<template lang="">
        <h2>{{course.title}}</h2>
        <p>{{extract}}</p>
</template>
<script>
import { computed } from 'vue';

export default {
    props: ['course'],
    setup(props) {
        const extract = computed(() => props.course.content.substring(0, 50) + '...');
        return { extract };
    },
}
</script>
<style lang="">
    
</style>